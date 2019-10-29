import { Person } from '../../../GoF/creational/singleton'

describe('singleton', () => {
  test('sanity', () => {
    const personA = new Person()
    const personB = new Person()

    personA.name = 'Bob'

    expect(personA.name).toEqual(personB.name)
  })
})
