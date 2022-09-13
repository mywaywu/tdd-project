class Money {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	times(multiplier) {
		return new Money(this.amount * multiplier, this.currency);
	}

	divide(divisor) {
		return new Money(this.amount / divisor, this.currency);
	}

	add(money) {
		if (this.currency === money.currency) {
			return new Money(this.amount + money.amount, this.currency);
		}
		throw new Error(`Cannot add ${money.currency} to ${this.currency}`);
	}
}

module.exports = Money;