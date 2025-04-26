import { Formik } from "formik";
import * as Yup from "yup";

import DownloadFileInput from "../DownloadFileInput/DownloadFileInput";
import PromptInput from "../PromptInput/PromptInput";
import SelectStyleInputContainer from "../SelectStyleInputContainer/SelectStyleInputContainer";
import SelectRoomContainer from "../SelectRoom/SelectRoomContainer";
import { GeneratingFormStyles } from "./GeneratingFormStyles.styled";
import SubmitButton from "../SubmitButton/SubmitButton";

const FILE_SIZE = 150 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const initialStyleValues = [
  { text: "Класичний", initialValue: "classic" },
  { text: "Мінімалізм", initialValue: "minimal" },
  { text: "Сучасний", initialValue: "suchasniy" },
  { text: "Вінтажний", initialValue: "vintage" },
  { text: "Модерн", initialValue: "modern" },
  { text: "Індустріальний", initialValue: "industrial" },
];

const initialRoomValues = [
  { text: "Кухня", value: "kitchen" },
  { text: "Студія", value: "studio" },
  { text: "Вітальня", value: "hello" },
  { text: "Ванна кімната", value: "bathroom" },
  { text: "Спальня", value: "sleep" },
];

const validationSchema = Yup.object({
  photo: Yup.mixed()
    .test("fileSize", "Файл занадто великий (максимум 150KB)", (value) => {
      if (!value) return true;
      return value.size <= FILE_SIZE;
    })
    .test(
      "fileFormat",
      "Непідтримуваний формат (тільки JPG, JPEG, PNG)",
      (value) => {
        if (!value) return true;
        return SUPPORTED_FORMATS.includes(value.type);
      }
    )
    .nullable()
    .notRequired(),

  prompt: Yup.string().required("Обовʼязково"),

  style: Yup.string()
    .oneOf(
      initialStyleValues.map((style) => style.initialValue),
      "Выберите один из вариантов"
    )
    .required("Оберіть стиль"),

  room: Yup.string()
    .oneOf(
      initialRoomValues.map((room) => room.value),
      "Выберите страну из списка"
    )
    .required("Поле обязательно"),
});

const initialValues = {
  photo: null,
  prompt: "",
  style: "",
  room: "kitchen",
};

const GeneratingForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
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
          <SelectStyleInputContainer
            initialValues={initialStyleValues}
            value={values.style}
          />
          <SelectRoomContainer initialValues={initialRoomValues} />

          <SubmitButton disabled={!values.prompt || !values.style} />
          <p className="text-count-trying">
            *у вас є 10 безкоштовних генерацій
          </p>
        </GeneratingFormStyles>
      )}
    </Formik>
  );
};

export default GeneratingForm;
