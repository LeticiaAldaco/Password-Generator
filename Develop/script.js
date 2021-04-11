// Assignment code here
var passwordLength
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!#$%&*+-=?@^_~";
var number = "0123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input

function writePassword() {
  var passwordLength = window.prompt("Password must be between 8 and 128 characters")
  if (passwordLength  < 8 || passwordLength > 128  ){
   window.alert("Password does not fit password length criteria. Please enter it again")
   passwordLength = window.prompt("Password must be between 8 and 128 characters")
   if (passwordLength  > 8 && passwordLength < 128  ){ 
    characterTypes()
   }
  }
  characterTypes()
 
}
function characterTypes () {
var lowerCase = window.confirm("Do you want lowercase letters?");
var upperCase = window.confirm("Would you also like to include uppercase letters?");
var special = window.confirm("What about including special characters?");
var number = window.confirm("Lets also include a number for extra security");
var password ='';
}

if (lowerCase == true){
 password +=lowerCase;
}

if (upperCase )

// var password = generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



