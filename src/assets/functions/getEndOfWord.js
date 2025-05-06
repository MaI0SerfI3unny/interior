export function getEndOfWord(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return "firstGeneration";
  } else if (
    [2, 3, 4].includes(lastDigit) &&
    ![12, 13, 14].includes(lastTwoDigits)
  ) {
    return `secondGeneration`;
  } else {
    return `thirdGeneration`;
  }
}
