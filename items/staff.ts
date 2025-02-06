import { Weapon, Damage } from "./items";
export default new Weapon(
  "Staff",
  ["one-handed", "simple", "melee", "versatile", "arcane focus"],
  500,
  1.8,
  [new Damage(1, 6, "bludgeoning", 8)]
);
