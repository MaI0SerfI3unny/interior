import result from "../../pictures/result-image.jpg";

export const imitationGeneration = function (formValues) {
  return {
    ...formValues,
    result,
  };
};
