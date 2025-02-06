import { Weapon, Damage } from "./items";
export default new Weapon(
  "Longsword",
  ["martial", "melee", "versatile", "slashing"],
  1500,
  1.3,
  [new Damage(1, 8, "slashing", 10)]
);
