const Money = require("./money");

class Portfolio {
	constructor() {
		this.moneys = [];
	}

	add(...moneys) {
		this.moneys = this.moneys.concat(moneys);
	}

	evaluate(bank, currency) {
		let failures = [];
		let total = this.moneys.reduce((sum, money) => {
			try {
				let convertedMoney = bank.convert(money, currency);
				return sum + convertedMoney.amount;
			} catch (e) {
				failures.push(e.message);
				return sum;
			}
		}, 0);
		if (failures.length === 0) {
			return new Money(total, currency);
		}
		throw new Error("Missing exchange rate(s):[" + failures.join(",") + "]");
	}
}

module.exports = Portfolio;