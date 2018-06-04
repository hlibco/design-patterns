class Printer {
	constructor(private brand, private ink) {}

	print() {
		return `Printer: ${this.brand}, Ink: ${this.ink.get()}`
	}
}

class EpsonPrinter extends Printer {
	constructor(ink) {
		super('Epson', ink)
	}
}

class HPprinter extends Printer {
	constructor(ink) {
		super('HP', ink)
	}
}

class Ink {
	constructor(private type: 'acrylic-based' | 'alcohol-based') {}
	get() {
		return this.type
	}
}

class AcrylicInk extends Ink {
	constructor() {
		super('acrylic-based')
	}
}

class AlcoholInk extends Ink {
	constructor() {
		super('alcohol-based')
	}
}

export { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk }
