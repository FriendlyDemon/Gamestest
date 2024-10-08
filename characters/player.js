const body = {
    name: "Gandalf",
    race: 'human',

    charStatus: {
        strength: 8,
        dexterity: 14,
        constitution: 12,
        inteligence: 18,
        wisdom: 10,
        charisma: 9
    },

    level: 2,
    classes: 1,
    class1: 'wizard',
    xp: 100,

    healthMax: 12,
    gold: 20,
    equipment: ['staff', 'robe'],
    inventory: ['gum', 'rope', 'slingshot'],

    spells: {"cantrip" : ['firebolt', 'tollTheDead'], "1st level" : ['magicMissile']}
}
module.exports = { body }