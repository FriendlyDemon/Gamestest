export class Character {
  name: string;
  creatureType:string;
  race: string;
  classe?: string;
  charStatus: [
    strength: number,
    dexterity: number,
    constitution: number,
    inteligence: number,
    wisdom: number,
    charisma: number
  ];
  level: number;
  healthMax: number;
  gold: number;
  equipment: Equip;
  inventory: Inventory;
  spells?: {};
  constructor(name:string,creatureType:string,race:string,str:number,dex:number,con:number,int:number,wis:number,cha:number,level:number,healthMax:number,gold:number,equip:Equip,inventory:Inventory,spells?:object,classe?:string){
    this.name=name;
    this.creatureType=creatureType;
    this.race=race;
    this.classe=classe;
    this.charStatus=[str,dex,con,int,wis,cha];
    this.level=level;
    this.healthMax=healthMax;
    this.gold=gold;
    this.equipment=equip;
    this.inventory=inventory;
    this.spells=spells;
  };
};

class Equip{
  head:string='empty'
  back:string='empty'
  torso:string='empty'
  feet:string='empty'
  hands:string='empty'
  fingers:Array<string>=['empty']
  neck:string='empty'
  mainhand:string='empty'
  offhand:string='empty'
}

class Inventory{
  equipment:Array<string|void>=[]
  materials:Array<string|void>=[]
  misc:Array<string|void>=[]
}