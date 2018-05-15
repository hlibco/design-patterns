function vehicleProducer(type: string) {
	if (type === 'car') {
		return carFactory
	}
	return motorcycleFactory
}

function carFactory() {
	return new Car()
}

function motorcycleFactory() {
	return new Motorcycle()
}

class Car {
	info() {
		return 'the car'
	}
}

class Motorcycle {
	info() {
		return 'the motorcycle'
	}
}

export default vehicleProducer
