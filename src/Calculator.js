class Calculator {
  #result;

  constructor(publishedNum, winNum, bonuseNum, inputPrice) {
    this.publishedNum = publishedNum;
    this.winNum = winNum;
    this.bonuseNum = bonuseNum;
    this.inputPrice = inputPrice;

    this.#result = {
      "3개 일치": { count: 0, prize: 5000 },
      "4개 일치": { count: 0, prize: 50000 },
      "5개 일치": { count: 0, prize: 1500000 },
      "5개 일치, 보너스 볼 일치": { count: 0, prize: 30000000 },
      "6개 일치": { count: 0, prize: 2000000000 },
    };
    this.#calculateResults();
  }

  #calculateResults() {
    this.publishedNum.forEach((ticket) => {
      const MATCH_COUNT = this.#countMatches(ticket);
      const BONUSE_MATCHED = this.#isBonusMatched(ticket, MATCH_COUNT);

      if (MATCH_COUNT === 6) return this.#result["6개 일치"].count++;
      if (MATCH_COUNT === 5 && BONUSE_MATCHED)
        return this.#result["5개 일치, 보너스 볼 일치"].count++;
      if (MATCH_COUNT === 5) return this.#result["5개 일치"].count++;
      if (MATCH_COUNT === 4) return this.#result["4개 일치"].count++;
      if (MATCH_COUNT === 3) return this.#result["3개 일치"].count++;
    });
    return this.#result;
  }
  #countMatches(ticket) {
    const ROUND_MATCHED_NUMBER = ticket.filter((num) =>
      this.winNum.includes(num)
    ).length;
    return ROUND_MATCHED_NUMBER;
  }

  #isBonusMatched(ticket, matchCount) {
    const MATCHED_BONUSE_NUMBER =
      matchCount === 5 && ticket.includes(this.bonusNum);
    return MATCHED_BONUSE_NUMBER;
  }

  calculateTotalPrize() {
    const TOTAL_PRIZE = Object.values(this.#result).reduce(
      (sum, { count, prize }) => sum + count * prize,
      0
    );
    return TOTAL_PRIZE;
  }

  calculateRateReturn() {
    const TOTAL_PRIZE = this.calculateTotalPrize();
    const TOTAL_RATE = (TOTAL_PRIZE / this.inputPrice) * 100;
    const RATE_ROUNDED = Math.round(TOTAL_RATE * 100) / 100;
    return Number(RATE_ROUNDED.toFixed(1));
  }

  getResultString() {
    const RESUT_STRING = Object.entries(this.#result).map(
      ([label, { count, prize }]) =>
        `${label} (${prize.toLocaleString()}원) - ${count}개`
    );
    return RESUT_STRING.join("\n");
  }
}

export default Calculator;
