// Assignment Code
var generateBtn = document.querySelector("#generate");


//*generate random password
function passwordPrompts(){

  //!Arrays: Uppercase, lowercase, numeric, special characters
var upperCaseArray= "ABCDEFGHIJKLMNOPQRSTUVWYZ".split("");
var lowerCaseArray= "abcdefghijklmnopqrstuvwyz".split ("");
var numberArray= "0123456789".split("");
var specialCharsArray= "@%+\\/'!#$^?:,(){}[]~-_.]".split("");
var chars =[];

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
  length = document.getElementById("number").value;

  confirmUpperCase = document.getElementById("uppercase").checked;
  console.log (confirmUpperCase)

  confirmLowerCase = document.getElementById("lowercase").checked;
  console.log (confirmLowerCase)

  confirmNumericCase = document.getElementById("numeric").checked;
  console.log (confirmNumericCase)

  confirmSpecialChars = document.getElementById("specialchars").checked;
  console.log (confirmSpecialChars)

  //!funtion confirm
  if (confirmUpperCase == "false"){
    alert ("must choose one Uppercase");
    }
  if (confirmLowerCase == "false"){
    alert ("must choose one lowercase");
    }
  if (confirmNumericCase == "false"){
    alert ("must choose one number");
    }
  if (confirmSpecialChars == "false"){
    alert ("must choose one specialchars");
    }

  //*if(length is less than 8 or length is greater than 128)
  if (length < 8 ||  length > 128 ) {
    alert("error, password must be greather than 8 and less than 128")
  };
  
}


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

//PSEUDOCODE
1-//?click button to generatePassword
2-//todo:
3-//*
4-//!
5-//
6-//?
7-//*
8-//todo:

