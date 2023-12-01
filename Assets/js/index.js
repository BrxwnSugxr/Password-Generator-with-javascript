// Assignment Code
var generateBtn = document.querySelector('#generate');

// creating array for character sets for sepcial characters, numveric characgters lowercase characters and uppercase
const sepcialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '`',
  '~',
  '[',
  '{',
  '}',
  ']',
  ',',
  '.',
  '/',
  '?',
  '\\',
];
const numbercCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCasedCharacters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);
const upperCasedCharacters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// creating a function so prompt password
function getPasswordOptions(){

}
//generate password with user input 
function generatePassword(){

}




// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
