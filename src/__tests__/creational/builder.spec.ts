import RequestBuilder from '../../creational/builder'

describe('builder', () => {
	test('sanity', () => {
		const data = {
			url: 'https://www.google.com',
			method: 'post',
			payload: { query: 'javascript' }
		}

		const requestBuilder = new RequestBuilder()
		const request = requestBuilder
			.forUrl(data.url)
			.useMethod(data.method)
			.payload(data.payload)
			.build()

		expect(request.url).toBe(data.url)
		expect(request.method).toBe(data.method)
		expect(request.payload).toEqual(data.payload)
	})
})
