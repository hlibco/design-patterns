import { Person } from '../../../GoF/creational/singleton'

describe('singleton', () => {
  test('sanity', () => {
    const personA = new Person()
    const personB = new Person()

    expect(personA).toEqual(personB)
  })
})
