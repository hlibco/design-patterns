// Equipment
class Equipment {
	price: number = 0
	name: string

	getPrice() {
		return this.price
	}

	getName() {
		return this.name
	}

	setName(name: string) {
		this.name = name
	}
}

// --- composite ---
class Composite extends Equipment {
	equipments: Equipment[] = []

	constructor() {
		super()
	}

	add(equipment: Equipment) {
		this.equipments.push(equipment)
	}

	getCheckoutPrice() {
		return this.equipments
			.map(equipment => {
				return equipment.getPrice()
			})
			.reduce((a, b) => {
				return a + b
			})
	}
}

class Cabbinet extends Composite {
	constructor() {
		super()
		this.setName('Cabbinet')
	}
}

// --- leafs ---
class FloppyDisk extends Equipment {
	price: number = 70

	constructor() {
		super()
		this.setName('Floppy Disk')
	}
}

class HardDrive extends Equipment {
	price: number = 250

	constructor() {
		super()
		this.setName('Hard Drive')
	}
}

class Memory extends Equipment {
	price: number = 280

	constructor() {
		super()
		this.setName('Memory')
	}
}

export { Cabbinet, FloppyDisk, HardDrive, Memory }
