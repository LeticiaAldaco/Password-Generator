// Assignment code here
// Criteria
var passwordLength;
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var special = [
  "!",
  "'",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Password Function
var generateBtn = document.querySelector("#generate");

//Password length prompt
function writePassword() {
  let passwordText = document.querySelector("#password");
  passwordLength = parseInt(
    window.prompt("Password must be between 8 and 128 characters")
  );
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Password does not fit password length criteria. Please enter it again"
    );
    passwordLength = window.prompt(
      "Password must be between 8 and 128 characters"
    );
  }
  passwordText.value = characterTypes();
}

function characterTypes() {
  let abc = window.confirm("Do you want to include lowercase letters?");
  let ABC = window.confirm("Would you also like to include uppercase letters?");
  let specChr = window.confirm("What about including special characters?");
  let num = window.confirm("Lets also include a number for extra security");
  var password = [];

  if (abc == true) {
    password = password.concat(lowerCase);
  }

  if (ABC == true) {
    password = password.concat(upperCase);
  }

  if (specChr == true) {
    password = password.concat(special);
  }

  if (num == true) {
    password = password.concat(number);
  }
  var userPassword = "";
  for (i = 0; i < passwordLength; i++) {
    var index = getRandomInt(password.length);
    userPassword = userPassword + password[index];
  }

  return userPassword;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
