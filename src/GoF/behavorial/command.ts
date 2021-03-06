interface ICommand {
	execute: () => void
}
interface IDevice {
	on: () => void
	off: () => void
	getState: () => boolean
}

class Cockpit {
	constructor(private command: ICommand) {}

	execute() {
		this.command.execute()
	}
}

class OnCommand implements ICommand {
	constructor(private device: IDevice) {}

	execute() {
		this.device.on()
	}
}

class OffCommand implements ICommand {
	constructor(private device: IDevice) {}

	execute() {
		this.device.off()
	}
}

class Turbine implements IDevice {
	private state = false

	on() {
		this.state = true
	}

	off() {
		this.state = false
	}

	getState() {
		return this.state
	}
}

export { Cockpit, Turbine, OnCommand, OffCommand }
