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
    function SpellList() {
    }
    return SpellList;
}());
exports.SpellList = SpellList;
