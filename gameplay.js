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
            document.getElementById("gameResult").innerHTML = "Game " + day + " : Team A = " + a + " Team B = " + b;
            day += 1;
            document.getElementById("TeamAWinNumber").innerHTML = teamAWin;
            document.getElementById("day").innerHTML = day;
        }
    else if (b > a) 
        {
            teamBWin += 1;
            document.getElementById("gameResult").innerHTML = "Game " + day + " : Team A = " + a + " Team B = " + b;
            day += 1;
            document.getElementById("TeamBWinNumber").innerHTML = teamBWin;
            document.getElementById("day").innerHTML = day;
        }
    else {
        console.log("Tie game.");
        day += 1;
        document.getElementById("day").innerHTML = day;
    }
    } else {

        console.log("You cant play anymore. Season over.");
        
        if(teamAWin > teamBWin){
            
            document.getElementById("day").innerHTML = "Team A win championship. Congratulations!!!";
        
        }
        else {
            
            document.getElementById("day").innerHTML = "Team B win championship. Congratulations!!!"
        }

    }

}