import { Weapon, Damage } from "./items";
export default new Weapon(
  "Greatsword",
  ["martial", "melee", "two-handed", "heavy", "slashing"],
  5000,
  6,
  [new Damage(2, 6, "slashing")]
);
