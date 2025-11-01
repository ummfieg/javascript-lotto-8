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
    validateNumber(numbers);
    this.#numbers = numbers;
    this.#validateDuplicate(this.#numbers);
    this.#validateLimitNumbers(this.#numbers);
    this.lottoCount = lottoCount;
  }

  #validateLimitNumbers(InputNumbers) {
    if (InputNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(InputNumbers) {
    for (let num of InputNumbers) {
      if (this.enteredNumbers.has(num)) {
        throw new Error("[ERROR] 중복된 당첨번호입니다.");
      }
      this.enteredNumbers.add(num);
    }
  }
}

export default Lotto;
