export { DamageTypes, WeaponTags, SpellTags };

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
  | "necrotic"
  | "force";

type WeaponTags =
  | "martial"
  | "simple"
  | "versatile"
  | "melee"
  | "ranged"
  | "thrown";

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
  | "target";
