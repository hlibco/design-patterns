class Person {
  static instance
  public name

  constructor() {
    if (typeof Person.instance === 'undefined') {
      Person.instance = this
    }

    return Person.instance
  }
}

export { Person }
