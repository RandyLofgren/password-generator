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
                characterPick()
            } else { writePassword() }

        } else { writePassword() }

    }
    else {
        writePassword()
    }

  



    function characterPick() {
        characterArray = []
        if (confirm("would you like uppercase letters")) {
            characterArray = characterArray.concat(upperCase)
            makeSure.push(upperCase[Math.floor(Math.random() * upperCase.length)])
        }
        if (confirm("would you like lowercase letters")) {
            characterArray = characterArray.concat(lowerCase)
            makeSure.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
        }

        if (confirm("would you like numbers")) {
            characterArray = characterArray.concat(numbers)
            makeSure.push(numbers[Math.floor(Math.random() * numbers.length)])
        }
        if (confirm("would you like special characters")) {
            characterArray = characterArray.concat(characters)
            makeSure.push(characters[Math.floor(Math.random() * characters.length)])
        }
        if (characterArray.length > 1) {
            var passwordCharacters = []
            for (var i = 0; i < passwordLength; i++) {
                var character = characterArray[Math.floor(Math.random() * characterArray.length)]
                passwordCharacters.push(character)
            }
            for (let k = 0; k < makeSure.length; k++) {
           
                passwordCharacters[k] = makeSure[k]

            }
            passwordCharacters = passwordCharacters.join('')
            
            
            var passDom = document.getElementById("password")
            passDom.value = passwordCharacters
        }
        else {
            alert("must pick one character type")
            characterPick()
        }
    }
}

// return passwordCharacters
generateBtn.addEventListener("click", writePassword);
