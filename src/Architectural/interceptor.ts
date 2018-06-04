class FeeCalculator {
	private middlewares: any[] = [] as any[]

	constructor(private context) {}

	// Register interceptor
	public use(middleware: IMiddleware) {
		this.middlewares.push(middleware)
	}

	public execute() {
		this.middlewares.forEach(middleware => {
			middleware(this.context)
		})
	}

	public getContext() {
		return this.context
	}
}

type IMiddleware = (request?, response?, next?) => void

export { FeeCalculator, IMiddleware }
