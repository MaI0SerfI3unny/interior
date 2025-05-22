import { Formik } from "formik";
import * as Yup from "yup";
import { initialValues } from "../../assets/constants/formInitialValues";
import { useTranslation } from "react-i18next";
import { useStyleOptions } from "../../assets/hooks/useStyleOptions";
import { useRoomOptions } from "../../assets/hooks/useRoomOptions";
import { toastError } from "../../assets/functions/toastNotification";
import { safeApi } from "../../api/safeApi";
import { convertToBase64 } from "../../assets/functions/convertToBase64";
import { waitForPhoto } from "../../assets/functions/waitForPhoto";

import DownloadFileInput from "../DownloadFileInput/DownloadFileInput";
import PromptInput from "../PromptInput/PromptInput";
import SelectElementContainer from "../SelectElement/SelectElementContainer";
import { GeneratingFormStyles } from "./GeneratingFormStyles.styled";
import SubmitButton from "../SubmitButton/SubmitButton";

const validationSchema = Yup.object({
  original: Yup.mixed()
    .test("fileSize", "Файл занадто великий (максимум 150KB)", value => {
      if (!value) return true;
      return value.size <= initialValues.FILE_SIZE;
    })
    .test(
      "fileFormat",
      "Непідтримуваний формат (тільки JPG, JPEG, PNG)",
      value => {
        if (!value) return true;
        return initialValues.SUPPORTED_FORMATS.includes(value.type);
      }
    )
    .nullable()
    .notRequired(),

  prompt: Yup.string().required("Обовʼязково"),

  style: Yup.string()
    .oneOf(initialValues.initialStyleValues, "Оберіть один із вареантів")
    .required("Оберіть стиль"),

  room: Yup.string()
    .oneOf(initialValues.initialRoomValues, "Оберіть один із вареантів")
    .required("Оберіть кімнату"),
});

const GeneratingForm = ({ setResult, setIsLoadingAnswer, isLoadingAnswer }) => {
  const { t } = useTranslation();
  const initialStylesValues = useStyleOptions();
  const initialRoomValues = useRoomOptions();

  const handleSubmit = async values => {
    setIsLoadingAnswer(true);

    try {
      const fullPrompt = `${values.prompt}. Create a style for the ${values.room} in style ${values.style}`;

      const imageBase = await convertToBase64(values.original);

      const result = await safeApi.post("/ai-interior-gen/generate/", {
        prompt: fullPrompt,
        image: imageBase,
      });

      console.log(result.data.task_id);
      const photoData = await waitForPhoto(result.data.task_id);

      setResult({
        original: imageBase,
        style: values.style,
        room: values.room,
        result: photoData.url,
      });
    } catch (error) {
      toastError(t("settings.error"));
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues.initialFormValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => (
        <GeneratingFormStyles>
          <DownloadFileInput
            value={values.original}
            onChange={e => {
              const file = e.target?.files?.[0] || e;
              if (file) {
                setFieldValue("original", file);
              }
            }}
            onDeletePhoto={() => setFieldValue("original", null)}
          />

          <PromptInput />
          <SelectElementContainer
            initialValues={initialStylesValues}
            name="style"
            title={t("generate.chooseStyle")}
            currentValue={values.style}
          />

          <SelectElementContainer
            initialValues={initialRoomValues}
            name="room"
            title={t("generate.chooseRoom")}
            currentValue={values.room}
          />

          <SubmitButton
            disabled={!values.prompt || !values.style || isLoadingAnswer}
          />
          <p className="text-count-trying">{t("generate.attentionText")}</p>
        </GeneratingFormStyles>
      )}
    </Formik>
  );
};

export default GeneratingForm;
