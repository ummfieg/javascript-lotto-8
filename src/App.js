import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Buyer from "./Buyer.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        "구매금액을 입력해 주세요\n"
      );
      const lottoBuyer = new Buyer(purchaseAmount);
      Console.print(purchaseAmount);
      const chooseNumbers = await Console.readLineAsync(
        "당첨번호를 입력해 주세요\n"
      );
      const bonusNumber = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요\n"
      );

      const lottoCount = lottoBuyer.priceCalc();
    } catch (e) {
      Console.print(e.message);
      throw e;
    }
  }
}

export default App;
