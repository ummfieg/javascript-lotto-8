import { Console, Random } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  ERROR_TEXT,
  validateBlank,
  validateNumber,
} from "./utils/validation.js";

class Buyer {
  static TICKET_PRICE = 1000;
  static UNIT = 1000;
  #price;

  constructor(price) {
    validateBlank(price, ERROR_MESSAGE.priceNumber);
    const VALID_PRICE = validateNumber(price);
    this.#validatePirce(VALID_PRICE);
    this.#price = VALID_PRICE;
    this.getPrice();
  }
  #validatePirce(VALID_PRICE) {
    if (VALID_PRICE % Buyer.UNIT !== 0) {
      throw new Error(
        ` ${ERROR_TEXT} 입력할 수 있는 금액은 ${Buyer.UNIT}원 단위여야 합니다.`
      );
    }
  }

  countTickets() {
    const TICKET_COUNT = this.#price / Buyer.TICKET_PRICE;
    return TICKET_COUNT;
  }

  randomNumbers() {
    const ROUND_COUNT = this.countTickets();
    const ROUND_NUMBERS = Object.freeze(
      Array.from({ length: ROUND_COUNT }, () =>
        Object.freeze(
          Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
        )
      )
    );
    return ROUND_NUMBERS;
  }

  getPrice() {
    return this.#price;
  }
}

export default Buyer;
