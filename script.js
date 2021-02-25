// Basic set of hand variants in this game
const handVariants = ['rock', 'paper', 'scissors'];

// escape value for player to break from game at any point
// by clicking 'cancel' on prompt pop-up, or manually typing SENTINEL value
const SENTINEL = -1;


//  function to get user input
function playerHand(variantArr) {
    let input;
    let userChoise;
    input = prompt('Choose your hand - rock, paper or scissors? Type -1 to break' );
    if(input == SENTINEL || input == null) {
        userChoise = SENTINEL;
    } else {   
        if (variantArr.includes(input.toLocaleLowerCase())) {
            userChoise = variantArr.indexOf(input.toLocaleLowerCase());
            console.log(`You choose ${ input }`);
            console.log(userChoise);                
        }else{
            alert('You picked wrong variant of hand or have a typo.');
            playerHand(variantArr);
        }
        
    }    
    return userChoise;
}

// function to generate comp hand variant
function computerHand(variantArr) {
    let compChoise = Math.floor(Math.random() * Math.floor(variantArr.length));
    console.log(`Computer choose ${ variantArr[compChoise] }`);
    console.log(compChoise);
    return compChoise;
}

// takes both comp and user inputs and returns one of three possible values
function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(` It\'s a tie.`);
        return NaN;
    }else if (playerSelection === 0 && computerSelection === 2){
        console.log(` You won!`);
        return true;
    } else if (playerSelection > computerSelection){
        console.log(` You won!`);
        return true;
    }else{
        console.log(` You lose...`);
        return false;
    }
}

// plays whole game
function game (variantArr) {
    let playerScore = 0;
    let compScore = 0;
    let winPoints = 5;
    let roundResult;

    while(playerScore < winPoints && compScore < winPoints) {
        let player = playerHand(variantArr);
        if(player == SENTINEL) {
            console.log('Chicken...');
            break;
        }
        let computer = computerHand(variantArr);
        roundResult = singleRound(player, computer);
        switch(roundResult) {
            case true:
                playerScore++;
                console.log(`The score is Player ${ playerScore } - ${ compScore } Computer`);
                break;
            case false:
                compScore++;
                console.log(`The score is Player ${ playerScore } - ${ compScore } Computer`);
                break;
            default:
                console.log(`The score is Player ${ playerScore } - ${ compScore } Computer`);
                break;
        }
        if(playerScore === winPoints) {
            console.log("You won the game! Hit F5 to play again");
        }
        if(compScore === winPoints) {
            console.log("You've lost the game! Hit F5 to play again");
        }
    }
}

// game(handVariants);