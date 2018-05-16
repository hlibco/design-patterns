class Soldier {
	constructor(public level) {}

	attack() {
		return this.level * 1
	}
}

class Jedi {
	constructor(public level) {}

	attackWithSaber() {
		return this.level * 100
	}
}

class JediAdapter {
	constructor(public jedi) {}

	attack() {
		return this.jedi.attackWithSaber()
	}
}

export { Soldier, Jedi, JediAdapter }
