import { Soldier, Jedi, JediAdapter } from '../../../GoF/structural/adapter'

describe('adapter', () => {
	test('sanity', () => {
		const soldier = new Soldier(100)
		const jedi = new Jedi(100)
		const adaptedJedi = new JediAdapter(jedi)

		expect(adaptedJedi.attack()).toBe(soldier.attack() * 100)
	})
})
