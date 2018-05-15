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

	accept(visitor) {
		visitor(this)
  }

  setBonus(bonus) {
    this.bonus = bonus
  }

  getSalary() {
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
