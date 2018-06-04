import {
	ShoppingCart,
	guestStrategy,
	regularStrategy,
	premiumStrategy
} from '../../../GoF/behavorial/strategy'

describe('strategy', () => {
	test('sanity', () => {
		const shoppingCart1 = new ShoppingCart(guestStrategy)
		shoppingCart1.setAmount(100)

		const shoppingCart2 = new ShoppingCart(regularStrategy)
		shoppingCart2.setAmount(100)

		const shoppingCart3 = new ShoppingCart(premiumStrategy)
		shoppingCart3.setAmount(100)

		const total1 = shoppingCart1.checkout()
		const total2 = shoppingCart2.checkout()
		const total3 = shoppingCart3.checkout()

		expect(total1).toBe(100 * 1)
		expect(total2).toBe(100 * 0.9)
		expect(total3).toBe(100 * 0.8)
	})
})
