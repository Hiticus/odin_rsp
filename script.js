var playerscore = 0;
var computerscore = 0;

function computerturn() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    let computerSelection;
    
    
    switch (randomChoice) {
        case 1: 
            computerSelection = "R";
            break;
        case 2:
            computerSelection = "P";
            break;
        case 3:
            computerSelection = "S";
            break;
    }

    let playerchoice = prompt("Choose, meatbag!");
    switch(playerchoice){
        case "R":
            playerchoice = "R";
            break;
        case "P":
            playerchoice = "P";
            break;
        case "S":
            playerchoice = "S";
            break;   
            
    }
    console.log ("Computer chose - ",computerSelection);
    console.log ("Meatbag chose - ",playerchoice);

    var round = computerSelection+playerchoice;
    console.log (round);
    
    if (round === "RS"|| round ==="PR"|| round ==="SP"){
        console.log("Computer wins");
        computerscore++; 
        document.getElementById("compS").innerHTML = computerscore;
       
    }else if(round === "RP"|| round ==="PS"|| round ==="SR"){
        console.log("Meatbag wins");    
        playerscore++;
        document.getElementById("playS").innerHTML = playerscore;
    }else{
        console.log("DRAW");
    };
    
    console.log(computerscore,playerscore);

    if(computerscore == 5){
        alert("Computer wins! Page will reload now.");
        {window.location.reload();};
    }
    if(playerscore == 5){
        alert("Meatbag wins! Page will reload now");
        {window.location.reload();};
    }
    
}


computerturn();



