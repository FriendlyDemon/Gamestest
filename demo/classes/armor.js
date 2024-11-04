import Item from './item'
class Armor extends Item {
    defence = 0
    constructor(name, des, def) {
        super(name, des)
        this.defense = def
    }
}

module.exports = Armor