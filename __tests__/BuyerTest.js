import Buyer from "../src/Buyer";

describe("구매자 클래스 테스트", () => {
  test("총 구입금액은 1,000원 단위가 아니면 예외가 발생한다.", () => {
    //given
    const INVALID_COST = 500;
    // when-then
    expect(() => {
      new Buyer(INVALID_COST);
    }).toThrow("[ERROR]");
  });

  test("총 구입금액은 1,000원 단위일 경우 통과", () => {
    //givne
    const VALID_COST = 5000;
    // when
    const VALIDATED_COST = new Buyer(VALID_COST);
    //then
    expect(VALIDATED_COST.price).toEqual(5000);
  });
});
