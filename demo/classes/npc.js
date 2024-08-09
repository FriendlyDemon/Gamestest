module.exports = class NPC {    
    constructor(_name,_health,_damage,_range,_armor,_dodge,_acc,_speed,_move,_cr,_loot) {
        this.name=_name
        this.health=_health
        this.damage=_damage
        this.range=_range
        this.armor=_armor
        this.dodge=_dodge
        this.acc=_acc
        this.speed=_speed
        this.move=_move
        this.cr=_cr
        this.loot=_loot
    }
}