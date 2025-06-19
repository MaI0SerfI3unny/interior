export const mock = (qnt, text) => {
  const data = Array(qnt)
    .fill(0)
    .map((_, idx) => {
      const number = (idx + 1).toString();

      return {
        title: `${text}.title${number}`,
        text: `${text}.text${number}`,
      };
    });

  return data;
};
