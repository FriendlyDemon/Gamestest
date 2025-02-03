import { CreatureType } from "../types";
class Character {
  name: string;
  creatureType: CreatureType;
  race: string;
  classe?: string;
  charStatus: [
    strength: number,
    dexterity: number,
    constitution: number,
    inteligence: number,
    wisdom: number,
    charisma: number
  ];
  level: number;
  healthMax: number;
  gold: number;
  equipment: Equip;
  inventory: Inventory;
  spells?: SpellList;
  constructor(
    name: string,
    creatureType: CreatureType,
    race: string,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
    level: number,
    healthMax: number,
    gold: number,
    equip: Equip,
    inventory: Inventory,
    spells?: SpellList,
    classe?: string
  ) {
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
}

class Equip {
  head: string = "empty";
  back: string = "empty";
  torso: string = "empty";
  waist: string = "empty";
  legs: string = "empty";
  feet: string = "empty";
  hands: string = "empty";
  fingers: Array<string> = ["empty"];
  neck: string = "empty";
  mainhand: string = "empty";
  offhand: string = "empty";
  misc: Array<string> = ["empty"];
}

class Inventory {
  equipment: Array<string | void> = [];
  materials: Array<string | void> = [];
  consumables: Array<string | void> = [];
  misc: Array<string | void> = [];
}

class SpellList {
  "cantrip": Array<string> = [];
  "1st level": Array<string> = [];
  "2nd level": Array<string> = [];
  "3rd level": Array<string> = [];
  "4th level": Array<string> = [];
  "5th level": Array<string> = [];
  "6th level": Array<string> = [];
  "7th level": Array<string> = [];
  "8th level": Array<string> = [];
  "9th level": Array<string> = [];
  constructor(
    l0?: Array<string>,
    l1?: Array<string>,
    l2?: Array<string>,
    l3?: Array<string>,
    l4?: Array<string>,
    l5?: Array<string>,
    l6?: Array<string>,
    l7?: Array<string>,
    l8?: Array<string>,
    l9?: Array<string>
  ) {
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
}

export { Character, Equip, Inventory, SpellList };
