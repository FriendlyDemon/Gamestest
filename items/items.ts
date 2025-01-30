import { DamageTypes, WeaponTags, ArmorType, Actions } from "../types.ts";

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
  dexLimit: number | undefined;
  armorType: ArmorType;

  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    ac: number,
    armorType: ArmorType,
    dexLimit?: number
  ) {
    super();
    this.name = name;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.ac = ac;
    this.dexLimit = dexLimit;
    this.armorType = armorType;
  }
}

class Material extends Item {
  type = "material";
}

class Usable extends Item {
  type = "Usable";
  consumed: boolean;
  useTime: Actions;
}

class Ammunition extends Item {
  type = "ammunition";
}

export { Weapon, Armor, Material, Usable, Ammunition };
