import { Console } from "@woowacourse/mission-utils";

// 구매자가 구매한 갯수, 내역 관리
class Buyer {
  static ERROR_TEXT = "[ERROR]";
  constructor(price) {
    this.#validateBlank(price);
    this.price = Number(price);
    this.#validateNumber();
    this.#validatePirce();
  }
  #validateBlank(price) {
    if (!price || price.trim() === "") {
      throw new Error(`${Buyer.ERROR_TEXT} 금액을 입력해주세요.`);
    }
  }
  #validateNumber() {
    if (isNaN(this.price)) {
      throw new Error(` ${Buyer.ERROR_TEXT} 숫자만 입력할 수 있습니다.`);
    }
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
