let randomNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastRes = document.querySelector('.prevRes');
const lowOrHigh = document.querySelector('.lowOrHigh');

const submitGuess = document.querySelector('.submitGuess');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous Guesse: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNum) {
        lastRes.textContent = "Woo Hoo! You guessed right!";
        lastRes.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();

    } else if (guessCount === 10) {
        lastRes.textContent = 'Game over!';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastRes.textContent = 'Wrong answer!'
        lastRes.style.backgroundColor = 'red';
        if (userGuess < randomNum) {
            lowOrHigh.textContent = 'Too low!';
        } else if (userGuess > randomNum) {
            lowOrHigh.textContent = 'Too High';
        }


    }
    guessCount++;
    guessField.value = '';
    guessField.focus();

}

submitGuess.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    submitGuess.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Try Again';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetArgs = document.querySelectorAll('.result p');
    for (let i = 0; i < resetArgs.length; i++) {
        resetArgs[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    submitGuess.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastRes.style.backgroundColor = 'white';

    randomNum = Math.floor(Math.random() * 100) + 1;
}