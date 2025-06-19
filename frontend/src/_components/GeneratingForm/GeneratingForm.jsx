import { Formik } from "formik";
import * as Yup from "yup";
import { initialValues } from "../../assets/constants/formInitialValues";
import { useTranslation } from "react-i18next";
import { useStyleOptions } from "../../assets/hooks/useStyleOptions";
import { useRoomOptions } from "../../assets/hooks/useRoomOptions";
import { toastError } from "../../assets/functions/toastNotification";
import api from "../../api/axios.config";
import { convertToBase64 } from "../../assets/functions/convertToBase64";
import { waitForPhoto } from "../../assets/functions/waitForPhoto";
import { useSelector, useDispatch } from "react-redux";
import DownloadFileInput from "../DownloadFileInput/DownloadFileInput";
import PromptInput from "../PromptInput/PromptInput";
import SelectElementContainer from "../SelectElement/SelectElementContainer";
import { GeneratingFormStyles } from "./GeneratingFormStyles.styled";
import SubmitButton from "../SubmitButton/SubmitButton";
import { selectUser } from "../../redux/user/selectors";
import { useFreeCount } from "../../redux/user/slice";

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
  const { freeCount, active_plan } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    setIsLoadingAnswer(true);

    try {
      let url;

      if (values.original) {
        const imageBase = await convertToBase64(values.original);
        const { data } = await api.post("/generate/upload", {
          photo: imageBase,
        });
        url = data.url;
      }

      const fullPrompt = `${values.prompt}. Create a style for the ${values.room} in style ${values.style}`;

      const requestData = url
        ? {
            prompt: fullPrompt,
            // eslint-disable-next-line no-undef
            image: `${process.env.REACT_APP_IMG_URL}${url}`,
          }
        : { prompt: fullPrompt };
      const result = await api.post("/ai-interior-gen/generate/", requestData);

      const photoData = await waitForPhoto(result.data.task_id);

      setResult({
        original: url,
        style: values.style,
        room: values.room,
        result: photoData.url,
        prompt: values.prompt,
      });

      dispatch(useFreeCount());
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
            disabled={
              !values.prompt || !values.style || isLoadingAnswer || !freeCount
            }
          />
          {active_plan?.tariff_name === "Free" && (
            <p className="text-count-trying">{`${t("generate.attentionText_firstPart")} ${freeCount} ${t("generate.attentionText_secondPart")}`}</p>
          )}
        </GeneratingFormStyles>
      )}
    </Formik>
  );
};

export default GeneratingForm;
