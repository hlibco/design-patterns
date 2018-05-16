import {
	EpsonPrinter,
	HPprinter,
	AcrylicInk,
	AlcoholInk
} from '../../structural/bridge'

describe('bridge', () => {
	test('sanity', () => {
		const acrylicInk = new AcrylicInk()
		const alcoholInk = new AlcoholInk()
		const epsonPrinter = new EpsonPrinter(acrylicInk)
		const hpPrinter = new HPprinter(alcoholInk)

		expect(acrylicInk.get()).toBe('acrylic-based')
		expect(alcoholInk.get()).toBe('alcohol-based')

		expect(epsonPrinter.print()).toBe('Printer: Epson, Ink: acrylic-based')
		expect(hpPrinter.print()).toBe('Printer: HP, Ink: alcohol-based')
	})
})
