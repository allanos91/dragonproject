 const Dragon = require('./dragon')

 const FriendlyDragon = class FriendlyDragon extends Dragon {
    constructor (name, color, lifeGoals, friend) {
        super(name, color)
        this.lifeGoals = lifeGoals
        this.friend = friend

    }
    hasLifeGoals() {
        this.lifeGoals.forEach(el => {
            console.log(`${this.name} likes to ${el}`)
        })

    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
 }



 module.exports = FriendlyDragon
