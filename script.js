let startEl = document.getElementById("start-el");
let answerEl = document.getElementById("answer-el");
let messageEl = document.getElementById("message-el");
let userAnswer = document.getElementById("user-answer");
let belowButtons1 = document.querySelector(".below-button1");
let belowButtons2 = document.querySelector(".below-button2");
let resetEl = document.getElementById("reset-el");

let imgEl = document.getElementById("img-el");

let audioStart = new Audio("/Sounds/coinFlip.mp3");
let audioShutdown = new Audio("/Sounds/Windows_Shutdown.mp3");
let audioCorrect = new Audio("/Sounds/correct_sound.mp3");
let audioError = new Audio("/Sounds/error_sound Effects.mp3");


let randomNumber = Math.floor(Math.random()*2) + 1
console.log(randomNumber);

function startGame() {
    audioStart.play();
    imgEl.src="questionmark-pic.png"
    messageEl.textContent = "Choose your answer"
    belowButtons1.style.display = 'inline';
    belowButtons2.style.display = 'inline';
    
}

function headsAns() {
    belowButtons1.style.display = 'none';
    belowButtons2.style.display = 'none';
    startEl.style.display = 'none';
    resetEl.style.display = 'block';
    messageEl.innerHTML = " ";
    if (randomNumber === 1) {
        userAnswer.innerHTML = "<span style='color: green;'>Correct ✔️</span>"
        let headCorrect = "Heads";
        answerEl.innerText = "Correct Answer: " + headCorrect;
        imgEl.src = "Heads-pic.png"
        audioCorrect.play();
    } else {
        userAnswer.innerHTML = "<span style='color: red;'>Incorrect ❌ </span>"
        let headCorrect = "Tails";
        answerEl.innerText = "Correct answer: " + headCorrect;
        imgEl.src = "tails-pic.png"
        audioError.play();
    }

    
}

function tailsAns() {
    belowButtons1.style.display = 'none';
    belowButtons2.style.display = 'none';
    startEl.style.display = 'none';
    resetEl.style.display = 'block';
    messageEl.innerHTML = " ";

    if(randomNumber === 2) {
        userAnswer.innerHTML = "<span style='color: green;'>Correct ✔️</span>"
        let tailCorrect = "Tails";
        answerEl.innerText = "Correct answer: " + tailCorrect;
        imgEl.src = "tails-pic.png"
        audioCorrect.play();
    } else {
        userAnswer.innerHTML = "<span style='color: red;'>Incorrect ❌ </span>"
        let tailCorrect = "Heads";
        answerEl.innerText = "Correct answer: " + tailCorrect;
        imgEl.src = "Heads-pic.png"
        audioError.play();
    }
}

function resetZ() {
    document.location.reload();
}

//audioShutdown.play();