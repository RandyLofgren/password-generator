// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var characters = ["!", "@", "#", "$", "%", "^", "&", "*"]
var characterArray = []
var makeSure = []

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


    if (numberPrompt.toLowerCase() === "yes") {
        if (lowerPrompt.toLowerCase() === "yes") {
            if (upperPrompt.toLowerCase() === "yes") {  //responses to  prompt about which characters to use   N=number  L=lower U=Upper S=special
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = numbers.concat(lowerCase.concat(upperCase.concat(characters))); //N,L,U,,S yes
                } else { characterArray = numbers.concat(lowerCase.concat(upperCase)); }// N,L,U yes
            } else {
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = numbers.concat(lowerCase.concat(characters)); //N,L,S yes
                } else (characterArray = numbers.concat(lowerCase)); //N,L yes
            }
        } else {
            if (upperPrompt.toLowerCase() === "yes") {
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = numbers.concat(upperCase.concat(characters)); //N,U,S yes
                } else { characterArray = numbers.concat(upperCase) } //N,U yes
            } else {
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = numbers.concat(characters); //N,S yes
                } else { characterArray = numbers } //N yes
            }
        }
    } else {
        if (lowerPrompt.toLowerCase() === "yes") {
            if (upperPrompt.toLowerCase() === "yes") {
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = lowerCase.concat(upperCase.concat(characters)); //L,U,S yes 
                } else { characterArray = lowerCase.concat(upperCase); }// L,U yes 
            } else {
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = lowerCase.concat(characters); //L,S yes 
                } else (characterArray = lowerCase); //L 
            }
        } else {
            if (upperPrompt.toLowerCase() === "yes") {
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = upperCase.concat(characters); //U,S yes   
                } else { characterArray = upperCase } //U yes
            } else {
                if (specialPrompt.toLowerCase() === "yes") {
                    characterArray = characters; //S yes
                } else { alert("This line is meaningless") } //Not Needed???
            }
        }
    }





    var passwordCharacters = []
    for (var i = 0; i < passwordLength; i++) {
        var character = characterArray[Math.floor(Math.random() * characterArray.length)]
        passwordCharacters.push(character)
    }
    passwordCharacters = passwordCharacters.join('')






    alert(passwordCharacters)

  








    var password = generatePassword();
    var passwordCharacters = document.querySelector("#password");



    passwordCharacters = password;
    
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



