function bonusVisitor(employee) {
	const salary = employee.getSalary()

	if (employee instanceof Manager) {
		employee.setBonus(salary * 2)
	}

	if (employee instanceof Developer) {
		employee.setBonus(salary)
	}
}

class Employee {
	bonus = 0

	constructor(private salary: number) {}

	accept(visitor: (entity: Employee) => void) {
		visitor(this)
	}

	setBonus(bonus: number) {
		this.bonus = bonus
	}

	getSalary(): number {
		return this.salary
	}
}

class Manager extends Employee {
	constructor(salary: number) {
		super(salary)
	}
}

class Developer extends Employee {
	constructor(salary: number) {
		super(salary)
	}
}

export { Developer, Manager, bonusVisitor }
