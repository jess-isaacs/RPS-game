const submitPw = () => {
    let pwInput = document.getElementById("password").value;
    const result = document.getElementById("pwResult");

    
    //checks if there is a password
    if (!pwInput) {
        result.innerText = 'Please enter a password.';
        return;
    }

    //function for checking for digits
    function containsDigit(str) {
        return /\d/.test(str);
    }

    //function for checking for special characters
    function containsSpecialChar (str) {
        return /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(str);
    }

    //check pw for digits or special chars:
    if (containsDigit(pwInput) || containsSpecialChar(pwInput)) {
        result.innerText = 'Invalid password. Letters only.'
        return;
    } 
    //make the pw lowercase:
    pwInput = pwInput.toLowerCase();
    
    //check if correct pw: 
    if (pwInput === 'bomb') {
        result.innerText = 'Correct 💣💥';
    } else if (pwInput === 'boom' || pwInput === 'dynamite' || pwInput === 'tnt' || pwInput === 'kaboom') {
        result.innerText = 'Close, but just missed the tick 🧨';
    } else {
        result.innerText = `Incorrect password. Don't ~blow~ this!`;               
    }
};
  
document.getElementById("submit-pw").addEventListener("click", submitPw);


document.getElementById("make-selection").addEventListener("click", () => {
    document.querySelector(".buttons-container").style.display = "flex";
});

document.querySelector(".secret-weapon").addEventListener("click", () => {
    document.getElementById("secret-pw").style.display = "flex";
});