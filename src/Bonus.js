import {
  ERROR_MESSAGE,
  ERROR_TEXT,
  splitInput,
  validateBlank,
  validateInteger,
  validateNumber,
  validateRange,
} from "./utils/validation.js";

class Bonus {
  constructor(bonusNumber, winNumbers) {
    validateBlank(bonusNumber, ERROR_MESSAGE.bonusNumber);
    const SPLITED_BONUS = splitInput(bonusNumber);
    const BONUS_NUMBER = validateNumber(SPLITED_BONUS);
    validateInteger(BONUS_NUMBER);
    validateRange(BONUS_NUMBER);
    this.#validateBonusLength(BONUS_NUMBER);
    this.#validateDuplicateWithWinNumber(BONUS_NUMBER, winNumbers);
    this.bonusNumber = BONUS_NUMBER;
  }

  #validateBonusLength(bonusNumber) {
    if (bonusNumber.length !== 1) {
      throw new Error(`${ERROR_TEXT} 보너스 번호는 1개여야 합니다.`);
    }
  }
  #validateDuplicateWithWinNumber(bonusNumber, winNumbers) {
    const [BONUS_NUM] = bonusNumber;
    if (winNumbers.includes(BONUS_NUM)) {
      throw new Error(`${ERROR_TEXT} 보너스 번호가 당첨번호와 중복됩니다.`);
    }
  }
}
export default Bonus;
