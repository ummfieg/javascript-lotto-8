import Calculator from "../src/Calculator";

describe("계산 클래스 테스트", () => {
  let publishedNum;
  let bonusNum;
  let inputPrice;
  let calculator;

  beforeEach(() => {
    publishedNum = [[1, 2, 3, 4, 5, 6]];
    bonusNum = [7];
    inputPrice = 1000;
  });

  test("당첨번호와 발행번호가 일치 한 총 상금을 계산한다.", () => {
    //given
    const WIN_NUM = [1, 2, 3, 4, 35, 20];
    const MATCH_LIST = new Calculator(
      publishedNum,
      WIN_NUM,
      bonusNum,
      inputPrice
    );
    //when
    const MATCH_RESULT = MATCH_LIST.calculateTotalPrize();
    //then
    expect(MATCH_RESULT).toBe(50000);
  });

  test("당첨금액의 수익률을 계산한다.", () => {
    //given
    const WIN_NUM = [1, 2, 3, 7, 35, 20];
    const CALC_RATE = new Calculator(
      publishedNum,
      WIN_NUM,
      bonusNum,
      inputPrice
    );
    //when
    const CALC_RESULT = CALC_RATE.calculateRateReturn();
    //then
    expect(CALC_RESULT).toBe(500);
  });
});
