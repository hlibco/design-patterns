class Person {
  static instance
  public name

  constructor() {
    if (typeof Person.instance !== 'object') {
      Person.instance = this
    }

    return Person.instance
  }
}

export { Person }
