import { Console, Random } from "@woowacourse/mission-utils";
import { validateBlank, validateNumber } from "./utils/validation.js";

// 구매자가 구매한 갯수, 내역 관리
class Buyer {
  static ERROR_TEXT = "[ERROR]";
  #price;

  constructor(price) {
    validateBlank(price);
    const VALID_PRICE = validateNumber(price);
    this.#validatePirce(VALID_PRICE);
    this.#price = VALID_PRICE;
    this.getPrice();
  }
  #validatePirce(VALID_PRICE) {
    if (VALID_PRICE % 1000 !== 0) {
      throw new Error(
        ` ${Buyer.ERROR_TEXT} 입력할 수 있는 금액은 1000원 단위여야 합니다.`
      );
    }
  }

  countTickets() {
    const TICKET_COUNT = this.#price / 1000;
    return TICKET_COUNT;
  }

  randomNumbers() {
    const ROUND_COUNT = this.countTickets();
    const ROUND_NUMBERS = Object.freeze(
      Array.from({ length: ROUND_COUNT }, () =>
        Object.freeze(Random.pickUniqueNumbersInRange(1, 45, 6))
      )
    );
    return ROUND_NUMBERS;
  }

  getPrice() {
    return this.#price;
  }
}

export default Buyer;
