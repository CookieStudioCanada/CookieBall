// sim a day function
function gameplay(){
    
    if (day < 21) {

    var currentOV = teamARoster.map((ov) => { // pas adapter encore pour les autres matchs...
        return ov.overall
        })
        
        teamAverage(currentOV);

    let userOverall = teamAverage(currentOV);
    console.log(userOverall);

    let a = 50 + (Math.floor(Math.random() * userOverall)); // pas adapter pour les autres matchs....

    let b = 50 + (Math.floor(Math.random() * 50));

    console.log(a, b); // score...
    
    if (a > b) 
         {
            teamAWin += 1;
            teamBLose += 1;
            document.getElementById("gameResult").innerHTML = "Game " + day + " : Team A = " + a + " Team B = " + b;
            day += 1;
        }
    else if (b > a) 
        {
            teamBWin += 1;
            teamALose += 1;
            document.getElementById("gameResult").innerHTML = "Game " + day + " : Team A = " + a + " Team B = " + b;
            day += 1;
            document.getElementById("TeamBWinNumber").innerHTML = teamBWin;
            document.getElementById("day").innerHTML = day;
        }
    else {
        console.log("Tie game.");
        teamATie += 1;
        teamBTie += 1;
        day += 1;
        document.getElementById("day").innerHTML = day;
    }            

    updateStanding();

    } else {

        console.log("You cant play anymore. Season over.");
        
        if(teamAWin > teamBWin){
            
            document.getElementById("day").innerHTML = "Team A win championship. Congratulations!!!";
        
        }
        else { // meme si égalité = B win championship
            
            document.getElementById("day").innerHTML = "Team B win championship. Congratulations!!!"
        }

    }

}

function updateStanding() {
            
    document.getElementById("TeamAWinNumber").innerHTML = teamAWin;
    document.getElementById("TeamALoseNumber").innerHTML = teamALose;
    document.getElementById("TeamATieNumber").innerHTML = teamATie;
    document.getElementById("TeamBWinNumber").innerHTML = teamBWin;
    document.getElementById("TeamBLoseNumber").innerHTML = teamBLose;
    document.getElementById("TeamBTieNumber").innerHTML = teamBTie;
    document.getElementById("day").innerHTML = day; 

}
