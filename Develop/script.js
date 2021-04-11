// Assignment code here
// Criteria
var passwordLength;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!#$%&*+-=?@^_~";
var number = "0123456789";

//Password Function
var generatePassword = function () {};
var generateBtn = document.querySelector("#generate");

//Password length prompt
function writePassword() {
  passwordLength = parseInt(window.prompt(
    "Password must be between 8 and 128 characters"
  ));
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Password does not fit password length criteria. Please enter it again"
    );
    passwordLength = window.prompt(
      "Password must be between 8 and 128 characters"
    );
  }
    if (passwordLength >= 8 && passwordLength <= 128) {
      characterTypes();
    }
  
  // characterTypes()
}
function characterTypes() {
  var abc = window.confirm("Do you want lowercase letters?");
  var ABC = window.confirm(
    "Would you also like to include uppercase letters?");
  var specChr = window.confirm("What about including special characters?");
  var num = window.confirm("Lets also include a number for extra security");
  var password = "";

  if (abc == true) {
    password += lowerCase;
  }

  if (ABC == true) {
    password += upperCase;
  }

  if (specChr == true) {
    password += special;
  }

  if (num == true) {
    password += number;
  }
console.log (password)
  // var password = generatePassword();
  // var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += password.charAt(Math.floor(Math.random() * passwordLength));
  }
  return password;
}
// Write pasword to the #password input
// function writePassword(){
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

// passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
