class BmwFactory {
	static create(type: 'X5' | 'X6') {
		switch (type) {
			case 'X5':
				return new Bmw(type, 108000)
			case 'X6':
				return new Bmw(type, 111000)
		}
		throw new Error('Invalid BMW Type')
	}
}

class Bmw {
	constructor(public model: 'X5' | 'X6', public price: number) {}
}

export default BmwFactory
