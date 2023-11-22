// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

//Main function to generate the password 
var passwordLength = 0;
var selectedOption = [];

//ensure password length is correct
function generatePassword() {
  passwordLength = prompt(
    "How many characters long do you want your password to be?"
  );

  if (isNaN(passwordLength)) {
    alert("Please enter numbers only");
    return;
  }
  if (passwordLength < 8) {
    alert("Minimum password length is 8 characters");
    return;
  }
  if (passwordLength > 128) {
    alert("Maximum password length is 128 characters");
    return;
  }

  passwordLength = parseInt(passwordLength);

  //Does the user want to include uppercase? if so, add to array "selectedOption"

  let upperCaseYes = confirm(
    "Click ok to confirm to include uppercase Characters"
  );
  if (upperCaseYes === true) {
    selectedOption = upperCasedCharacters.concat(selectedOption);
  }

  //Does the user want to include lowercase? if so, add to array "selectedOption"
  let lowerCaseYes = confirm(
    "Click ok to confirm to include lowercase Characters"
  );
  if (lowerCaseYes === true) {
    selectedOption = lowerCasedCharacters.concat(selectedOption);
  }

  //Does the user want to include numbers? if so, add to array "selectedOption"
  let numbersYes = confirm("Click ok to confirm to include numbers");
  if (numbersYes === true) {
    selectedOption = numericCharacters.concat(selectedOption);
  }

  //Does the user want to include symbols? if so, add to array "selectedOption"
  let symbolsYes = confirm("Click ok to confirm to include symbols");
  if (symbolsYes === true) {
    selectedOption = specialCharacters.concat(selectedOption);
  }

  //If the user does not select any options, alert and exit
  if (
    upperCaseYes === false &&
    lowerCaseYes === false &&
    numbersYes === false &&
    symbolsYes === false
  ) {
    alert("At least 1 character type must be selected");
  } else {
    return getRandom();
  }
}

// Function for getting a random element from the selected options array

function getRandom() {
  let randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    randomPassword +=
      selectedOption[Math.floor(Math.random() * selectedOption.length)];
  }
  
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
