import {
	ShoppingCart,
	Discount
} from '../../behavorial/chain-of-responsibility'

describe('chain-of-responsibility', () => {
	let shoppingCart: ShoppingCart
	beforeEach(() => {
		shoppingCart = new ShoppingCart()
	})

	test('add producst to shooping cart', () => {
		shoppingCart.addProduct(1)
		shoppingCart.addProduct(2)
		const products = shoppingCart.getProducts()

		expect(products.length).toBe(2)
	})

	test('calculate discount for < 3 items & < $500', () => {
		shoppingCart.addProduct(1)
		shoppingCart.addProduct(2)
		const products = shoppingCart.getProducts()

		const discount = new Discount().calculate(products)

		expect(discount).toBe(0)
	})

	test('calculate discount for < 3 items & > $500', () => {
		shoppingCart.addProduct(1000)
		shoppingCart.addProduct(2000)
		const products = shoppingCart.getProducts()

		const discount = new Discount().calculate(products)

		expect(discount).toBe(0.1)
	})

	test('calculate discount for > 2 items & < $500', () => {
		shoppingCart.addProduct(1)
		shoppingCart.addProduct(2)
		shoppingCart.addProduct(3)
		const products = shoppingCart.getProducts()

		const discount = new Discount().calculate(products)

		expect(discount).toBe(0.05)
	})

	test('calculate discount for > 2 items & > $500', () => {
		shoppingCart.addProduct(1000)
		shoppingCart.addProduct(2000)
		shoppingCart.addProduct(3000)
		const products = shoppingCart.getProducts()

		const discount = new Discount().calculate(products)

		expect(discount).toBe(0.1 + 0.05)
	})
})
