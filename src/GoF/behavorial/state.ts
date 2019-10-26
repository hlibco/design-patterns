class Order {
  private state = new WaitingForPayment()

  nextState() {
    this.state = this.state.next()
  }

  getStateLabel() {
    return this.state.getLabel()
  }
}

class OrderStatus {
  constructor(private label: string, private nextStatus) {}

  next() {
    return new this.nextStatus()
  }

  getLabel() {
    return this.label
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping)
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered)
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered)
  }
}

export { Order }
