class Product {
  private price: number = 0
  public actions = [] as any[]

  setBasePrice(price: number) {
    this.price = price
    this.notifyAll()
  }

  setPrice(price: number) {
    this.price = price
  }

  getPrice() {
    return this.price
  }

  register(observer) {
    this.actions.push(observer)
  }

  unregister(observer) {
    // this.actions = this.actions.filter(el => el !== observer)
    const index = this.actions.indexOf(observer)
    if (index > -1) {
      this.actions.splice(index, 1)
    }
  }

  notifyAll() {
    return this.actions.forEach(el => el.update(this))
  }
}

class Markup {
  update(product: Product) {
    const price = product.getPrice()
    const markup = 0.3
    product.setPrice(price * (1 + markup))
  }
}

class Taxes {
  update(product) {
    product.price = product.price * (1 + 0.09)
  }
}

export { Product, Markup, Taxes }
