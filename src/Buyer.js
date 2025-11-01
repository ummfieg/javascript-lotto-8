import { Console } from "@woowacourse/mission-utils";
import { validateBlank, validateNumber } from "./utils/validation";

// 구매자가 구매한 갯수, 내역 관리
class Buyer {
  static ERROR_TEXT = "[ERROR]";
  constructor(price) {
    validateBlank(price);
    this.price = Number(price);
    validateNumber(this.price);
    this.#validatePirce();
  }
  #validatePirce() {
    if (this.price % 1000 !== 0) {
      throw new Error(
        ` ${Buyer.ERROR_TEXT} 입력할 수 있는 금액은 1000원 단위여야 합니다.`
      );
    }
  }

  priceCalc() {
    const TICKET_COUNT = this.price / 1000;
    Console.print(`${TICKET_COUNT}개를 구매했습니다.`);
    return TICKET_COUNT;
  }
}

export default Buyer;
