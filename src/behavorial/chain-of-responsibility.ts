/**
 * How to use:
 *
 * const shoopingCart = new ShoppingCart()
 * shoopingCart.addProduct(5)
 * shoopingCart.addProduct(12)
 *
 * const discount = (new Discount()).calculate(products)
 */

class ShoppingCart {
	private products = [] as any[]

	addProduct(product) {
		this.products.push(product)
	}

	getProducts() {
		return this.products
	}
}

class Discount {
	calculate(products) {
		// Based on number of items
		const numberDiscount = new NumberDiscount()

		// Based on the total price of items
		const priceDiscount = new PriceDiscount()

		// Useful to make all discounts execute next
		const noneDiscount = new NoneDiscount()

		numberDiscount.setNext(priceDiscount)
		priceDiscount.setNext(noneDiscount)

		return numberDiscount.exec(products)
	}
}

class NumberDiscount {
	private next

	setNext(fn) {
		this.next = fn
	}

	exec(products) {
		const result = products.length > 2 ? 0.05 : 0

		return result + this.next.exec(products)
	}
}

class PriceDiscount {
	private next

	setNext(fn) {
		this.next = fn
	}

	exec(products) {
		const total = products.reduce((a, b) => a + b)
		const result = total >= 500 ? 0.1 : 0

		return result + this.next.exec(products)
	}
}

class NoneDiscount {
	exec(_0) {
		return 0
	}
}

export { ShoppingCart, Discount }
