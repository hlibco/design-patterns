class Color {
	constructor(public name) {}
}

export default class ColorFactory {
	colors = {}

	create(name) {
		const color = this.colors[name]

		if (color) {
			return color
		}

		this.colors[name] = new Color(name)
		return this.colors[name]
	}
}
