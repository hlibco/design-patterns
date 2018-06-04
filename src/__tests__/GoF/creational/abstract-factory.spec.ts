import vehicleProducer from '../../../GoF/creational/abstract-factory'

describe('abstract-factory', () => {
	test('car', () => {
		const carFactory = vehicleProducer('car')
		const info = carFactory().info()

		expect(info).toBe('the car')
	})

	test('motorcycle', () => {
		const motorcycleFactory = vehicleProducer('motorcycle')
		const info = motorcycleFactory().info()

		expect(info).toBe('the motorcycle')
	})
})
