import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,5,6,7");
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,5,5");
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("당첨금액 입력시 공백일 경우 예외가 발생한다.", () => {
    expect(() => {
      const BLANK_INPUTS = ["  ", "\n", "\t"];
      BLANK_INPUTS.forEach((blank) => {
        expect(() => new Lotto(blank)).toThrow("[ERROR]");
      });
    });
  });
  test("당첨금액은 쉼표로 구분되어있지않으면 예외가 발생한다.", () => {
    const INPUT_NUMBER = "1/2/3/4!5@6";
    expect(() => {
      new Lotto(INPUT_NUMBER);
    }).toThrow("[ERROR]");
  });

  test("당첨금액은 1-45의 범위가 아니면 예외가 발생한다.", () => {
    const INVALIDATE_RANGE = "1,2,5,46,3,22";
    expect(() => {
      new Lotto(INVALIDATE_RANGE);
    }).toThrow("[ERROR]");
  });
  test("당첨번호는 정수 형태가 아닐경우 예외가 발생한다.", () => {
    const INVALDATE_VALUE = 3.3;
    expect(() => {
      new Lotto(INVALDATE_VALUE);
    }).toThrow("[ERROR]");
  });
  test("구매자가 입력한 당첨번호는 정상입력일 경우 통과", () => {
    //given
    const VALID_NUMBER = "1,12,7,34,22,28";
    //when
    const RESULT = new Lotto(VALID_NUMBER);
    const VALID_RESULT = RESULT.getInputNumber();
    //then
    expect(VALID_RESULT).toEqual([1, 12, 7, 34, 22, 28]);
  });
});
