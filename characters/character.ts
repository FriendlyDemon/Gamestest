export class character {
  name: string;
  creatureType:string
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
  equipment: object;
  inventory: object;
  spells?: [
    slot0?: object,
    slot1?: object,
    slot2?: object,
    slot3?: object,
    slot4?: object,
    slot5?: object,
    slot6?: object,
    slot7?: object,
    slot8?: object,
    slot9?: object
  ];
  constructor(name:string,creatureType:string,race:string,str:number,dex:number,con:number,int:number,wis:number,cha:number,level:number,healthMax:number,gold:number,
    equip:object|string,inventory:object|string,spells:object|string
    ,classe?:string,){
    this.name=name
    this.creatureType=creatureType
    this.race=race
    this.classe=classe
    this.charStatus=[str,dex,con,int,wis,cha]
    this.level=level
    this.healthMax=healthMax
    this.gold=gold
    this.equipment=[equip]
    this.inventory=[inventory]
    this.spells.slot0[spells]
  }
}
