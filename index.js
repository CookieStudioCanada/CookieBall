// Game Data
var myName;
var teamAWin = 0;
var teamBWin = 0;
var day = 1;

// Team A Roster
let playerCteamA;
let playerSFteamA;
let playerPFteamA;
let playerSGteamA;
let playerPGteamA;

// Team B Roster
let playerCteamB;
let playerSFteamB;
let playerPFteamB;
let playerSGteamB;
let playerPGteamB;

let teamARoster = [playerCteamA, playerSFteamA, playerPFteamA, playerSGteamA, playerPGteamA];
let teamBRoster = [playerCteamB, playerSFteamB, playerPFteamB, playerSGteamB, playerPGteamB];

function gameplay(){
    
    if (day < 21) {
    
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);
    console.log(a, b);
    
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
    } else console.log("You cant play anymore. Season over.");

}

document.getElementById("changeNameButton").onclick = function(){
    myName = document.getElementById("myTeamName").value;
    document.getElementById("teamName").innerHTML = myName;
}

document.getElementById("myTeamA").onclick = function(){
    document.getElementById("lineup").innerHTML = "Team A players : " + teamARoster;
    console.log(teamARoster);
}

document.getElementById("myTeamB").onclick = function(){
    document.getElementById("lineup").innerHTML = "Team B players : " + teamBRoster;
}

document.getElementById("gameTime").onclick = function(){
    gameplay();
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
