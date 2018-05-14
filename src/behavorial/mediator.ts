interface IAirplane {
	position: number
	trafficTower: TrafficTower
}

interface ITrafficTower {
	airplanes: IAirplane[]
	requestPositions: () => number[]
}

class Airplane implements IAirplane {
	constructor(public position: number, public trafficTower: ITrafficTower) {
		trafficTower.airplanes.push(this)
	}

	requestPositions() {
		return this.trafficTower.requestPositions()
	}
}

class TrafficTower implements ITrafficTower {
	airplanes: IAirplane[] = []

	requestPositions(): number[] {
		return this.airplanes.map(airplane => {
			return airplane.position
		})
	}
}

export { Airplane, TrafficTower }
