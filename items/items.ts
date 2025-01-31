import {
  DamageTypes,
  WeaponTags,
  ArmorType,
  EquipSlot,
  Actions,
} from "../types.ts";

import { Spell } from "../spells/spells.ts";

abstract class Item {
  name: string;
  type: string;
  tags: Array<string>;
  cost: number;
  weight: number;
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
    desc?: string
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
  constructor(
    name: string,
    type: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    slot: EquipSlot,
    desc?: string
  ) {
    super();
    this.name = name;
    this.type = type;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.description = desc;
    this.slot = slot;
  }
}

class Material extends Item {
  type = "material";
  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    desc?: string
  ) {
    super();
    this.name = name;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.description = desc;
  }
}

class Usable extends Item {
  type = "Usable";
  consumed: boolean;
  useTime: Actions;
  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    consumed: boolean,
    useTime: Actions,
    desc?: string
  ) {
    super();
    this.name = name;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.consumed = consumed;
    this.useTime = useTime;
    this.description = desc;
  }
}

class Wand extends Usable {
  spell: Spell;
  charges: [number, number];
  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    spell: Spell,
    charges: [number, number],
    desc?: string
  ) {
    super(name, tags, cost, weight, false, "action", desc);
    this.spell = spell;
    this.charges = charges;
  }
}

class Scroll extends Usable {
  spell: Spell;
  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    spell: Spell,
    desc?: string
  ) {
    super(name, tags, cost, weight, true, "action", desc);
    this.spell = spell;
  }
}

class Ammunition extends Item {
  type = "ammunition";
  ammount: number;
  constructor(
    name: string,
    tags: Array<string>,
    cost: number,
    weight: number,
    ammount: number,
    desc?: string
  ) {
    super();
    this.name = name;
    this.tags = tags;
    this.cost = cost;
    this.weight = weight;
    this.ammount = ammount;
    this.description = desc;
  }
}

export { Weapon, Armor, Accessory, Material, Usable, Wand, Scroll, Ammunition };
