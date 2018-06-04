import { Airplane, TrafficTower } from '../../../GoF/behavorial/mediator'

describe('mediator', () => {
	test('', () => {
		const trafficTower = new TrafficTower()
		const airplane = new Airplane(50, trafficTower)

		expect(airplane.requestPositions()[0]).toBe(50)
		expect(trafficTower.requestPositions()[0]).toBe(50)
	})
})
