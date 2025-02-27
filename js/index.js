import { getUserChoice, getComputerChoice, determineWinner } from './gameLogic.js';

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    
    document.getElementById("make-selection").addEventListener("click", () => {
        document.querySelector(".buttons-container").style.display = "flex";
    });

    document.querySelector(".secret-weapon").addEventListener("click", () => {
        document.getElementById("secret-pw").style.display = "flex";
    });

    function containsDigit(str) {
        return /\d/.test(str);
    }
    function containsSpecialChar (str) {
        return /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(str);
    }
    
    function clearPasswordClasses() {
        passwordInput.classList.remove('password-correct', 'password-incorrect', 'password-almost');
    }

    const submitPw = () => {
        let pwInput = passwordInput.value;
        const result = document.getElementById("pwResult");
        if (!pwInput) {
            result.innerText = 'Please enter a password.';
            clearPasswordClasses();
            passwordInput.classList.add('password-incorrect');
            return;
        }
        
        if (containsDigit(pwInput) || containsSpecialChar(pwInput)) {
            result.innerText = 'Invalid password. Letters only.'
            clearPasswordClasses();
            passwordInput.classList.add('password-incorrect'); 
            return;
        } 
        pwInput = pwInput.trim().toLowerCase();
        if (pwInput === 'bomb') {
            result.innerText = 'Correct 💣💥';
            pwResult.style.color = '#00fb63';
            clearPasswordClasses();
            passwordInput.classList.add('password-correct');
            handleUserChoice('bomb');
        } else if (pwInput === 'dynamite' || pwInput === 'tnt' || pwInput === 'blow up' || pwInput === 'blowup') {
            result.innerText = 'Close, but just missed the tick 🧨';
            pwResult.style.color = '#f6b55f'; 
            clearPasswordClasses();
            passwordInput.classList.add('password-almost');  
        } else if (pwInput === 'boom' || pwInput === 'kaboom' || pwInput === 'explode') {
            result.innerText = 'Close, what makes that sound? 🧨';
            pwResult.style.color = '#f6b55f'; 
            clearPasswordClasses();
            passwordInput.classList.add('password-almost');  
        }  else if (pwInput === 'meow' || pwInput === 'meowmeow' || pwInput === 'meow meow' || pwInput === 'meowmeowmeow') {
            result.innerText = 'Nope, try something with more spark 🧨';
            pwResult.style.color = '#f6b55f'; 
            clearPasswordClasses();
            passwordInput.classList.add('password-almost');  
        } else {
            result.innerText = `Incorrect password. Don't ~blow~ this!`; 
            pwResult.style.color = '#f65f5f'; 
            clearPasswordClasses();
            passwordInput.classList.add('password-incorrect');              
        }
    };

    document.getElementById("submit-pw").addEventListener("click", submitPw);

    document.getElementById("rock-selection").addEventListener('click', () => {
        handleUserChoice('rock');
     });
    document.getElementById("paper-selection").addEventListener('click', () => {
         handleUserChoice('paper');
      });
    document.getElementById("scissors-selection").addEventListener('click', () => {
         handleUserChoice('scissors');
      });

    function getRandomUserChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    document.getElementById('random-selection').addEventListener('click', () => {
        const userChoice = getRandomUserChoice();  
        handleUserChoice(userChoice);              
    });

    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }    

    function handleUserChoice(choice) {
        let userChoice;
        if (choice === 'random') {
            userChoice = getRandomUserChoice();
        } else {
            userChoice = getUserChoice(choice);
        }
        
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);

        document.getElementById('user-choice').innerText = `You chose: ${capitalizeWord(userChoice)}`;
        document.getElementById('comp-choice').innerText = `Computer chose: ${capitalizeWord(computerChoice)}`;
        document.getElementById('winner').innerText = `Winner: ${capitalizeWord(winner)}`;
    }
});

