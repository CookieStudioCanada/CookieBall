// Game Data
var myName;
var teamAWin = 0;
var teamALose = 0;
var teamATie = 0;
var teamBWin = 0;
var teamBLose = 0;
var teamBTie = 0;
var day = 1;

// Player Class
class Player {
    constructor(name, overall, contract, yearLeft) {
      this.name = name;
      this.overall = overall;
      this.contract = contract;
      this.yearLeft = yearLeft;
    }
  }

// List of players
let lebronJamesID = new Player("L.James", 89, 5000000, 1);
let stephCurryID = new Player("S.Curry", 91, 5000000, 1);
let nikolaJokicID = new Player("N.Jokic", 92, 5000000, 1);
let giannisAntetokounmpoID = new Player("G.Antetokounmpo", 91, 5000000, 1);
let jamesHardenID = new Player("J.Harden", 88, 5000000, 1);

// Team A Initial Roster
let peterSeersID = new Player("P.Seers", 68, 1000000, 1);
let esteRousseauID = new Player("E.Rousseau", 67, 1000000, 1);
let vincentLallierID = new Player("V.L'Allier", 60, 1000000, 1);
let julienOstiguyID = new Player("J.Ostiguy", 72, 1000000, 1);
let jeromeSimardID = new Player("J.Simard", 55, 1000000, 1);

// Team B Initial Roster
let jayBarriaultID = new Player("J.Barriault", 73, 1000000, 1);
let cedRondeauID = new Player("C.Rondeau", 64, 1000000, 1);
let alexandreLaroseID = new Player("A.Larose", 65, 1000000, 1);
let patrickPouliotID = new Player("P.Pouliot", 63, 1000000, 1);
let valRoyID = new Player("V.Roy", 66, 1000000, 1);

// array of player by team. Not working now.
let teamARoster = [peterSeersID, esteRousseauID, vincentLallierID, julienOstiguyID, jeromeSimardID];
let teamBRoster = [jayBarriaultID, cedRondeauID, alexandreLaroseID, patrickPouliotID, valRoyID];

// buttons logic

document.getElementById("changeNameButton").onclick = function(){
    myName = document.getElementById("myTeamName").value;
    document.getElementById("teamName").innerHTML = myName;
}

document.getElementById("myTeamA").onclick = function(){
    
    let teamARosterListName = teamARoster.map((ov) => {
        return ov.name
        })
        
        document.getElementById("lineup").innerHTML = teamARosterListName;
    }

document.getElementById("myTeamB").onclick = function(){

    let teamBRosterListName = teamBRoster.map((ov) => {
        return ov.name
        })
        
        document.getElementById("lineup").innerHTML = teamBRosterListName;
    }

document.getElementById("gameTime").onclick = function(){
    gameplay();
}

// Average Overall function

function teamAverage(array){
    let average = 0

    for (let i = 0; i < 5; i++){ // array.lenght not working...
        let currentNum = array[i];
        average += currentNum;
    }

    average = average /5; // array.lenght not working...
    return average;
}
