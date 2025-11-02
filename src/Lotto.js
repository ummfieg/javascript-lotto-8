// numbers 이외의 인스턴스 변수(필드) 추가할 수 없음.
// numbers의 접근제한자(#) 변경할 수 없다.

import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
import { validateBlank, validateNumber } from "./utils/validation.js";

class Lotto {
  #numbers;

  constructor(numbers, lottoCount) {
    this.enteredNumbers = new Set();
    validateBlank(numbers);
    this.#validateComma(numbers);
    const SPLITED = this.splitInput(numbers);
    const NUMBER_ARRAY = validateNumber(SPLITED);
    this.#validateInteger(NUMBER_ARRAY);
    this.#validateRange(NUMBER_ARRAY);
    this.#validateDuplicate(NUMBER_ARRAY);
    this.#validateLimitNumbers(NUMBER_ARRAY);
    this.#numbers = NUMBER_ARRAY;
    this.lottoCount = lottoCount;
  }

  #validateComma(numbers) {
    const COMMA_PATTERN = /(^,|,,|,$|[^0-9.,])/;
    if (COMMA_PATTERN.test(numbers)) {
      throw new Error("[ERROR] 숫자는 쉼표(,)로 구분되어야 합니다.");
    }
  }

  #validateRange(SPLITED_NUMBER) {
    SPLITED_NUMBER.forEach((num) => {
      if (num > 45 || num < 1) {
        throw new Error("[ERROR] 당첨금액은 1부터45사이의 값이어야 합니다.");
      }
    });
  }

  #validateLimitNumbers(InputNumbers) {
    if (InputNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(InputNumbers) {
    InputNumbers.forEach((num) => {
      if (this.enteredNumbers.has(num)) {
        throw new Error("[ERROR] 중복된 당첨번호입니다.");
      }
      this.enteredNumbers.add(num);
    });
  }

  splitInput(InputNumbers) {
    if (typeof InputNumbers === "string") {
      const SPLITED_NUMBER = InputNumbers.split(",");
      return SPLITED_NUMBER;
    }
    return [InputNumbers];
  }

  #validateInteger(InputNumbers) {
    InputNumbers.forEach((num) => {
      if (!Number.isInteger(num)) {
        throw new Error("[ERROR] 번호는 정수만 입력할 수 있습니다.");
      }
    });
  }
}

export default Lotto;
