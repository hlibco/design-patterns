class Iterator {
  private index = 0

  constructor(private elements) {}

  next() {
    return this.elements[this.index++]
  }

  hasNext() {
    return this.index < this.elements.length
  }
}

export { Iterator }
