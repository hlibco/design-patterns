import BmwFactory from '../../creational/factory'

describe('factory', () => {
	test('sanity', () => {
		const bmwX5 = BmwFactory.create('X5')
		const bmwX6 = BmwFactory.create('X6')
		const bmwX7 = () => BmwFactory.create('X7' as any)

		expect(bmwX5.model).toBe('X5')
		expect(bmwX5.price).toBe(108000)

		expect(bmwX6.model).toBe('X6')
		expect(bmwX6.price).toBe(111000)

		expect(bmwX7).toThrow()
	})
})
