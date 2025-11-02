import Buyer from "../src/Buyer";

describe("구매자 클래스 테스트", () => {
  describe("금액 입력값 검증 테스트", () => {
    test("총 구입금액은 1,000원 단위가 아니면 예외가 발생한다.", () => {
      //given
      const INVALID_COST = "500";
      // when-then
      expect(() => {
        new Buyer(INVALID_COST);
      }).toThrow("[ERROR]");
    });

    test("총 구입금액은 1,000원 단위일 경우 통과", () => {
      //givne
      const VALID_COST = "5000";
      // when
      const RESULT = new Buyer(VALID_COST);
      const VALIDATED_COST = RESULT.getPrice();
      //then
      expect(VALIDATED_COST).toBe(5000);
    });

    test("금액 입력시 숫자가 아닐경우 예외가 발생한다.", () => {
      //given
      const INVALID_COST = ["stirng", "@"];
      //when-then
      INVALID_COST.forEach((cost) => {
        expect(() => new Buyer(cost)).toThrow("[ERROR]");
      });
    });

    test("금액 입력시 공백을 입력할 경우 예외가 발생한다.", () => {
      //given
      const BLANK_INPUTS = ["  ", "\n", "\t"];
      //when-then
      BLANK_INPUTS.forEach((blank) => {
        expect(() => new Buyer(blank)).toThrow("[ERROR]");
      });
    });
  });
  describe("금액 입력값 반환 테스트", () => {
    test("입력한 총 금액을 구매한 갯수로 나타낼 수 있다.", () => {
      //given
      const INPUT_PRICE = "7000";
      const EXPECTED_TICKET_COUNT = 7;
      //when
      const PRICE_CALC = new Buyer(INPUT_PRICE);
      const TICKET_COUNT = PRICE_CALC.countTickets();
      // then
      expect(TICKET_COUNT).toBe(EXPECTED_TICKET_COUNT);
    });

    test("총 금액이 6000원일 때 구입 갯수는 6을 반환한다.", () => {
      //when
      const TICKET_CLAC = new Buyer(6000);
      //then
      expect(TICKET_CLAC.countTickets()).toBe(6);
    });

    test("로또 구입 갯수만큼 로또가 발행되어야 한다.", () => {
      //given
      const BUYER = new Buyer(6000);
      //when
      const TICKET_COUNT = BUYER.countTickets();
      const RESULT = BUYER.randomNumbers();
      //then
      expect(RESULT.length).toBe(TICKET_COUNT);
      // 각 티켓이 6개 숫자로 구성되었는지
      RESULT.forEach((ticket) => {
        expect(ticket.length).toBe(6);
      });
    });
  });
});
