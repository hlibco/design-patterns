class Pasta {
  constructor(public price = 0) {}

  getPrice() {
    return this.price
  }
}

class Penne extends Pasta {
  constructor(public price = 8) {
    super(price)
  }
}

class PastaDecorator extends Pasta {
  constructor(public pasta) {
    super()
  }

  getPrice() {
    // Additional charge to decorate the pasta
    const additionalCharge = 1
    return this.pasta.getPrice() + additionalCharge
  }
}

class SauceDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta)
  }

  getPrice() {
    const decoratedPastaPrice = super.getPrice()
    return decoratedPastaPrice + 5
  }
}

class CheeseDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta)
  }

  getPrice() {
    const decoratedPastaPrice = super.getPrice()
    return decoratedPastaPrice + 3
  }
}

export { Penne, SauceDecorator, CheeseDecorator }
