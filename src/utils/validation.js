export const ERROR_TEXT = "[ERROR]";
export const ERROR_MESSAGE = Object.freeze({
  priceNumber: "금액을 입력해주세요",
  winNumber: "당첨번호를 입력해주세요",
  bonusNumber: "보너스번호를 입력해주세요",
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

export const splitInput = (InputNumbers) => {
  if (typeof InputNumbers === "string") {
    const SPLITED_NUMBER = InputNumbers.split(",");
    return SPLITED_NUMBER;
  }
  return [InputNumbers];
};
export const validateInteger = (InputNumbers) => {
  InputNumbers.forEach((num) => {
    if (!Number.isInteger(num)) {
      throw new Error("[ERROR] 번호는 정수만 입력할 수 있습니다.");
    }
  });
};
export const validateRange = (SPLITED_NUMBER) => {
  SPLITED_NUMBER.forEach((num) => {
    if (num > 45 || num < 1) {
      throw new Error("[ERROR] 번호는 1부터45사이의 값이어야 합니다.");
    }
  });
};
