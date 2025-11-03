import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Buyer from "./Buyer.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        "구매금액을 입력해 주세요.\n"
      );

      const lottoBuyer = new Buyer(purchaseAmount);
      const TICKET_COUNT = lottoBuyer.countTickets();
      const PUBLISHED_NUMBERS = lottoBuyer.randomNumbers(TICKET_COUNT);
      const INPUT_PRICE = lottoBuyer.getPrice();

      Console.print(`${TICKET_COUNT}개를 구매했습니다.`);
      PUBLISHED_NUMBERS.forEach((numbers) =>
        Console.print(`[${numbers.join(", ")}]`)
      );

      const INPUT_WIN_NUMBER = await Console.readLineAsync(
        "당첨번호를 입력해 주세요\n"
      );
      const LOTTO_NUMBER = new Lotto(INPUT_WIN_NUMBER);
      const WIN_NUMBERS = LOTTO_NUMBER.getInputNumber();
      const INPUT_BONUS_NUMBER = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요\n"
      );
      const BONUS_NUMBER = new Bonus(INPUT_BONUS_NUMBER, WIN_NUMBERS);

      const RESULT_CLAC = new Calculator(
        PUBLISHED_NUMBERS,
        WIN_NUMBERS,
        BONUS_NUMBER.bonusNumber,
        INPUT_PRICE
      );
      Console.print("당첨 통계");
      Console.print("---");
      const RESULT_LIST = RESULT_CLAC.getResultString();
      const RESULT_NUM = RESULT_CLAC.calculateRateReturn();
      Console.print(RESULT_LIST);
      Console.print(`총 수익률은 ${RESULT_NUM}%입니다.`);
    } catch (e) {
      Console.print(e.message);
      throw e;
    }
  }
}

export default App;
