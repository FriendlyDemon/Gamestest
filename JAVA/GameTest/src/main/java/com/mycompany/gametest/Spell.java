package com.mycompany.gametest;

import java.util.ArrayList;
import java.util.Arrays;

class Spell {

    private String name;
    private int slot;
    private boolean concentration;
    private Types.MagicSchool school;
    private Types.Target target;
    private int range;
    private int area;
    private int duration;
    private Misc.Damage damage;
    private ArrayList<Types.SpellTags> tags;

    public String getName() {
        return this.name;
    }

    public int getSlot() {
        return this.slot;
    }

    public boolean getConcentration() {
        return this.concentration;
    }

    public Types.MagicSchool getSchool() {
        return this.school;
    }

    public Types.Target getTarget() {
        return this.target;
    }

    public int getRange() {
        return this.range;
    }

    public int getArea() {
        return this.area;
    }

    public int getDuration() {
        return this.duration;
    }

    public Misc.Damage getDamage() {
        return this.damage;
    }

    public ArrayList<Types.SpellTags> getTags() {
        return this.tags;
    }

    public Spell(String Name, int Slot, boolean Concentration, Types.MagicSchool School, Types.Target Target, int Range, int Area, int Duration, Misc.Damage Damage, Types.SpellTags[] Tags) {
        this.name = Name;
        this.slot = Slot;
        this.concentration = Concentration;
        this.school = School;
        this.target = Target;
        this.range = Range;
        this.area = Area;
        this.duration = Duration;
        this.damage = Damage;
        this.tags = new ArrayList<>();
        tags.addAll(Arrays.asList(Tags));
    }
}
