// Assignment Code
var generateBtn = document.querySelector("#generate");


//generate random password
function passwordPrompts(){

  //Arrays: Uppercase, lowercase, numeric, special characters
var upperCaseArray= "ABCDEFGHIJKLMNOPQRSTUVWYZ".split("");
var lowerCaseArray= "abcdefghijklmnopqrstuvwyz".split ("");
var numberArray= "0123456789".split("");
var specialCharsArray= "@%+\\/'!#$^?:,(){}[]~-_.]".split("");

//check if prompt is true/false
var confrimUpperCase = false;
var confrimLowerCase = false;
var confrimNumericCase = false;
var confrimSpecialCharacters = false;
var length="";
var password ="";
}
 //generate password
function generatePassword(){
  length = document.getElementById("number").value;
  confrimUpperCase = document.getElementById("uppercase").checked;
  console.log (confrimUpperCase)
  confrimlowerCase = document.getElementById("lowercase").checked;
  console.log (confrimlowerCase)
  confrimNumericCase = document.getElementById("numericcase").checked;
  console.log (confrimNumericCase)
  confrimSpecialChars = document.getElementById("specialchars").checked;
  console.log (confrimspecialrChars)

  //funtion confirm
  if (confrimUpperCase == "false"){
    alert ("must choose one Uppercase");
    }
  if (confrimlowerCase == "false"){
    alert ("must choose one lowercase");
    }
  if (confrimNumericCase == "false"){
    alert ("must choose one number");
    }
  if (confrimspecialrChars == "false"){
    alert ("must choose one specialchars");
    }

  // if(length is less than 8 or length is greater than 128)
  if (length < 8 ||  length > 128 ) {
    alert("error, password must be greather than 8 and less than 128")
  };
  
}


// Write password to the #password input
function writePassword() {
  console.log();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)

    //set password length
    let length = document.getElementById("password").value;


