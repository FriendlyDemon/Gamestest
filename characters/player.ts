import { Character, Equip, Inventory, SpellList } from "./character";
import robe from "../items/robe"
import staff from "../items/staff"
export default new Character(
  "Gandalf",
  "humanoid",
  "human",
  8,
  14,
  12,
  18,
  10,
  9,
  1,
  12,
  20,
  new Equip(
    robe,
    staff
  ),
  new Inventory(["slingshot"], ["gum arabic", "rope"]),
  new SpellList(["firebolt", "tollTheDead"], ["magicMissile"])
);
