export const ERROR_TEXT = "[ERROR]";
export const ERROR_MESSAGE = Object.freeze({
  priceNumber: "금액을 입력해주세요",
  winNumber: "당첨번호를 입력해주세요",
  bonuseNumber: "보너스번호를 입력해주세요",
});

export const validateBlank = (value, errorMessage) => {
  if (typeof value === "string" && value.trim() === "") {
    throw new Error(`${ERROR_TEXT} ${errorMessage}`);
  }
  return value;
};
export const validateNumber = (value) => {
  if (Array.isArray(value)) {
    return value.map((num) => {
      const CONVERTED_NUMBERS = Number(num);
      if (isNaN(CONVERTED_NUMBERS)) {
        throw new Error(`${ERROR_TEXT} 숫자만 입력할 수 있습니다.`);
      }
      return CONVERTED_NUMBERS;
    });
  }

  const CONVERTED_NUMBERS = Number(value); //price로직, 보너스
  if (isNaN(CONVERTED_NUMBERS)) {
    throw new Error(`${ERROR_TEXT} 숫자만 입력할 수 있습니다.`);
  }
  return CONVERTED_NUMBERS;
};
