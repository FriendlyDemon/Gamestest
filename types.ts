export {
  DamageTypes,
  WeaponTags,
  ArmorType,
  EquipSlot,
  SpellTags,
  Actions,
  MagicSchool,
  Range,
};

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
  | DamageTypes
  | "ammunition"
  | "finesse"
  | "reach"
  | "loading"
  | "martial"
  | "simple"
  | "versatile"
  | "one-handed"
  | "two-handed"
  | "melee"
  | "ranged"
  | "thrown"
  | "arcane focus";

type ArmorType = "light" | "medium" | "heavy" | "shield";

type EquipSlot =
  | "head"
  | "neck"
  | "torso"
  | "back"
  | "arm"
  | "hand"
  | "finger"
  | "waist"
  | "leg"
  | "feet";

type SpellTags =
  | DamageTypes
  | "buff"
  | "save"
  | "attack"
  | "enemy"
  | "creature"
  | "object"
  | "terrain"
  | "target"
  | "damage";

type Actions = "action" | "bonus action" | "reaction" | "movement";

type MagicSchool =
  | "abjuration"
  | "conjuration"
  | "divination"
  | "enchantment"
  | "evocation"
  | "illusion"
  | "necromancy"
  | "transmutation";

type Range = number | "self" | "touch";
