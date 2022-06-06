let teamASalaryCap;
let teamBSalaryCap;

// Salary Cap --- les chiffres s'updatent seulement en clickant sur le button. devrait être automatique

function teamSalaryCap(array){ 
    let mass = 0

    for (let i = 0; i < 5; i++){
        let addMass = array[i];
        mass += addMass;
    }
    teamASalaryCap = mass;
    document.getElementById("massText").innerHTML = teamASalaryCap +"$";
    return mass;
}

document.getElementById("salaryCapBTN").onclick = function() {
    
    var currentContract = teamARoster.map((sc) => { 
        return sc.contract
    })
       
    teamSalaryCap(currentContract);
}