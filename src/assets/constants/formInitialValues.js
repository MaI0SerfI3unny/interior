const FILE_SIZE = 150 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const initialStyleValues = [
  { label: "Класичний", value: "classic" },
  { label: "Мінімалізм", value: "minimal" },
  { label: "Сучасний", value: "suchasniy" },
  { label: "Вінтажний", value: "vintage" },
  { label: "Модерн", value: "modern" },
  { label: "Індустріальний", value: "industrial" },
];

const initialRoomValues = [
  { label: "Кухня", value: "kitchen" },
  { label: "Студія", value: "studio" },
  { label: "Вітальня", value: "hello" },
  { label: "Ванна кімната", value: "bathroom" },
  { label: "Спальня", value: "sleep" },
];

const initialFormValues = {
  photo: null,
  prompt: "",
  style: "classic",
  room: "kitchen",
};

export const initialValues = {
  FILE_SIZE,
  SUPPORTED_FORMATS,
  initialStyleValues,
  initialRoomValues,
  initialFormValues,
};
