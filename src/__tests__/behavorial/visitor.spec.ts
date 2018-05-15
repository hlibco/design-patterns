import { Developer, Manager, bonusVisitor } from '../../behavorial/visitor'

describe('visitor', () => {
	test('calculate manager bonus', () => {
    const manager = new Manager(100)
    manager.accept(bonusVisitor)

    expect(manager.bonus).toBe(200)
  })

  test('calculate developer bonus', () => {
    const developer = new Developer(100)
    developer.accept(bonusVisitor)

    expect(developer.bonus).toBe(100)
  })
})
