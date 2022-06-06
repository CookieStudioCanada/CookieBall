// free agents

document.getElementById("lebronJames").onclick = function(){

    if(teamASalaryCap < 10000000){
        teamARoster[1] = lebronJamesID;
        console.log("You add L.James to your roster.")
        updateRoster();
    } else console.log("You don't have the cap space.")
    
}

document.getElementById("stephCurry").onclick = function(){

    if(teamASalaryCap < 10000000){
        teamARoster[4] = stephCurryID;
        console.log("You add S.Curry to your roster.")
        updateRoster();
    } else console.log("You don't have the cap space.")

}

document.getElementById("nikolaJokic").onclick = function(){

    if(teamASalaryCap < 10000000){
        teamARoster[0] = nikolaJokicID;
        console.log("You add N.Jokic to your roster.")
        updateRoster();
    } else console.log("You don't have the cap space.")

}

document.getElementById("giannisAntetokounmpo").onclick = function(){

    if(teamASalaryCap < 10000000){
        teamARoster[2] = giannisAntetokounmpoID;
        console.log("You add G.Antetokounmpo to your roster.")
        updateRoster();
    } else console.log("You don't have the cap space.")
        
}

document.getElementById("jamesHarden").onclick = function(){

    if(teamASalaryCap < 10000000){
        teamARoster[3] = jamesHardenID;
        console.log("You add J.Harden to your roster.")
        updateRoster();
    } else console.log("You don't have the cap space.")
        
}
