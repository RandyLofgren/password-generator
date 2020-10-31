// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var characters = ["!", "@", "#", "$", "%", "^", "&", "*"]


// Write password to the #password input
function writePassword() {
    passwordLength = prompt("Please select a password length from 8 to 128 characters by writing the number in this prompt.");
    if (Number.isInteger(parseInt(passwordLength))) {
        if (parseInt(passwordLength) > 7) {
            if (parseInt(passwordLength) < 129) {
                alert("Your password will be " + passwordLength + " characters long!")
            } else { writePassword() }

        } else { writePassword() }

    }
    else {
        writePassword()
    }
    numberPrompt = prompt("Would you like numbers used in your password? \n Answer 'yes' if so.");
    lowerPrompt = prompt("Would you like lowercase letters used in your password? \n Answer 'yes' if so.")
    upperPrompt = prompt("Would you like uppercase letters used in your password? \n Answer 'yes' if so.")
    specialPrompt = prompt("Would you like special characters used in your password? \n Answer 'yes' if so.")
    if (numberPrompt.toLowerCase() !== "yes") {
        if (lowerPrompt.toLowerCase() !== "yes") {
            if (upperPrompt.toLowerCase() !== "yes") {
                if (specialPrompt.toLowerCase() !== "yes") {
                    alert("You must pick at least 1 type of character! \n Please Start Over")
                    writePassword()
                } else { alert("Thank You!") }
            } else { alert("Thank You!") }
        } else { alert("Thank You!") }


    } else { alert("Thank You!") }





    var password = generatePassword();
    var passwordText = document.querySelector("#password");



    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





