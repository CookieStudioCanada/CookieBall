// Fill the rosters - ne s'update pas pour le moment...

function updateRoster() {

    //0
    document.getElementById("Player0Name").innerHTML = teamARoster[0].name;
    document.getElementById("Player0OV").innerHTML = teamARoster[0].overall;
    document.getElementById("Player0Contract").innerHTML = teamARoster[0].contract;
    document.getElementById("Player0YL").innerHTML = teamARoster[0].yearLeft;
    
    //1
    document.getElementById("Player1Name").innerHTML = teamARoster[1].name;
    document.getElementById("Player1OV").innerHTML = teamARoster[1].overall;
    document.getElementById("Player1Contract").innerHTML = teamARoster[1].contract;
    document.getElementById("Player1YL").innerHTML = teamARoster[1].yearLeft;
    
    //2
    document.getElementById("Player2Name").innerHTML = teamARoster[2].name;
    document.getElementById("Player2OV").innerHTML = teamARoster[2].overall;
    document.getElementById("Player2Contract").innerHTML = teamARoster[2].contract;
    document.getElementById("Player2YL").innerHTML = teamARoster[2].yearLeft;
    
    //3
    document.getElementById("Player3Name").innerHTML = teamARoster[3].name;
    document.getElementById("Player3OV").innerHTML = teamARoster[3].overall;
    document.getElementById("Player3Contract").innerHTML = teamARoster[3].contract;
    document.getElementById("Player3YL").innerHTML = teamARoster[3].yearLeft;
    
    //4
    document.getElementById("Player4Name").innerHTML = teamARoster[4].name;
    document.getElementById("Player4OV").innerHTML = teamARoster[4].overall;
    document.getElementById("Player4Contract").innerHTML = teamARoster[4].contract;
    document.getElementById("Player4YL").innerHTML = teamARoster[4].yearLeft;    
    
    }

// invoke in start
updateRoster(); 

// UpdateMethod

document.getElementById("updateTableBTN").onclick = function() {

   updateRoster(); 

}