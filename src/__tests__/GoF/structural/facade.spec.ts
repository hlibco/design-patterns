import ShopFacade from '../../../GoF/structural/facade'

describe('facade', () => {
	test('sanity', () => {
		const shopFacade = new ShopFacade()
		const total = shopFacade.calc(100)

		expect(total).toBe(100 - 10 + 5 + 3)
	})
})
