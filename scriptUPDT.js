// Basic set of hand variants in this game
const handVariants = ['rock', 'paper', 'scissors'];
let initBtnTxt = 'play!';
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

// create div to contain player side of hands
const playerSide = document.createElement('div');
playerSide.classList.add('playerSide', 'col-lg-6');
playerSide.innerText = 'test playerSide';

// create div to contain machine side of hand
const machineSide = document.createElement('div');
machineSide.classList.add('machineSide', 'col-lg-6');
machineSide.innerText = 'test machineSide';

// create score board on bottom of player-machine divs
const score = document.createElement('div');
score.classList.add('score');
score.innerText = 'test score';

// create row to wrap player and machine sides 
const handsWrapper = document.createElement('div');
handsWrapper.classList.add('row', 'd-flex', 'justify-content-center', 'align-items-center', 'handsWrapper');
handsWrapper.appendChild(playerSide);
handsWrapper.appendChild(machineSide);






function game() {
    playArea.appendChild(initDiv);
    playBtn.addEventListener('click', () => {
        playArea.removeChild(initDiv);
        playArea.appendChild(handsWrapper);
        playArea.appendChild(score);

    })
}

game();
// after user clickes 'PLAY!' button, it dissapeares and two inline divs appear
// one div is user input div - 3 buttons
// another div to display machine choise - acter user pickes hand, machine generates 
//random hand variant

//below those divs there is a score div

//when one of players win, inline divs dissapear and "play again" & final score displayed

//after player hits "play again", score is reset, inline divs appear and game goes on

