class Pasta {
	constructor(public price = 0) {}

	getPrice() {
		return this.price
	}
}

class Penne extends Pasta {
	constructor(public price = 8) {
		super()
	}
}

class PastaDecorator extends Pasta {
	constructor(public pasta) {
		super()
	}

	getPrice() {
		return this.pasta.getPrice()
	}
}

class SauceDecorator extends PastaDecorator {
	constructor(pasta) {
		super(pasta)
	}

	getPrice() {
		return super.getPrice() + 5
	}
}

class CheeseDecorator extends PastaDecorator {
	constructor(pasta) {
		super(pasta)
	}

	getPrice() {
		return super.getPrice() + 3
	}
}

export { Penne, SauceDecorator, CheeseDecorator }
