

/* Global Variables */
var attributes = [["Strength",0],["Intelligence",0],["Wisdom",0],["Constitution",0],["Dexterity",0],["Charisma",0]];
var classReq = [[0,13,0],[1,14,1],[2,9,2],[3,11,3],[4,10,4],[5,12,5]];
var classes = [["Christian Bale",["Batman Begins", "The Dark Night"],"One Punch Knockout"],["Robert Pattinson",["The Batman 2020"],"Knows All The Answers"],["Michael Keaton",["Batman 1989"],"Predicts Villain Behaviors"],["Will Arnett",["Lego Batman: The Movie"],"No Fall Damage"],["Ben Affleck",["Batman vs. Superman"],"Can Escape Any Room"],["Kevin Conroy",["Batman: The Killing Joke"],"Soul Catching Voice"]];
/* Bonus only applies on move or attack, not move+attack */
var moves=["move","move+attack","attack","special"];
/* Attribute, Threshold, Bonus, Move Applied */
var classBonus = [[0,14,+2,2],[4,12,+2,0]];
var npcs = [["Joker",20,"punch",6,2]];
var initiative = ["player","opponent","critical"];

function roller(dice,numDice){
  let sum = 0;
  for (let roll = 1; roll <= numDice; roll ++){
    let rolled = Math.floor(Math.random()*dice)+1;
    sum += rolled;
  }
  return sum;
}

function round(){
  let roll = roller(6,1);
  alert("Rolled "+roll);
  let turn = "player";
  switch(true){
    case (roll < 4):
      turn = 0;
      break;
    case (roll > 3 && roll < 6):
      turn = 1;
      break;
    default:
      turn = 2;
      break;  
  }
  alert("Initiative goes to: "+initiative[turn]); 
  alert(npcs[0][0] + " attacks with a " + npcs[0][2] + " and does "+ roller(npcs[0][3],1) + " damage");
}


/* function userCalculation
@params none
@return damage
This function takes stats into consideration and calculates damage and applies it to the NPC opponent*/
function userCalculation(){
  if(strength >= 14){
    fistDamage = fistDamage + 2;
  }
  if(constitution >= 4){
    punches = punches + 2
  }
  else if(constitution >= 8){
    punches = punches + 3;
  }
  else{
    punches = punches + 4;
  }
}