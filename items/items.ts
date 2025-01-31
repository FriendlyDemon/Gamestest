import {
  DamageTypes,
  WeaponTags,
  ArmorType,
  EquipSlot,
  Actions,
} from "../types.ts";

abstract class Item {
  name: string;
  type: string;
  tags: Array<string>;
  cost: number;
  weight: number;
  description: string | undefined;
  description: string | undefined;
}

abstract class Equipment extends Item {
  type = "equipment";
}

class Weapon extends Equipment {
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
    desc?: string,
    slot?: EquipSlot
    desc?: string,
    slot?: EquipSlot
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
  dexLimit?: number;
  armorType: ArmorType;

  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    ac: number,
    armorType: ArmorType,
    dexLimit?: number,
    desc?: string
    dexLimit?: number,
    desc?: string
  ) {
    super();
    this.name = name;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.description = desc;
    this.ac = ac;
    this.dexLimit = dexLimit;
    this.armorType = armorType;
  }
}

class Accessory extends Equipment {
  slot: EquipSlot;
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
