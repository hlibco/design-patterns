import {
	Cabbinet,
	FloppyDisk,
	HardDrive,
	Memory
} from '../../../GoF/structural/composite'

describe('composite', () => {
	test('sanity', () => {
		const cabbinet = new Cabbinet()
		const floppyDisk = new FloppyDisk()
		const hardDrive = new HardDrive()
		const memory = new Memory()

		expect(cabbinet.getName()).toBe('Cabbinet')
		expect(floppyDisk.getName()).toBe('Floppy Disk')
		expect(hardDrive.getName()).toBe('Hard Drive')
		expect(memory.getName()).toBe('Memory')

		cabbinet.add(floppyDisk)
		cabbinet.add(hardDrive)
		cabbinet.add(memory)

		expect(cabbinet.getCheckoutPrice()).toBe(70 + 250 + 280)
	})
})
