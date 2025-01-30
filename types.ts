export { DamageTypes, WeaponTags, ArmorType, SpellTags, Actions };

type DamageTypes =
  | "slashing"
  | "piercing"
  | "bludgeoning"
  | "fire"
  | "cold"
  | "lightning"
  | "thunder"
  | "acid"
  | "poison"
  | "psychic"
  | "radiant"
  | "necrotic"
  | "force";

type WeaponTags =
  | "ammunition"
  | "finesse"
  | "reach"
  | "loading"
  | "martial"
  | "simple"
  | "versatile"
  | "two-handed"
  | "melee"
  | "ranged"
  | "thrown";

type ArmorType = "light" | "medium" | "heavy" | "shield";

type SpellTags =
  | "buff"
  | "save"
  | "attack"
  | "enemy"
  | "creature"
  | "object"
  | "terrain"
  | "self"
  | "touch"
  | "target"
  | "damage";

type Actions = "action" | "bonus action" | "reaction" | "movement";
