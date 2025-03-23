package com.mycompany.gametest;

public class GameTest {

    public static void main(String[] args) {
        Items.Weapon sword;
        sword = new Items.Weapon("longsword",
                new Types.WeaponTags[]{Types.WeaponTags.slashing, Types.WeaponTags.martial, Types.WeaponTags.melee,
                    Types.WeaponTags.versatile},
                500, 20, "nah", new Misc.Damage(1, 8, Types.DamageTypes.slashing, 10), 0, 0);
        System.out.println(sword.getTags());
        sword.removeTags(new Types.WeaponTags[]{Types.WeaponTags.slashing, Types.WeaponTags.martial});
        System.out.println(sword.getTags());

        Character Johnny;
        Johnny = new Character("Johnny", Types.CreatureType.humanoid, "Human", "Rogue", new Misc.CharacterStatus(12, 15, 10, 8, 13, 11), 1, 10, 50, new Misc.Equip(), new Misc.Inventory(), new Misc.SpellList(null, null, null, null, null, null, null, null, null, null));

        Johnny.spellList.level1.add(Spells.magic_missile);
        System.out.println(Johnny.spellList.getLevel1Names());
    }
}
