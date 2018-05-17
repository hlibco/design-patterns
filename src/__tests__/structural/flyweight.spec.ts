import ColorFactory from '../../structural/flyweight'

describe('flyweight', () => {
	test('sanity', () => {
		const colorFactory = new ColorFactory()
		const colorRed1 = colorFactory.create('red')
		const colorRed2 = colorFactory.create('red')

		expect(colorRed1.name).toBe('red')
		expect(colorRed2.name).toBe('red')
	})
})
