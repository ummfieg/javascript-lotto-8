import "../src/Bonus.js";
import Bonus from "../src/Bonus.js";

describe("보너스 클래스 테스트", () => {
  test("보너스 번호의 개수가 1개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("1,2");
    }).toThrow("[ERROR]");
  });

  test("당첨번호와 보너스번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("6", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스번호 입력시 공백일 경우 예외가 발생한다.", () => {
    expect(() => {
      const BLANK_INPUTS = ["  ", "\n", "\t"];
      BLANK_INPUTS.forEach((blank) => {
        expect(() => new Bonus(blank)).toThrow("[ERROR]");
      });
    });
  });

  test("보너스번호는 숫자형태가 아니면 예외가 발생한다.", () => {
    const INVALID_INPUT = "@";
    expect(() => {
      new Bonus(INVALID_INPUT);
    }).toThrow("[ERROR]");
  });

  test("보너스번호는 1-45의 범위가 아니면 예외가 발생한다.", () => {
    const INVALIDATE_RANGE = "55";
    expect(() => {
      new Bonus(INVALIDATE_RANGE);
    }).toThrow("[ERROR]");
  });

  test("보너스번호는 정수 형태가 아닐경우 예외가 발생한다.", () => {
    const INVALDATE_VALUE = "3.3";
    expect(() => {
      new Bonus(INVALDATE_VALUE);
    }).toThrow("[ERROR]");
  });

  test("구매자가 입력한 보너스번호는 정상입력일 경우 통과", () => {
    const BONUS_NUMBER = "7";
    const WIN_NUMBERS = [1, 2, 3, 4, 5, 6];
    const RESULT_BONUS = new Bonus(BONUS_NUMBER, WIN_NUMBERS);
    console.log(RESULT_BONUS.bonusNumber);
    expect(RESULT_BONUS.bonusNumber).toEqual([7]);
  });
});
