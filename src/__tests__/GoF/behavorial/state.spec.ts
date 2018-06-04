import Order from '../../../GoF/behavorial/state'

describe('state', () => {
	test('sanity', () => {
		const order = new Order()
		const label1 = order.getStateLabel()

		order.nextState()
		const label2 = order.getStateLabel()

		order.nextState()
		const label3 = order.getStateLabel()

		expect(label1).toBe('waitingForPayment')
		expect(label2).toBe('shipping')
		expect(label3).toBe('delivered')
	})
})
