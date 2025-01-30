import { SpellTags, DamageTypes } from "../types.ts";

class Spell {
  name: string;
  slot: number;
  range: number;
  area: number;
  dice: Array<[number, number, DamageTypes, DamageTypes?]>;
  tags: Array<SpellTags | DamageTypes>;
  constructor(
    name: string,
    slot: number,
    range: number,
    area: number,
    dice: Array<[number, number, DamageTypes, DamageTypes?]>,
    tags: Array<SpellTags | DamageTypes>
  ) {
    this.name = name;
    this.slot = slot;
    this.range = range;
    this.area = area;
    this.dice = dice;
    this.tags = tags;
  }
}
export { Spell };
