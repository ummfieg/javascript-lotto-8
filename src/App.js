import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Buyer from "./Buyer.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      let buyer;
      while (true) {
        try {
          const PURCHASE_PRICE = await Console.readLineAsync(
            "구입금액을 입력해 주세요.\n"
          );
          buyer = new Buyer(PURCHASE_PRICE);
          break;
        } catch (e) {
          Console.print(e.message);
        }
      }
      const TICKET_COUNT = buyer.countTickets();
      const PUBLISHED_NUMBERS = buyer.randomNumbers(TICKET_COUNT);
      const INPUT_PRICE = buyer.getPrice();

      Console.print(`${TICKET_COUNT}개를 구매했습니다.`);
      PUBLISHED_NUMBERS.forEach((numbers) =>
        Console.print(`[${numbers.join(", ")}]`)
      );
      let lotto;
      while (true) {
        try {
          const INPUT_WIN_NUMBER = await Console.readLineAsync(
            "당첨번호를 입력해 주세요\n"
          );
          lotto = new Lotto(INPUT_WIN_NUMBER);
          break;
        } catch (e) {
          Console.print(e.message);
        }
      }

      const WIN_NUMBERS = lotto.getInputNumber();
      let bonus;
      while (true) {
        try {
          const INPUT_BONUS_NUMBER = await Console.readLineAsync(
            "보너스 번호를 입력해 주세요\n"
          );
          bonus = new Bonus(INPUT_BONUS_NUMBER, WIN_NUMBERS);
          break;
        } catch (e) {
          Console.print(e.message);
        }
      }

      const RESULT_CLAC = new Calculator(
        PUBLISHED_NUMBERS,
        WIN_NUMBERS,
        bonus.bonusNumber,
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
