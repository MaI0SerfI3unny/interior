const FILE_SIZE = 150 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const initialStyleValues = [
  "classic",
  "minimal",
  "contemporary",
  "vintage",
  "modern",
  "industrial",
  "scandinavian",
  "contemporary",
  "loft",
  "provence",
  "hi-tech",
];

const initialRoomValues = [
  "kitchen",
  "studio",
  "living-room",
  "bathroom",
  "bedroom",
];

const initialFormValues = {
  original: null,
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
