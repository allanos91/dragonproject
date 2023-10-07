const Dragon = class Dragon{
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...obj) {
    let allDragons = []
    let objArr = [...obj]
    objArr.forEach(el => {
      allDragons.push(el.name)
    })
    return allDragons
  }

}
// let dragon1 = new Dragon("Trogdor", "Black")
// let dragon2 = new Dragon("Charizard", "Orange")

module.exports = Dragon

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
