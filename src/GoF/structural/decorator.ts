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
  constructor(public pasta: Pasta) {
    super()
  }

  getPrice() {
    // Additional charge to decorate the pasta
    const additionalCharge = 1
    return this.pasta.getPrice() + additionalCharge
  }
}

class SauceDecorator extends PastaDecorator {
  constructor(pasta: Pasta) {
    super(pasta)
  }

  getPrice() {
    const decoratedPastaCharge = super.getPrice()
    return decoratedPastaCharge + 5
  }
}

class CheeseDecorator extends PastaDecorator {
  constructor(pasta: Pasta) {
    super(pasta)
  }

  getPrice() {
    const decoratedPastaCharge = super.getPrice()
    return decoratedPastaCharge + 3
  }
}

export { Penne, SauceDecorator, CheeseDecorator }
