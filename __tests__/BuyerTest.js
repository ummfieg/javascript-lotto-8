import Buyer from "../src/Buyer";

describe("구매자 클래스 금액 테스트", () => {
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
    const VALIDATED_COST = new Buyer(VALID_COST);
    //then
    expect(VALIDATED_COST.price).toEqual(5000);
  });
  test("금액 입력시 숫자가 아닐경우 예외가 발생한다.", () => {
    //given
    const INVALID_COST = ["stirng", "@"];
    //when
    INVALID_COST.forEach((cost) => {
      expect(() => new Buyer(cost)).toThrow("[ERROR]");
    });
  });

  test("금액 입력시 공백을 입력할 경우 예외가 발생한다.", () => {
    const BLANK_INPUTS = ["  ", "\n", "\t"];
    BLANK_INPUTS.forEach((blank) => {
      expect(() => new Buyer(blank)).toThrow("[ERROR]");
    });
  });
  test("입력한 총 금액을 구매한 갯수로 나타낼 수 있다.", () => {
    //given
    const INPUT_PRICE = "7000";
    const EXPECTED_TICKET_COUNT = 7;
    //when
    const PRICE_CALC = new Buyer(INPUT_PRICE);
    const TICKET_COUNT = PRICE_CALC.priceCalc();
    // then
    expect(TICKET_COUNT).toEqual(EXPECTED_TICKET_COUNT);
  });
});

// describe("구매자 클래스 입력 번호 테스트", () => {
//   test("당첨");
// });
