class Request {
	url = ''
	method = ''
	payload = {}
}

class RequestBuilder {
	request = new Request()

	forUrl(url: string) {
		this.request.url = url
		return this
	}

	useMethod(method: string) {
		this.request.method = method
		return this
	}

	payload(payload: object) {
		this.request.payload = payload
		return this
	}

	build() {
		return this.request
	}
}

export default RequestBuilder
