import { FeeCalculator } from '../../Architectural/interceptor'

describe('interceptor', () => {
	test('sanity', () => {
		const context = {
			season: 'summer',
			period: 'morning',
			price: 0
		}
		const calculator = new FeeCalculator(context)

		const summerSeason = context => {
			if (context.season === 'summer') {
				context.price += 10
			}
		}

		const morningPeriod = context => {
			if (context.period === 'morning') {
				context.price += 5
			}
		}

		calculator.use(summerSeason)
		calculator.use(morningPeriod)
		calculator.execute()

		expect(calculator.getContext().price).toBe(15)
	})
})
