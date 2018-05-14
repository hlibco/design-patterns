class Memento {
	constructor(private value) {}

	getValue() {
		return this.value
	}
}

const originator = {
	store: val => {
		return new Memento(val)
	},
	restore: (memento: Memento) => {
		return memento.getValue()
	}
}

class Caretaker {
	values: Memento[] = []

	addMemento(memento: Memento) {
		this.values.push(memento)
	}

	getMemento(index: number) {
		return this.values[index]
	}
}

export { originator, Caretaker }
