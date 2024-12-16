"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellList = exports.Inventory = exports.Equip = exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(name, creatureType, race, str, dex, con, int, wis, cha, level, healthMax, gold, equip, inventory, spells, classe) {
        this.name = name;
        this.creatureType = creatureType;
        this.race = race;
        this.classe = classe;
        this.charStatus = [str, dex, con, int, wis, cha];
        this.level = level;
        this.healthMax = healthMax;
        this.gold = gold;
        this.equipment = equip;
        this.inventory = inventory;
        this.spells = spells;
    }
    return Character;
}());
exports.Character = Character;
var Equip = /** @class */ (function () {
    function Equip() {
        this.head = "empty";
        this.back = "empty";
        this.torso = "empty";
        this.waist = "empty";
        this.legs = "empty";
        this.feet = "empty";
        this.hands = "empty";
        this.fingers = ["empty"];
        this.neck = "empty";
        this.mainhand = "empty";
        this.offhand = "empty";
        this.misc = ["empty"];
    }
    return Equip;
}());
exports.Equip = Equip;
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.equipment = [];
        this.materials = [];
        this.consumables = [];
        this.misc = [];
    }
    return Inventory;
}());
exports.Inventory = Inventory;
var SpellList = /** @class */ (function () {
    function SpellList(l0, l1, l2, l3, l4, l5, l6, l7, l8, l9) {
        this["cantrip"] = [];
        this["1st level"] = [];
        this["2nd level"] = [];
        this["3rd level"] = [];
        this["4th level"] = [];
        this["5th level"] = [];
        this["6th level"] = [];
        this["7th level"] = [];
        this["8th level"] = [];
        this["9th level"] = [];
        if (typeof l0 == "object") {
            this.cantrip = l0;
        }
        if (typeof l1 == "object") {
            this["1st level"] = l1;
        }
        if (typeof l2 == "object") {
            this["2nd level"] = l2;
        }
        if (typeof l3 == "object") {
            this["3rd level"] = l3;
        }
        if (typeof l4 == "object") {
            this["4th level"] = l4;
        }
        if (typeof l5 == "object") {
            this["5th level"] = l5;
        }
        if (typeof l6 == "object") {
            this["6th level"] = l6;
        }
        if (typeof l7 == "object") {
            this["7th level"] = l7;
        }
        if (typeof l8 == "object") {
            this["8th level"] = l8;
        }
        if (typeof l9 == "object") {
            this["9th level"] = l9;
        }
    }
    return SpellList;
}());
exports.SpellList = SpellList;

let gandalfequip=new Equip(),gandalfinv=new Inventory(),gandalfspell=new SpellList(['firebolt'],['magic missile']);

gandalfequip.mainhand='staff'
gandalfinv.consumables.push('scroll of fireball')

let personagem = new Character('Gandalf','humanoid','human',10,11,12,18,13,8,1,10,10,gandalfequip,gandalfinv,gandalfspell,'wizard')

require('node:fs').writeFileSync('test.js',JSON.stringify(personagem, null, "    "))