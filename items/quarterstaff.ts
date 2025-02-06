import { Weapon, Damage } from "./items";
export default new Weapon(
  "Quarterstaff",
  ["simple", "melee", "versatile"],
  20,
  1.8,
  [new Damage(1, 6, "bludgeoning", 8)]
);
