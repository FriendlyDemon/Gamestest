function spell(n1){
    return require(`../spells/${n1}.js`)
}
const
name = "Gandalf",
/*race = human,
charStatus = {
strength : 8,
dexterity : 14,
constitution : 12,
inteligence : 18,
wisdom : 10,
charisma : 9}
,
level = 2,
classes = 1,
class1 = wizard.level(2),
xp = 100
,
healthMax = 12, 
gold = 20,
items = [staff,robe],
inventory = [gum,rope,slingshot]
,*/
spells = [slot0=[spell(`firebolt`)]]//slot1=[spell('magicMissile')]]
module.exports = {name, spells, spell}