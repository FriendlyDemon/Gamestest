import { DamageTypes, WeaponTags } from "../types.ts";
abstract class Item {
  name: string;
  type: string;
  tags: Array<string>;
  cost: number;
  weight: number;
  description: string;
}

abstract class Equipment extends Item {
  type = "equipment";
}

class Weapon extends Equipment {
  tags: Array<WeaponTags>;
  damage: Array<
    [number, number, number, DamageTypes] | [number, number, DamageTypes]
  >;
  constructor(
    name: string,
    tags: Array<WeaponTags>,
    cost: number,
    weight: number,
    damage: Array<
      [number, number, number, DamageTypes] | [number, number, DamageTypes]
    >,
    desc: string
  ) {
    super();
    this.name = name;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.description = desc;
    this.damage = damage;
  }
}

class Armor extends Equipment {
  ac: number;
  dexLimit: number;
  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    ac: number,
    dexLimit: number
  ) {
    super();
    this.name = name;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.ac = ac;
    this.dexLimit = dexLimit;
  }
}

class Material extends Item {
  type = "material";
}

export { Weapon, Armor, Material };
