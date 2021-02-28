// Basic set of hand variants in this game
// and global variables
const handVariants = ['rock', 'paper', 'scissors'];
const initBtnTxt = 'play!';
const initScore = 'You 0 : 0 AI';
const playArea = document.querySelector('#playArea');



// game init button
const playBtn = document.createElement('button');
playBtn.classList.add('glow-on-hover', 'play-btn');
playBtn.setAttribute('type', 'button');
playBtn.textContent = initBtnTxt;



// game init button parent div
const initDiv = document.createElement('div');
initDiv.classList.add('gameInit', 'd-flex', 'justify-content-center', 'align-items-center');
initDiv.appendChild(playBtn);



// create Header Text
const header = document.createElement('div');
header.classList.add('text-center', 'p-4');
header.innerText = 'Choose your hand!';



// create div to contain player side of hands
const playerSide = document.createElement('div');
playerSide.classList.add('d-inline-flex', 'align-items-center', 'justify-content-center', 'flex-wrap');
playerSide.setAttribute('id', 'hands');
// adds three hands
const rock = hand('./img/rock.png', 'rock');
const paper = hand('./img/paper.png', 'paper');
const scissors = hand('./img/scissors.png', 'scissors');
rock.classList.add('playerCard');
paper.classList.add('playerCard');
scissors.classList.add('playerCard');
playerSide.appendChild(rock);
playerSide.appendChild(paper);
playerSide.appendChild(scissors);



// create div to represent single round result
const roundResult = document.createElement('div');
roundResult.classList.add('d-inline-flex', 'align-items-center', 'justify-content-center');
const whoWon = document.createElement('div');
whoWon.classList.add('whoWon', 'text-center');
const result = document.createElement('p');
result.classList.add('roundResult');
result.innerText = 'VS';
whoWon.appendChild(result);
roundResult.appendChild(whoWon);



// create div to contain machine side of hand
// function to generate comp hand variant
function computerHand(variantArr) {
    let compChoise = Math.floor(Math.random() * Math.floor(variantArr.length));
    console.log(`Computer choose ${ variantArr[compChoise] }`);
    return compChoise;
}

const machineSide = document.createElement('div');
machineSide.classList.add('d-inline-flex', 'align-items-center', 'justify-content-center');
const machineChoise = hand(`./img/question.png`, `waitin...`);
machineChoise.classList.add('machineCard');
machineSide.appendChild(machineChoise);



// create score board on bottom of player-machine divs
const score = document.createElement('div');
score.classList.add('text-center', 'score', 'p-5');
const scorePar = document.createElement('p');
scorePar.innerText = initScore;
score.appendChild(scorePar);



// hand variants
// function to create hand variant card
function hand(imgSource, name) {
    const handVariant = document.createElement('div');
    handVariant.classList.add('handChoise', 'glow-on-hover', 'text-center', 'play-btn');

    const img = document.createElement('img');
    img.setAttribute('src', `${imgSource}`);
    img.setAttribute('alt', 'NA');
    handVariant.appendChild(img);

    const handName = document.createElement('p');
    handName.innerText = `${name}`;
    handVariant.appendChild(handName);  
    return handVariant;
}






function game() {
    let playerScore = 0;
    let compScore = 0;
    let winPoints = 5;
    let singleRoundResult;

    playArea.appendChild(initDiv);
    playBtn.addEventListener('click', () => {
        playArea.removeChild(initDiv); 
        playArea.appendChild(header);
        playArea.appendChild(playerSide);
        playArea.appendChild(roundResult); 
        playArea.appendChild(machineSide);
        playArea.appendChild(score);
        // adds event listeners to player cards to trigger machine choice
        const userChoise = document.querySelectorAll('.playerCard');
        userChoise.forEach((card) => {
            let userChoiseIndex;
            card.addEventListener('click', () => {
                let randomizer = computerHand(handVariants);
                let machineCard = document.querySelector('.machineCard img');
                let machineText = document.querySelector('.machineCard p');
                console.log(machineCard);
                machineCard.setAttribute('src', `./img/${handVariants[randomizer]}.png`);
                machineText.innerText = `${handVariants[randomizer]}`;
                console.log(machineSide);
                userChoiseIndex = handVariants.indexOf(machineSide);
                console.log(userChoiseIndex);
            })
        });

        
    })
    

    // userChoise.forEach((card) => {
    //     console.log(card);
    //     card.addEventListener('click', () => {
    //         const randomizer = computerHand(handVariants);
    //         const machineChoise = hand(`./img/${handVariants[randomizer]}.png`, `${handVariants[randomizer]}`);
    //         machineSide.appendChild(machineChoise);
    //     } )
    // });
    
}

game();

