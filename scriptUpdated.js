// Basic set of hand variants in this game
// and global variables
const handVariants = ['rock', 'paper', 'scissors'];
let initBtnTxt = 'Play';
let initScore = 'You 0 : 0 AI';
const playArea = document.querySelector('#playArea');
let userHandName = '';
let playerScore = 0;
let compScore = 0;
let winPoints = 5;



// game init button
const playBtn = document.createElement('button');
playBtn.classList.add('glow-on-hover', 'play-btn', 'playPadding');
playBtn.setAttribute('type', 'button');
playBtn.textContent = initBtnTxt;



// game init button parent div
const initDiv = document.createElement('div');
initDiv.classList.add('gameInit', 'd-flex', 'justify-content-center', 'align-items-center');
initDiv.appendChild(playBtn);


///////////////////////////////////////////////////
// create Header Text
const header = document.createElement('div');
header.classList.add('text-center', 'p-4');
header.innerText = 'Choose your hand!';



// create div to contain player side of hands
const playerSide = document.createElement('div');
playerSide.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'flex-wrap');
playerSide.setAttribute('id', 'hands');
// adds three hands
const rock = hand('./img/rock.png', 'rock');
const paper = hand('./img/paper.png', 'paper');
const scissors = hand('./img/scissors.png', 'scissors');
rock.classList.add('playerCard');
rock.setAttribute('id', 'rock');
paper.classList.add('playerCard');
paper.setAttribute('id', 'paper');
scissors.classList.add('playerCard');
scissors.setAttribute('id', 'scissors');
playerSide.appendChild(rock);
playerSide.appendChild(paper);
playerSide.appendChild(scissors);



// create div to represent single round result
const roundResult = document.createElement('div');
roundResult.classList.add('d-flex', 'align-items-center', 'justify-content-center');
const whoWon = document.createElement('div');
whoWon.classList.add('whoWon', 'text-center');
const result = document.createElement('p');
result.classList.add('roundResult');
result.innerText = 'VS';
whoWon.appendChild(result);
roundResult.appendChild(whoWon);



// create div to contain machine side of hand >>

// function to generate comp hand variant
function computerHand(variantArr) {
    let compChoise = Math.floor(Math.random() * Math.floor(variantArr.length));
    // console.log(`Computer choose ${ variantArr[compChoise] }`);
    return compChoise;
}

const machineSide = document.createElement('div');
machineSide.classList.add('d-flex', 'align-items-center', 'justify-content-center');
const machineChoise = hand(`./img/question.png`, `waitin...`);
machineChoise.removeAttribute('onClick');
machineChoise.classList.add('machineCard');
machineSide.appendChild(machineChoise);




// create score board on bottom of player-machine divs
const score = document.createElement('div');
score.classList.add('text-center', 'score', 'pt-5');
const scorePar = document.createElement('p');
scorePar.innerText = initScore;
score.appendChild(scorePar);


// creates wrapper around playing area
const playDiv = document.createElement('div');
playDiv.appendChild(header);
playDiv.appendChild(playerSide);
playDiv.appendChild(roundResult); 
playDiv.appendChild(machineSide);
playDiv.appendChild(score);


// hand variants
// function to create hand variant card
function hand(imgSource, name) {
    const handVariant = document.createElement('div');
    handVariant.classList.add('handChoise', 'glow-on-hover', 'text-center', 'play-btn');
    handVariant.setAttribute('onClick', 'replay_click(this.id)');

    const img = document.createElement('img');
    img.setAttribute('src', `${imgSource}`);
    img.setAttribute('alt', 'NA');
    handVariant.appendChild(img);

    const handName = document.createElement('p');
    handName.innerText = `${name}`;
    handVariant.appendChild(handName);  
    return handVariant;
}

function replay_click(clicked_id) {
    userHandName = clicked_id;

    // 
    let randomizer = computerHand(handVariants);
    let machineCard = document.querySelector('.machineCard img');
    let machineText = document.querySelector('.machineCard p');
    machineCard.setAttribute('src', `./img/${handVariants[randomizer]}.png`);
    machineText.innerText = `${handVariants[randomizer]}`;
    machineChoiceIndex = handVariants.indexOf(`${handVariants[randomizer]}`);
    let userChoiseIndex = handVariants.indexOf(userHandName);
    singleRoundResult = singleRound(userChoiseIndex, machineChoiceIndex);
    switch(singleRoundResult) {
        case true:
            console.log('player counter before ' + playerScore);
            playerScore++;
            console.log('player counter after ' + playerScore);
            scorePar.innerText = `You ${playerScore} : ${compScore} AI`;
            console.log(`The score is Player ${ playerScore } - ${ compScore } Computer`);
            break;
        case false:
            console.log('comp counter before ' + compScore);
            compScore++;
            console.log('comp counter after ' + compScore);
            scorePar.innerText = `You ${playerScore} : ${compScore} AI`;
            console.log(`The score is Player ${ playerScore } - ${ compScore } Computer`);
            break;
        default:
            scorePar.innerText = `You ${playerScore} : ${compScore} AI`;
            console.log(`The score is Player ${ playerScore } - ${ compScore } Computer`);
            break;
    };

    if (playerScore == winPoints) {
        playAreaReset('You');
        
    };

    if(compScore == winPoints) {
        playAreaReset('AI');   
    };

}

function playAreaReset(winner) {
    console.log(`${winner} WON! PLAY AGAIN?`);
    playBtn.textContent = `${winner} WON! PLAY AGAIN?`;
    playDiv.style.display = 'none';
    playBtn.style.display = 'block';
    playerScore = 0;
    compScore = 0;
    initScore = `You ${playerScore} : ${compScore} AI`;
    scorePar.innerText = initScore;
    let machineTextReset = document.querySelector('.machineCard p');
    machineTextReset.innerText = 'waitin...';
    let machineImgReset = document.querySelector('.machineCard img');
    machineImgReset.setAttribute('src', './img/question.png');
    result.innerText = 'VS';

}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.innerText = 'It\'s a tie.';
        return NaN;
    }else if (playerSelection === 2 && computerSelection === 0){
        result.innerText = 'You lose...';
        return false;
    }else if (playerSelection === 0 && computerSelection === 2){
        result.innerText = 'You won!';
        return true;
    } else if (playerSelection > computerSelection){
        result.innerText = 'You won!';
        return true;
    }else{
        result.innerText = 'You lose...';
        return false;
    }
}



function game() {

    playArea.appendChild(initDiv);
    initDiv.appendChild(playDiv);
    playDiv.style.display = 'none';
    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        playDiv.style.display = 'block';

    });    
};

game();
