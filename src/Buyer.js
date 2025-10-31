import { Console } from "@woowacourse/mission-utils";

// 구매자가 구매한 갯수, 내역 관리
class Buyer {
  static ERROR_TEXT = "[ERROR]";
  constructor(price) {
    this.price = price;
    this.#validatePirce(price);
  }
  #validatePirce() {
    if (this.price % 1000 !== 0) {
      throw new Error(
        ` ${Buyer.ERROR_TEXT} 입력할 수 있는 금액은 1000원 단위여야 합니다.`
      );
    }
  }
}

export default Buyer;
