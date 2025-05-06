export const mock = qnt => {
  const data = Array(qnt)
    .fill(0)
    .map((_, idx) => {
      const number = (idx + 1).toString();

      return {
        title: `terms.title${number}`,
        text: `terms.text${number}`,
      };
    });

  return data;
};
