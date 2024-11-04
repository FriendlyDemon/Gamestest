import Item from './item'
class Weapon extends Item {
    damage = 0
    speed = 1
    constructor(name, des, damage, speed) {
        super(name, des)
        this.damage = damage
        this.speed = speed
    }
}

module.exports = Weapon