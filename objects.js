////////////////////////////////////////////////////////////////
/////                                                      /////
/////                        UNITS                         /////
/////                                                      /////
////////////////////////////////////////////////////////////////

function Unit(name, chp, hp, str, def, spd, skl, lck, mov, lv, exp, id, typ){
    this.name = name;
    this.hp = hp;
    this.chp = hp;
    this.str = str;
    this.def = def;
    this.spd = spd;
    this.skl = skl;
    this.lck = lck;
    this.mov = mov;
    this.lv = lv;
    this.exp = exp;
    this.id = id;
    this.typ = typ;
}



////////////////////////////////////////////////////////////////
/////                                                      /////
/////                        ENEMIES                       /////
/////                                                      /////
////////////////////////////////////////////////////////////////



function Enemies(name, chp, hp, str, def, spd, skl, lck, mov, lv, exp, id, typ){
    this.name = name;
    this.hp = hp;
    this.chp = chp;
    this.str = str;
    this.def = def;
    this.spd = spd;
    this.skl = skl;
    this.lck = lck;
    this.mov = mov;
    this.lv = lv;
    this.exp = exp;
    this.id = id;
    this.typ = typ;
}