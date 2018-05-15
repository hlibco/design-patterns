class Product {
	private price = 0
	public actions = [] as any[]

	setBasePrice(price: number) {
		this.price = price
		this.notifyAll()
	}

	getPrice() {
		return this.price
	}

	register(observer) {
		this.actions.push(observer)
	}

	unregister(observer) {
    // this.actions = this.actions.filter(el => el !== observer)
    const index = this.actions.indexOf(observer);
    if (index > -1) {
      this.actions.splice(index, 1);
    }
	}

	notifyAll() {
		return this.actions.forEach(el => el.update(this))
	}
}

class Markup {
	update(product) {
		product.price = product.price * (1 + 0.3)
	}
}

class Taxes {
	update(product) {
		product.price = product.price * (1 + 0.09)
	}
}

export { Product, Markup, Taxes }
