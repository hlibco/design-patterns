class CarProxy {
  constructor(private driver) {}

  drive() {
    if (this.driver.age < 18) {
      throw new Error('too young to drive')
    }
    return new Car().drive()
  }
}

class Driver {
  constructor(public age) {}
}

class Car {
  drive() {
    return 'driving'
  }
}

export { CarProxy, Driver }
