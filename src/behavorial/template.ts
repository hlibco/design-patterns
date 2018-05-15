class Tax {
	calc(value: number) {
		if (value >= 1000) {
			value = this.overThousand(value)
		}

		return this.complementaryFee(value)
	}

	complementaryFee(value: number) {
		return value + 10
	}
}

class Tax1 extends Tax {
	constructor() {
		super()
	}

	overThousand(value: number) {
		return value * 1.1
	}
}

class Tax2 extends Tax {
	constructor() {
		super()
	}

	overThousand(value: number) {
		return value * 1.2
	}
}

export { Tax1, Tax2 }
