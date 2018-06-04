import {
	Penne,
	SauceDecorator,
	CheeseDecorator
} from '../../../GoF/structural/decorator'

describe('flyweight', () => {
	test('sanity', () => {
		const penne = new Penne()
		const priceOfPenne = penne.getPrice()

		const sauce = new SauceDecorator(penne)
		const priceOfPenneWithSauce = sauce.getPrice()

		const cheese = new CheeseDecorator(penne)
		const priceOfPenneWithCheese = cheese.getPrice()

		expect(priceOfPenne).toBe(8)
		expect(priceOfPenneWithSauce).toBe(14)
		expect(priceOfPenneWithCheese).toBe(12)
	})
})
