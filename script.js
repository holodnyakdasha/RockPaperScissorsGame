const game = ()=>{

    let pScore =0;
    let cScore =0;


    const startGame =()=>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');



        playButton.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        });
    };

    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');


        hands.forEach(hand=>{
            hand.addEventListener('animationend', function () {
                this.style.animation ='';
            })
        })


        //computer options

        const computerOptions = ['rock', 'paper', 'scissors'];


        options.forEach((option)=>{
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

               setTimeout(()=>{
                   // call compare hands
                   compareHands(this.textContent, computerChoice)

                   playerHand.src = `./assets/${this.textContent}.png`;
                   computerHand.src = `./assets/${computerChoice}.png`
               },2000);


                //animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            })
        });

    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerChoice, computerChoice ) =>{
        //update text
        const  winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'it is a tie'
            return;
        }

        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice=== 'scissors'){
                winner.textContent = "player wins"
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice=== 'scissors'){
                winner.textContent = "computer wins"
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }
        }

        // check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice=== 'rock'){
                winner.textContent = "computer wins"
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }





    startGame();
    playMatch();
   // updateGame();

}

game();