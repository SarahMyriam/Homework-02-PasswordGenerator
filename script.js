//!Arrays: Uppercase, lowercase, numeric, special characters
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWYZ".split("");
var lowerCaseArray = "abcdefghijklmnopqrstuvwyz".split ("");
var numberArray = "0123456789".split("");
var specialCharsArray = "@%+\\/'!#$^?:,(){}[]~-_.]".split("");
var chars =[];

//check if prompt is true/false
var confirmUpperCase = false;
var confirmLowerCase = false;
var confirmNumericCase = false;
var confirmSpecialCharacters = false;
var passwordLength="";
var password ="";



//assignment code
var generateBtn = document.querySelector("#generate");

//*generate random password
function passwordPrompts(){

//?create for loop to choose password chars
    for(var i=0; i<= Array.length; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
    }

}

function getRandomInt(max) {
    var myNumber= Math.floor(Math.random() * Math.floor(max));
    console.log(myNumber)
  }
  



//generate password
    function generatePassword(){
        

 length = document.getElementById("number").value;

 confirmUpperCase = document.getElementById("uppercase").checked;
    
 confirmLowerCase = document.getElementById("lowercase").checked;
    
 confirmNumericCase = document.getElementById("numeric").checked;
    
 confirmSpecialChars = document.getElementById("specialchars").checked;
    


    //!funtion confirm
    if (confirmUpperCase == "true"){
        //password+=upperCaseArray[getRandomInt(25)];
        //alert ("hi")
        }
        
    
    if (confirmLowerCase == "true"){
        //alert ("must choose one lowercase");
        }
    
    if (confirmNumericCase == "true"){
        //alert ("must choose one number");
        }
    
    if (confirmSpecialChars == "true"){
        //alert ("must choose one specialchars");
        }

// if(length is less than 8 or length is greater than 128)
    if (length < 8 ||  length > 128 ) {
        alert("remember, password must be greather than 8 and less than 128")
    };
    

}


// Write password to the #password input
//todo: Write password to the #password input
    function writePassword() {
   
    generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


//?:Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    

    
//*set password 
//letlength = document.getElementById("number").value;

//!PSEUDOCODE
    /*
     *1-click button to generatePassword
    *2-Get password options from users 
    *3-prompt user to choose length between 8 and 128
    *4-Get all possible characters from the options and the characters
    *5-Add these possible characters to result that we are going to return
    *6-Swap some of the letters in the result array with the characters to ensure that the password has all options the user wants
    *7-Return the string version of result array with result. 
    */