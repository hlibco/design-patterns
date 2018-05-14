import {
	Cockpit,
	Turbine,
	OnCommand,
	OffCommand
} from '../../behavorial/command'

describe('command', () => {
	let turbine: Turbine

	beforeEach(() => {
		turbine = new Turbine()
	})

	test('turbine is on', () => {
		const turbineOn = new OnCommand(turbine)
		const cockpit = new Cockpit(turbineOn)
		cockpit.execute()

		expect(turbine.getState()).toBe(true)
	})

	test('turbine is off', () => {
		const turbineOff = new OffCommand(turbine)
		const cockpit = new Cockpit(turbineOff)
		cockpit.execute()

		expect(turbine.getState()).toBe(false)
	})
})
