export const ERROR_TEXT = "[ERROR]";
//TODO: 에러메시지 재사용 로직으로 변경
export const validateBlank = (value) => {
  if (typeof value === "string" && value.trim() === "") {
    throw new Error(`${ERROR_TEXT} 금액을 입력해주세요.`);
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
