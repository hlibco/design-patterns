import Iterator from '../../../GoF/behavorial/iterator'

describe('iterator', () => {
	test('next() & hasNext()', () => {
		const iterator = new Iterator([10, 20])

		expect(iterator.next()).toBe(10)
		expect(iterator.hasNext()).toBe(true)
		expect(iterator.next()).toBe(20)
		expect(iterator.hasNext()).toBe(false)
	})
})
