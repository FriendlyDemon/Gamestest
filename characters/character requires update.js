"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.character = void 0;
var character = /** @class */ (function () {
    function character(name, creatureType, race, str, dex, con, int, wis, cha, level, healthMax, gold, equip, inventory, spells, classe) {
        this.name = name;
        this.creatureType = creatureType;
        this.race = race;
        this.classe = classe;
        this.charStatus = [str, dex, con, int, wis, cha];
        this.level = level;
        this.healthMax = healthMax;
        this.gold = gold;
        this.equipment = [equip];
        this.inventory = [inventory];
        this.spells = spells;
    }
    ;
    return character;
}());
exports.character = character;
;
