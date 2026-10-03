const gameObjects = ["rock", "paper", "scissors"];


let rounds = 5;

function getComputerChoice(){
    let random = Math.random();
    let hand = undefined;
    
    if(random <= 1/3)
        hand = gameObjects[0];
    else if ((random > 1/3) && (random < 2/3))
        hand = gameObjects[1];
    else hand = gameObjects[2];


    return hand;
}

function getHumanChoice(){
    let input = window.prompt("type `you select rock paper or scissors?");
    let hand = undefined;
    
    if(input.toLowerCase() == gameObjects[0])
        hand = gameObjects[0];
    else if(input.toLowerCase() == gameObjects[1])
        hand = gameObjects[1]
    else if(input.toLowerCase() == gameObjects[2])
        hand = gameObjects[2];
    return hand;
}


function playGame(rounds) {
    let computerScore = 0;
    let humanScore = 0;
    
    for (rounds; rounds>0, rounds--;){

    function playRound(humanChoice, computerChoice){

    let message;

    
    let computerObjectIndex = gameObjects.indexOf(computerChoice);
    let playerObjectIndex = gameObjects.indexOf(humanChoice);

    const objectTables = [[1,0,2],[2,1,0],[0,2,1]]; // 1 - remy 2 - win 3 - loose
    

    switch(objectTables[playerObjectIndex][computerObjectIndex]){
        case 0: ++computerScore;
        message = gameObjects[computerObjectIndex] + " beats " + gameObjects[playerObjectIndex] + " ~/ !";
        break;
        case 2: ++humanScore;
        message = "Yeah!, " + gameObjects[playerObjectIndex] + " wins, cause it's stronger than " +gameObjects[computerObjectIndex] + "! :)";
        break;
        case 1: message = gameObjects[playerObjectIndex] + " and " + gameObjects[computerObjectIndex] + " is same.";
        break;
    }
    console.log("Computer: " + computerScore);
    console.log("player: " + humanScore);
    
    let addCapitalize = message => {message = 
            message.replace(/rock/g , "Rock");
            message = message.replace(/paper/g, "Paper");
            message = message.replace(/scissors/g, "Scisssors"); 
        return message;
    };

    message = addCapitalize(message);
    console.log(message);


    }

    playRound(getHumanChoice(),getComputerChoice());
    
    if(rounds == 0){
        message = "GameEnd: "
        if(computerScore>humanScore)
            message += "Computer wins, so you loose $%/!";
        else
            message += "Yeah, player wins ^^ :D!";
    
    console.log(message);
}

}


};


confirm("Start game Rock, Paper and Scissors (5 rounds)?") ? playGame(rounds) : alert("canceled");

