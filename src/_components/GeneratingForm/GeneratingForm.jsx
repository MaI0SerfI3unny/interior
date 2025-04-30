import { Formik } from "formik";
import * as Yup from "yup";
import { initialValues } from "../../assets/constants/formInitialValues";
import { useTranslation } from "react-i18next";

import DownloadFileInput from "../DownloadFileInput/DownloadFileInput";
import PromptInput from "../PromptInput/PromptInput";
import SelectElementContainer from "../SelectElement/SelectElementContainer";
import { GeneratingFormStyles } from "./GeneratingFormStyles.styled";
import SubmitButton from "../SubmitButton/SubmitButton";



const validationSchema = Yup.object({
  photo: Yup.mixed()
    .test("fileSize", "Файл занадто великий (максимум 150KB)", (value) => {
      if (!value) return true;
      return value.size <= initialValues.FILE_SIZE;
    })
    .test(
      "fileFormat",
      "Непідтримуваний формат (тільки JPG, JPEG, PNG)",
      (value) => {
        if (!value) return true;
        return initialValues.SUPPORTED_FORMATS.includes(value.type);
      }
    )
    .nullable()
    .notRequired(),

  prompt: Yup.string().required("Обовʼязково"),

  style: Yup.string()
    .oneOf(
      initialValues.initialStyleValues.map((style) => style.value),
      "Оберіть один із вареантів"
    )
    .required("Оберіть стиль"),

  room: Yup.string()
    .oneOf(
      initialValues.initialRoomValues.map((room) => room.value),
      "Оберіть один із вареантів"
    )
    .required("Оберіть кімнату"),
});



const GeneratingForm = ({setResult}) => {
  const { t } = useTranslation();

  const handleSubmit = (values) => {
    console.log(values);
    setResult(values)
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
            value={values.photo}
            onChange={(e) => {
              const file = e.target?.files?.[0] || e;
              if (file) {
                setFieldValue("photo", file);
              }
            }}
            onDeletePhoto={() => setFieldValue("photo", null)}
          />

          <PromptInput />
          <SelectElementContainer
            initialValues={initialValues.initialStyleValues}
            name='style'
            title={t('generate.chooseStyle')}
          />

          <SelectElementContainer 
          initialValues={initialValues.initialRoomValues} 
          name='room'
          title={t('generate.chooseRoom')}
          />

          <SubmitButton disabled={!values.prompt || !values.style} />
          <p className="text-count-trying">
            {t('generate.attentionText')}
          </p>
        </GeneratingFormStyles>
      )}
    </Formik>
  );
};

export default GeneratingForm;
