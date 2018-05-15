import { Product, Markup, Taxes } from '../../behavorial/observer'

describe('observer', () => {
	test('sanity', () => {
		const product = new Product()
		const markup = new Markup()
		const taxes = new Taxes()

		product.register(markup)
		product.register(taxes)

		product.setBasePrice(100)
		const price1 = product.getPrice()
		const expectPrice1 = 100 * 1.3 * 1.09

		product.unregister(taxes)
		product.setBasePrice(100)
		const price2 = product.getPrice()
    const expectPrice2 = 100 * 1.3

    // Unregistering an unregistered observer
    product.unregister(taxes)
		product.setBasePrice(100)
		const price3 = product.getPrice()
		const expectPrice3 = expectPrice2

		expect(price1).toBe(expectPrice1)
    expect(price2).toBe(expectPrice2)
    expect(price3).toBe(expectPrice3)
	})
})
