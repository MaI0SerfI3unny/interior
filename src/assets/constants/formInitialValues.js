const FILE_SIZE = 150 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const initialStyleValues = [
  { text: "Класичний", value: "classic" },
  { text: "Мінімалізм", value: "minimal" },
  { text: "Сучасний", value: "suchasniy" },
  { text: "Вінтажний", value: "vintage" },
  { text: "Модерн", value: "modern" },
  { text: "Індустріальний", value: "industrial" },
];

const initialRoomValues = [
  { text: "Кухня", value: "kitchen" },
  { text: "Студія", value: "studio" },
  { text: "Вітальня", value: "hello" },
  { text: "Ванна кімната", value: "bathroom" },
  { text: "Спальня", value: "sleep" },
];

const initialFormValues = {
  photo: null,
  prompt: "",
  style: "",
  room: "kitchen",
};

export const initialValues = {
  FILE_SIZE,
  SUPPORTED_FORMATS,
  initialStyleValues,
  initialRoomValues,
  initialFormValues,
};
