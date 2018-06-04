export class CarProxy {
	constructor(private driver) {}

	drive() {
		if (this.driver.age < 18) {
			throw new Error('too young to drive')
		}
		return new Car().drive()
	}
}

export class Driver {
	constructor(public age) {}
}

export class Car {
	drive() {
		return 'driving'
	}
}
