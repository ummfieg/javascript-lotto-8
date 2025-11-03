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
  describe("당첨 금액 반환 테스트", () => {
    test("당첨번호가 3개 일치 시 5,000원을 반환한다.", () => {
      //given
      const WIN_NUM = [1, 2, 3, 10, 11, 12];
      const MATCH_LIST = new Calculator(
        publishedNum,
        WIN_NUM,
        bonusNum,
        inputPrice
      );
      //when
      const MATCH_RESULT = MATCH_LIST.calculateTotalPrize();
      //then
      expect(MATCH_RESULT).toBe(5000);
    });

    test("당첨번호가 4개 일치 시 50,000원을 반환한다.", () => {
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
    test("당첨번호가 5개 일치 시 1,500,000원을 반환한다.", () => {
      //given
      const WIN_NUM = [1, 2, 3, 4, 5, 10];
      const MATCH_LIST = new Calculator(
        publishedNum,
        WIN_NUM,
        bonusNum,
        inputPrice
      );
      //when
      const MATCH_RESULT = MATCH_LIST.calculateTotalPrize();
      //then
      expect(MATCH_RESULT).toBe(1500000);
    });
    test("당첨번호 5개 + 보너스 일치 시30,000,000원을 반환한다.", () => {
      //given
      const WIN_NUM = [1, 2, 3, 4, 5, 10];
      const BONUS_NUM = [6];
      const MATCH_LIST = new Calculator(
        publishedNum,
        WIN_NUM,
        BONUS_NUM,
        inputPrice
      );
      //when
      const MATCH_RESULT = MATCH_LIST.calculateTotalPrize();
      //then
      expect(MATCH_RESULT).toBe(30000000);
    });
    test("당첨번호 6개 일치 시 2,000,000,000원을 반환한다.", () => {
      //given
      const WIN_NUM = [1, 2, 3, 4, 5, 6];

      const MATCH_LIST = new Calculator(
        publishedNum,
        WIN_NUM,
        bonusNum,
        inputPrice
      );
      //when
      const MATCH_RESULT = MATCH_LIST.calculateTotalPrize();
      //then
      expect(MATCH_RESULT).toBe(2000000000);
    });
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
