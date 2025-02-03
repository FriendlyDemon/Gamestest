import { Character, Equip, Inventory, SpellList } from "./character";
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
    undefined,
    undefined,
    "robe",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "staff",
    "mainhand"
  ),
  new Inventory(["slingshot"], ["gum arabic", "rope"]),
  new SpellList(["firebolt", "tollTheDead"], ["magicMissile"])
);
