class ShopFacade {
  discount = new Discount()
  shipping = new Shipping()
  fees = new Fees()

  calc(price: number) {
    const discount = this.discount.calc(price)
    const fees = this.fees.calc(price)
    const shipping = this.shipping.calc()

    const total = price - discount + fees + shipping

    return total
  }
}

class Discount {
  calc(value: number) {
    return value * 0.1
  }
}

class Shipping {
  calc() {
    return 3
  }
}

class Fees {
  calc(value: number) {
    return value * 0.05
  }
}

export { ShopFacade }
