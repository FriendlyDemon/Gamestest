import { SpellTags } from "../types.ts";

class Spell {
  name: string;
  slot: number;
  range: number;
  area: number;
  dice: Array<[number, number]>;
  tags: Array<SpellTags>;
}
export { Spell };
