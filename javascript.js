const gameObjects = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let random = Math.random();
    let hand = undefined;
    
    if(random <= 1/3)
        hand = gameObjects[0];
    else if ((random > 1/3) && (random < 2/3))
        hand = gameObjects[1];
    else hand = gameObjects[2];

    console.log(random);

    return hand;
}

console.log(getComputerChoice());