package com.mycompany.gametest;

import java.util.ArrayList;
import java.util.Arrays;

public class Misc {

    static class Damage {

        private int diceQuantity;

        private int diceSize;

        private int diceSizeVersatile;

        private Types.DamageTypes damageType;

        public int getDiceQuantity() {
            return this.diceQuantity;
        }

        public void setDiceQuantity(int Quantity) {
            this.diceQuantity = Quantity;
        }

        public int getDiceSize() {
            return this.diceSize;
        }

        public void setDiceSize(int Size) {
            this.diceSize = Size;
        }

        public int getDiceVersatile() {
            return this.diceSizeVersatile;
        }

        public void setDiceVersatile(int Size) {
            this.diceSizeVersatile = Size;
        }

        public Types.DamageTypes getDamageType() {
            return this.damageType;
        }

        public void setDamageType(Types.DamageTypes DamageType) {
            this.damageType = DamageType;
        }

        public Damage(
                int DiceNumber, int DiceSize, Types.DamageTypes DamageType, int DiceSizeVersatile) {
            this.diceQuantity = DiceNumber;
            this.diceSize = DiceSize;
            this.diceSizeVersatile = DiceSizeVersatile;
            this.damageType = DamageType;
        }
    }

    static class CharacterStatus {

        private int strength;
        private int dexterity;
        private int constitution;
        private int intelligence;
        private int wisdom;
        private int charisma;

        public int getStr() {
            return this.strength;
        }

        public int getStrMod() {
            return (int) Math.floor((this.strength - 10) / 2);
        }

        public int getDex() {
            return this.dexterity;
        }

        public int getDexMod() {
            return (int) Math.floor((this.dexterity - 10) / 2);
        }

        public int getCon() {
            return this.constitution;
        }

        public int getConMod() {
            return (int) Math.floor((this.constitution - 10) / 2);
        }

        public int getInt() {
            return this.intelligence;
        }

        public int getIntMod() {
            return (int) Math.floor((this.intelligence - 10) / 2);
        }

        public int getWis() {
            return this.wisdom;
        }

        public int getWisMod() {
            return (int) Math.floor((this.wisdom - 10) / 2);
        }

        public int getCha() {
            return this.charisma;
        }

        public int getChaMod() {
            return (int) Math.floor((this.charisma - 10) / 2);
        }

        public void setStr(int Strength) {
            this.strength = Strength;
        }

        public void setDex(int Dexterity) {
            this.dexterity = Dexterity;
        }

        public void setCon(int Constitution) {
            this.constitution = Constitution;
        }

        public void setInt(int Intelligence) {
            this.intelligence = Intelligence;
        }

        public void setWis(int Wisdom) {
            this.wisdom = Wisdom;
        }

        public void setCha(int Charisma) {
            this.charisma = Charisma;
        }

        public CharacterStatus(int STR, int DEX, int CON, int INT, int WIS, int CHA) {
            this.strength = STR;
            this.dexterity = DEX;
            this.constitution = CON;
            this.intelligence = INT;
            this.wisdom = WIS;
            this.charisma = CHA;
        }
    }

    static class Equip {
    }

    static class Inventory {
    }

    static class SpellList {

        final ArrayList<Spell> level0;
        final ArrayList<Spell> level1;
        final ArrayList<Spell> level2;
        final ArrayList<Spell> level3;
        final ArrayList<Spell> level4;
        final ArrayList<Spell> level5;
        final ArrayList<Spell> level6;
        final ArrayList<Spell> level7;
        final ArrayList<Spell> level8;
        final ArrayList<Spell> level9;

        public ArrayList<String> getLevel0Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level0) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel1Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level1) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel2Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level2) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel3Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level3) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel4Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level4) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel5Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level5) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel6Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level6) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel7Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level7) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel8Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level8) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public ArrayList<String> getLevel9Names() {
            ArrayList<String> lista = new ArrayList<>();
            for (Spell spell : level9) {
                lista.add(spell.getName());
            }
            return lista;
        }

        public SpellList(Spell[] l0, Spell[] l1, Spell[] l2, Spell[] l3, Spell[] l4, Spell[] l5, Spell[] l6, Spell[] l7, Spell[] l8, Spell[] l9) {
            this.level0 = new ArrayList<>();
            if (l0 != null) {
                this.level0.addAll(Arrays.asList(l0));
            }
            this.level1 = new ArrayList<>();
            if (l1 != null) {
                this.level1.addAll(Arrays.asList(l1));
            }
            this.level2 = new ArrayList<>();
            if (l2 != null) {
                this.level2.addAll(Arrays.asList(l2));
            }
            this.level3 = new ArrayList<>();
            if (l3 != null) {
                this.level3.addAll(Arrays.asList(l3));
            }
            this.level4 = new ArrayList<>();
            if (l4 != null) {
                this.level4.addAll(Arrays.asList(l4));
            }
            this.level5 = new ArrayList<>();
            if (l5 != null) {
                this.level5.addAll(Arrays.asList(l5));
            }
            this.level6 = new ArrayList<>();
            if (l6 != null) {
                this.level6.addAll(Arrays.asList(l6));
            }
            this.level7 = new ArrayList<>();
            if (l7 != null) {
                this.level7.addAll(Arrays.asList(l7));
            }
            this.level8 = new ArrayList<>();
            if (l8 != null) {
                this.level8.addAll(Arrays.asList(l8));
            }
            this.level9 = new ArrayList<>();
            if (l9 != null) {
                this.level9.addAll(Arrays.asList(l9));
            }
        }
    }
}
