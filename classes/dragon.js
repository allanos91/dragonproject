class Dragon{

  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.dragons = []
    Dragon.getDragons(name)
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(dragon) {
    this.dragons.push(this.name)
    // console.log(this.dragons)
    return this.dragons;
  }

}
// let dragon1 = new Dragon("Trogdor", "Black")
// let dragon2 = new Dragon("Charizard", "Orange")
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}