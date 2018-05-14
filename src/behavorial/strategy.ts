class ShoppingCart {
	amount = 0
	constructor(private discountStrategy) {}

	setAmount(amount) {
		this.amount = amount
	}

	checkout() {
		return this.discountStrategy(this.amount)
	}
}

function guestStrategy(amount) {
	return amount
}

function regularStrategy(amount) {
	return amount * 0.9
}

function premiumStrategy(amount) {
	return amount * 0.8
}

export { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy }
