import { Num, Subtract, Sum } from '../../behavorial/interpreter'

describe('interpreter', () => {
	test('subtract()', () => {
		const left = new Num(25)
		const right = new Num(10)

		const result = new Subtract(left, right).interpret()
		expect(result).toBe(25 - 10)
	})
})

test('sum()', () => {
	const left = new Num(25)
	const right = new Num(10)

	const result = new Sum(left, right).interpret()
	expect(result).toBe(25 + 10)
})
