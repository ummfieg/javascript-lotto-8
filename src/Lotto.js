import {
  ERROR_MESSAGE,
  ERROR_TEXT,
  splitInput,
  validateBlank,
  validateInteger,
  validateNumber,
  validateRange,
} from "./utils/validation.js";

class Lotto {
  #numbers;

  constructor(numbers, bonuseNumber) {
    this.enteredNumbers = new Set();
    validateBlank(numbers, ERROR_MESSAGE.winNumber);
    this.#validateComma(numbers);
    const SPLITED = splitInput(numbers);
    const NUMBER_ARRAY = validateNumber(SPLITED);
    validateInteger(NUMBER_ARRAY);
    validateRange(NUMBER_ARRAY);
    this.#validateDuplicate(NUMBER_ARRAY);
    this.#validateWinLength(NUMBER_ARRAY);
    this.#numbers = NUMBER_ARRAY;
    this.getInputNumber();
  }

  #validateComma(numbers) {
    const COMMA_PATTERN = /(^,|,,|,$|[^0-9.,])/;
    if (COMMA_PATTERN.test(numbers)) {
      throw new Error(`${ERROR_TEXT} 숫자는 쉼표(,)로 구분되어야 합니다.`);
    }
  }

  #validateWinLength(InputNumbers) {
    if (InputNumbers.length !== 6) {
      throw new Error(`${ERROR_TEXT} 로또 번호는 6개여야 합니다.`);
    }
  }

  #validateDuplicate(InputNumbers) {
    InputNumbers.forEach((num) => {
      if (this.enteredNumbers.has(num)) {
        throw new Error(`${ERROR_TEXT} 중복된 당첨번호입니다.`);
      }
      this.enteredNumbers.add(num);
    });
  }

  getInputNumber() {
    return [...this.#numbers];
  }
}

export default Lotto;
