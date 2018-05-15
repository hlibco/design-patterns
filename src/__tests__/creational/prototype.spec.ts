import Sheep from '../../creational/prototype'

describe('prototype', () => {
	test('sanity', () => {
		const sheep1 = new Sheep('dolly', 60)
		const sheep2 = sheep1.clone()

		expect(sheep1.name).toBe('dolly')
    expect(sheep1.weight).toBe(60)

    sheep1.name = 'dolly1'
    expect(sheep1.name).toBe('dolly1')

		expect(sheep2.name).toBe('dolly')
    expect(sheep2.weight).toBe(60)

    sheep2.name = 'dolly2'
    expect(sheep2.name).toBe('dolly2')
	})
})
