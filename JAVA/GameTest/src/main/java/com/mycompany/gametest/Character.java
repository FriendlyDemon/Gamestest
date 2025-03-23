package com.mycompany.gametest;

class Character {

    private String name;
    private Types.CreatureType creatureType;
    private String race;
    private String characterClass;
    private Misc.CharacterStatus status;
    private int level;
    private int health;
    private int money;
    final Misc.Equip equipment;
    final Misc.Inventory inventory;
    final Misc.SpellList spellList;

    public Character(String Name, Types.CreatureType CreatureType, String Race, String CharacterClass, Misc.CharacterStatus Status, int Level, int Health, int Money, Misc.Equip Equipment, Misc.Inventory Inventory, Misc.SpellList SpellList) {
        this.name = Name;
        this.creatureType = CreatureType;
        this.race = Race;
        this.characterClass = CharacterClass;
        this.status = Status;
        this.level = Level;
        this.equipment = Equipment;
        this.inventory = Inventory;
        this.spellList = SpellList;
    }
}
