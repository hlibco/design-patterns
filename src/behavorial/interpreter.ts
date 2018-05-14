class Sum {
	constructor(private left: Num, private right: Num) {}

	interpret() {
		return this.left.interpret() + this.right.interpret()
	}
}

class Subtract {
	constructor(private left: Num, private right: Num) {}

	interpret() {
		return this.left.interpret() - this.right.interpret()
	}
}

class Num {
	constructor(private val: number) {}

	interpret() {
		return this.val
	}
}

export { Num, Subtract, Sum }
