module.exports = class NPC {    
    constructor(_name,_health,_damage,_armor,_dodge,_acc,_cr,_loot) {
        this.name=_name
        this.health=_health
        this.damage=_damage
        this.armor=_armor
        this.dodge=_dodge
        this.acc=_acc
        this.cr=_cr
        this.loot=_loot
    }
}