interface IAirplane {
  position: number
  trafficTower: TrafficTower
}

interface ITrafficTower {
  airplanes: IAirplane[]
  registerAirplane: (airplane: IAirplane) => void
  requestPositions: () => number[]
}

class Airplane implements IAirplane {
  constructor(public position: number, public trafficTower: ITrafficTower) {
    trafficTower.registerAirplane(this)
  }

  requestPositions() {
    return this.trafficTower.requestPositions()
  }
}

class TrafficTower implements ITrafficTower {
  readonly airplanes: IAirplane[] = []

  registerAirplane(airplane: IAirplane) {
    this.airplanes.push(airplane)
  }

  requestPositions(): number[] {
    return this.airplanes.map(airplane => {
      return airplane.position
    })
  }
}

export { Airplane, TrafficTower }
