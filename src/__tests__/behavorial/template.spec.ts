import { Tax, Tax1, Tax2 } from '../../behavorial/template'

describe('template', () => {
	test('calc', () => {
		const tax1 = new Tax1()
		const val1A = tax1.calc(50)
		const val1B = tax1.calc(2000)

		const tax2 = new Tax2()
		const val2 = tax2.calc(2000)

		expect(val1A).toBe(50 + 10)
		expect(val1B).toBe(2000 * 1.1 + 10)
		expect(val2).toBe(2000 * 1.2 + 10)
	})

	test('Tax', () => {
		const tax = new Tax()
		const val = tax.overThousand(50)

		expect(val).toBe(50)
	})
})
