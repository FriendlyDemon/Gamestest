/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.gametest;

/**
 *
 * @author henri
 */
public class Spells {

    @SuppressWarnings("unused")
    static Spell magic_missile = new Spell("Magic Missile", 1, false, Types.MagicSchool.evocation, Types.Target.ranged, 120, 0, 0, new Misc.Damage(1, 4, Types.DamageTypes.force, 4), new Types.SpellTags[]{Types.SpellTags.force});

}
