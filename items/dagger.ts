import { Weapon, Damage } from "./items";
export default new Weapon(
  "Dagger",
  ["simple", "melee", "finesse", "thrown", "light", "piercing"],
  200,
  1,
  [new Damage(1, 4, "piercing")],
  [20, 60]
);
