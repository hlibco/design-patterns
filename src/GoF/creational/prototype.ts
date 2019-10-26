class Sheep {
  constructor(public name, public weight) {}

  clone() {
    return new Sheep(this.name, this.weight)
  }
}

export { Sheep }
