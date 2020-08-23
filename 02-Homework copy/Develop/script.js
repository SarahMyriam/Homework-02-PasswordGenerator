//assignment code
var generateBtn = document.querySelector("#generate");

//*generate random password
function passwordPrompts(){

//!Arrays: Uppercase, lowercase, numeric, special characters
    var upperCaseArray= "ABCDEFGHIJKLMNOPQRSTUVWYZ".split("");
    var lowerCaseArray= "abcdefghijklmnopqrstuvwyz".split ("");
    var numberArray= "0123456789".split("");
    var specialCharsArray= "@%+\\/'!#$^?:,(){}[]~-_.]".split("");
    var chars =[];

//check if prompt is true/false
    var confrimUpperCase = false;
    var confrimLowerCase = false;
    var confrimNumericCase = false;
    var confrimSpecialCharacters = false;
    var length="";
    var password ="";

//?create for loop to choose password chars
    for(var i=0; i<= Array.length; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
    }

//todo:check if prompt is true/false
    var confirmUpperCase;
    var confirmLowerCase;
    var confirmNumericCase;
    var confirmSpecialChars;
    var chars;

}

//generate password
    function generatePassword(){
    if (confrimUpperCase == "false"){
    length = document.getElementById("number").value;

    confrimUpperCase = document.getElementById("uppercase").checked;
    console.log (confrimUpperCase)

    confrimlowerCase = document.getElementById("lowercase").checked;
    console.log (confrimlowerCase)

    confrimNumericCase = document.getElementById("numericcase").checked;
    console.log (confrimNumericCase)

    confrimSpecialChars = document.getElementById("specialchars").checked;
    console.log (confrimspecialrChars)
    }

//!funtion confirm
    if (confirmUpperCase == "false"){
        alert ("must choose one Uppercase");
        }
    if (confrimlowerCase == "false"){
    if (confirmLowerCase == "false"){
        alert ("must choose one lowercase");
        }
    if (confrimNumericCase == "false"){
    if (confirmNumericCase == "false"){
        alert ("must choose one number");
        }
    if (confrimspecialrChars == "false"){
    if (confirmSpecialChars == "false"){
        alert ("must choose one specialchars");
        }

// if(length is less than 8 or length is greater than 128)
    if (length < 8 ||  length > 128 ) {
        alert("remember, password must be greather than 8 and less than 128")
    };

}


// Write password to the #password input
//todo: Write password to the #password input
    function writePassword() {
    console.log("execute password");
    var password = generatePassword("number");
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


//?:Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    console.log(generateBtn)

    
//*set password length
    let length = document.getElementById("password").value;

//!PSEUDOCODE
    /**
     *1-click button to generatePassword
    *2-Get password options from users 
    *3-prompt user to choose length between 8 and 128
    *4-Get all possible characters from the options and the characters
    *5-Add these possible characters to result that we are going to return
    *6-Swap some of the letters in the result array with the characters to ensure that the password has all options the user wants
    *7-Return the string version of result array with result. 
    */ 