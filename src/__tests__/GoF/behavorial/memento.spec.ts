import { originator, Caretaker } from '../../../GoF/behavorial/memento'

describe('memento', () => {
	test('sanity', () => {
		const careTaker = new Caretaker()
		careTaker.addMemento(originator.store('hello'))
		careTaker.addMemento(originator.store('hello world'))
		careTaker.addMemento(originator.store('hello world !!!'))

		const result = originator.restore(careTaker.getMemento(1))
		expect(result).toBe('hello world')
	})
})
