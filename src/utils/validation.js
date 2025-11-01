//모두 (숫자, 공백)
const ERROR_TEXT = "[ERROR]";
export const validateBlank = (price) => {
  if (!price || price.trim() === "") {
    throw new Error(`${ERROR_TEXT} 금액을 입력해주세요.`);
  }
};
export const validateNumber = (price) => {
  if (isNaN(Number(price))) {
    throw new Error(` ${ERROR_TEXT} 숫자만 입력할 수 있습니다.`);
  }
};
