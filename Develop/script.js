// Assignment code here
//User input global variables
var enter;
var passwordNumber;
var passwordCharacter;
var passwordUppercase;
var passwordLowercase;

//Password special characters
character = ["~", "!", "@", "#", "$", "%", "^", "^", "&", "*", "(", ")", "-", "=", "+", ",", ".", "/", "?", ">", "<", "[", "]", "{", "}", "|", "'", "\\", ":", ";"];

//Password numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Password alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//uppercase
space = [];

//declared outside the if statement to be concat upon condition
var choices;

//converts letters to uppercase
var toUpper = function(x) {
  return x.toUpperCase();
};

//creates variable for conversion into uppercase
alpha2 = alpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pw;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//generate password
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose a number between 8 and 128"));
  if (!enter) {
    alert("Please choose a number between 8 and 128");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    passwordNumber = confirm("Do you want numbers in your password?");
    passwordCharacter = confirm("Do you want special characters in your password?");
    passwordUppercase = confirm("Do you want your password to have Uppercase latters?");
    passwordLowercase = confirm("Do you want your password to have Lowercase latters?");
  };

  if (!passwordCharacter && !passwordNumber && !passwordUppercase && !passwordLowercase) {
    choices = alert("You must choose a criteria");
  }

  else if (passwordCharacter && passwordNumber && passwordUppercase && passwordLowercase) {
    choices = character.concat(number, alpha, alpha2);
  }

//3 options  
  else if (passwordCharacter && cpasswordNumber && passwordUppercase) {
    choices = character.concat(number, alpha2);
  }

  else if (passwordCharacter && passwordNumber && passwordLowercase) {
    choices = character.concat(number, alpha);
  }

  else if (passwordCharacter && passwordLowercase && passwordUppercase) {
    choices = character.concat(alpha, alpha2);
  }

  else if (passwordNumber && passwordLowercase && passwordUppercase) {
    choices = number.concat(alpha, alpha2);
  }
//2 options
  else if (passwordCharacter && passwordNumber) {
    choices = character.concat(number);
  }

  else if (passwordCharacter && passwordLowercase) {
    choices = character.concat(alpha);
  }

  else if (passwordCharacter && passwordUppercase) {
    choices = character.concat(alpha2);
  }

  else if (passwordLowercase && passwordNumber) {
    choices = alpha.concat(number);
  }

  else if (passwordLowercase && passwordUppercase) {
    choices = alpha.concat(alpha2);
  }

  else if (passwordNumber && passwordUppercase) {
    choices = number.concat(alpha2);
  }

//1 option
  else if (passwordCharacter) {
    choices = character;
  }

  else if (passwordNumber) {
    choices = number;
  }

  else if (passwordLowercase) {
    choices = alpha;
  }

  else if (passwordUppercase) {
    choices = space.concat(alpha2);
  };

  //array placeholder for user generated password length
  var password = [];

  for (var i = 0; i <enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var writePassword = password.join("");
  UserInput(writePassword);
  return writePassword;
}

//puts newly generated password into textbox
function UserInput(writePassword) {
  document.getElementById("password").textContent = writePassword;
}

