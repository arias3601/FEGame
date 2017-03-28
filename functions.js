////////////////////////////////////////////////////////////////
/////                                                      /////
/////                      UNIT BASED                      /////
/////                                                      /////
////////////////////////////////////////////////////////////////

function createUnits() { 
    //Units       (name, hp, chp, str, def, spd, skl, lck, mov, lv, exp,id, typ)
    //                      h   c   s  d  s  s  l  m  l  e  i
    TwinA = new Unit("TwinA", 12, 12, 9, 5, 6, 6, 6, 5, 1, 0, 1, "Magician");
    TwinB = new Unit("TwinB", 12, 12, 9, 5, 6, 6, 6, 5, 1, 0, 1, "Magician");
    OldKnight = new Unit("OldKnight", 15, 15, 8, 10, 8, 6, 7, 5, 5, 0, 1, "Knight");
    
    
    
    
    Tactician = new Unit("Tactician", 9, 9, 8, 5, 6, 10, 8, 4, 1, 0, 1, "Tactician");
    GrumpyWarrior = new Unit("Warrior", 9, 9, 8, 5, 6, 10, 8, 4, 1, 0, 1, "Warrior");
    Archer = new Unit("Archer", 9, 9, 8, 5, 6, 10, 8, 4, 1, 0, 1, "Archer");
    Healer = new Unit("Healer", 9, 9, 8, 5, 6, 10, 8, 4, 1, 0, 1, "Healer");
    
    
}



function levelUp(unit){
    var hpUp = upStat();
    var strUp = upStat();
    var defUp = upStat();
    var spdUp = upStat();
    var sklUp = upStat();
    var lckUp = upStat();
    
    unit.lv++; 
    unit.hp =  unit.hp + hpUp;
    unit.chp = unit.chp + hpUp;
    unit.str = unit.str + strUp;
    unit.def = unit.def + defUp;
    unit.spd = unit.spd + spdUp;
    unit.skl = unit.skl + sklUp;
    unit.lck = unit.lck + lckUp;
   
    console.log("LEVEL UP!!!")
    console.log("Level "+ unit.lv);
    console.log("HP: "+unit.hp+"(+ "+hpUp+")");
    console.log("STR: "+unit.str+"(+ "+strUp+")");
    console.log("DEF: "+unit.def+"(+ "+defUp+")");
    console.log("SPD: "+unit.spd+"(+ "+spdUp+")");
    console.log("SKL: "+unit.skl+"(+ "+sklUp+")");
    console.log("LCK: "+unit.lck +"(+ "+lckUp+")");
    
   
}




////////////////////////////////////////////////////////////////
/////                                                      /////
/////                    ENIMEY BASED                      /////
/////                                                      /////
////////////////////////////////////////////////////////////////




function createEnemies(){
    //Enimes
    //                             h   c   s  d  s  s  l  m  l  e   i
    muggler1 = new Unit("Muggler", 13, 13, 6, 5, 6, 6, 3, 3, 5, 50, 2, "Axe Men");
    muggler2 = new Unit("Muggler", 14, 14, 6, 4, 6, 7, 4, 4, 3, 50, 2, "Swords Men");
}







////////////////////////////////////////////////////////////////
/////                                                      /////
/////                    BATTLE BASED                      /////
/////                                                      /////
////////////////////////////////////////////////////////////////





function simulateFight(){
    battle(elis, muggler1);
}




function battle(unitA, unitB){
    if(unitA.id=1){
        var user = unitA;
        var enemy = unitB;
    } else{
        var user = unitB;
        var enemy = unitA;
    }
    
    
    
    var check = false;
    var dead = false;
    //calculate accuracy
    var accA = getAccuracy(user, enemy);
    var accD = getAccuracy(enemy, user);
    //calculate speed
    var speed = getSpeed(user, enemy);
    
    //fight!
        
    attack(accA, unitA, unitB);
    if(speed === 1){
        attack(accA, unitA, unitB);
    }
        
                                        console.log(enemy.name+": "+enemy.chp);
    if(unitB.chp <= 0){
        console.log(unitB.name+" defeated!");
        check = true; 
    }
    
    if(!check){
        attack(accD, unitB, unitA);
        if(speed === 1){
            attack(accD, unitB, unitA);
        }


        if(unitA.chp <= 0){
            console.log(unitA.name+" has died!");  
            dead = true;
        }
    }
                                        console.log(user.name+": "+user.chp);
        
    
    //EXPERINCE
    if(!dead) {
        if(check){
            var addExp = ((enemy.lv - user.lv) * enemy.exp);
            if(addExp > 0){
                 user.exp = user.exp + addExp;
            }
            while(user.exp > 100){
                user.exp = user.exp - 100;
                levelUp(user);
            }
        } else{
            var addExp = ((enemy.lv - user.lv) * enemy.exp)/10;
            if(addExp > 0){
                 user.exp = user.exp + addExp;
            }
            while(user.exp > 100){
                user.exp = user.exp - 100;
                levelUp(user);
            }
        }
    }
    console.log(user.exp);
}






function upStat(){
    var ranNum = Math.floor((Math.random() * 100) + 1);
    if(ranNum >= 51){
        return 1;
    } else if(ranNum == 21){
        return 2;
    }
    else {
        return 0;
     }
}





function attack(acc, unitA, unitB){
    if(getHit(acc)){
        var damage = getDamage(unitA, unitB);
        unitB.chp = unitB.chp - damage;
        if(unitB.chp <= 0){
            unitB.chp = 0;
        }
    }
}

function getHit(acc){
 var ranAcc = Math.floor((Math.random() * 100) + 1);
    if(acc >= ranAcc){
        return true;
    } else {
        return false;
    }
}

function getDamage(unitA, unitB){
    var damage = unitA.str - unitB.def;
    if(damage <= 0){
        damage = 0;
    }
    //Crit
     var critNum = Math.floor((Math.random() * 100) + 1);
    if (unitA.lck - unitB.lck >= critNum) {
        damage = damage * 3;
    }
    return damage;
}


function getAccuracy(unitA, unitB){
    var acc;
    var accuracy = (unitA.skl) - (unitB.skl/2 + unitB.lck/2);
    if(accuracy > 0){
        acc = 100 - accuracy * 2;
    } else {
        acc = 100;
    }
    return acc;
}

function getSpeed(unitA, unitB){
    var retSpeed;
    var speed = unitA.spd - unitB.spd;
    if(speed >= 5){
        retSpeed = 1;
    } else if(speed <= -5) {
        retSpeed = 2;
    } else {
        retSpeed = 0;
    }
    return retSpeed;
}