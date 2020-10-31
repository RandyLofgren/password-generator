// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    passwordLength = prompt("Please select a password length from 8 to 128 characters by writing the number in this prompt.");
    if (Number.isInteger(parseInt(passwordLength))) {
        if (parseInt(passwordLength)>7){
            if(parseInt(passwordLength)<129){
                alert("Your password will be " + passwordLength + " characters long!")
            }else {writePassword()}

        }else{writePassword()}
           
    }
    else {
        writePassword()
    }
    numberPromt = prompt("Would you like numbers used in your password? Answer yes or no")



    var password = generatePassword();
    var passwordText = document.querySelector("#password");



    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var characters = ["!", "@", "#", "$", "%", "^", "&", "*"]