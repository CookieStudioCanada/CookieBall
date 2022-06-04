var myName;
var teamGame;
var teamAWin = 0;
var teamBWin = 0;
var jour = 1;

function gameplay(){
    
    if (jour < 21) {
    
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);
    console.log(a, b);
    
    if (a > b) 
         {
            console.log("Team A win");
            teamAWin += 1;
            document.getElementById("gameResult").innerHTML = "Game " + jour + " : Team A = " + a + " Team B = " + b;
            jour += 1;
            console.log("Team A as " + teamAWin + " wins.");
            document.getElementById("TeamAWinNumber").innerHTML = teamAWin;
            document.getElementById("jour").innerHTML = jour;
        }
    else if (b > a) 
        {
            console.log("Team B Win");
            teamBWin += 1;
            document.getElementById("gameResult").innerHTML = "Game " + jour + " : Team A = " + a + " Team B = " + b;
            jour += 1;
            console.log("Team B as " + teamBWin + " wins.");
            document.getElementById("TeamBWinNumber").innerHTML = teamBWin;
            document.getElementById("jour").innerHTML = jour;
        }
    else {
        console.log("Tie game.");
        jour += 1;
        document.getElementById("jour").innerHTML = jour;
    }
} else console.log("You cant play anymore. Season over.");

}

document.getElementById("myButton").onclick = function(){
    myName = document.getElementById("myText").value;
    document.getElementById("parag1").innerHTML = "Welcome to the liga " + myName;
}

var myTeam;

document.getElementById("myTeamA").onclick = function(){
    document.getElementById("lineup").innerHTML = "Team A players : Curry (90), Tatum (86), Ball (82), Smart (84), Green (80)";
    teamGame = 1;
}

document.getElementById("myTeamB").onclick = function(){
    document.getElementById("lineup").innerHTML = "Team B players : James (89), Williamson (84), DeRozan (82), Doncic (91), Westbrook (80)";
    teamGame = 2;
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
