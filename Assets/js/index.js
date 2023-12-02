// Assigning the "generate" button to the variable generateBtn
var generateBtn = document.querySelector('#generate');

// Creating arrays for character sets: special characters, numeric characters, lowercase characters, and uppercase characters
const specialChar = [
  '`',
  '~',
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
  '[',
  '{',
  '}',
  ']',
  '\\',
  '|',
  ';',
  ':',
  ',',
  '.',
  '?',
  '/',
];
const numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const lowLetterCharc = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);
const capsLetterCharc = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

// Function to prompt the user for password options
function getPasswordOptions() {
  // Getting the desired length of the password from the user
  const length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Validating the length input
  if (Number.isNaN(length) || length < 8 || length > 128) {
    alert('Password length must be provided as a number between 8 and 128');
    return null;
  }

  // Checking the state of checkboxes
  const includesSpecial = document.getElementById(
    'specialCharCheckbox'
  ).checked;
  const includesNumeric = document.getElementById(
    'numericCharCheckbox'
  ).checked;
  const includesLowercase = document.getElementById(
    'lowercaseCharCheckbox'
  ).checked;
  const includesUppercase = document.getElementById(
    'uppercaseCharCheckbox'
  ).checked;

  // Validating that at least one character type is selected
  if (
    !includesSpecial &&
    !includesNumeric &&
    !includesLowercase &&
    !includesUppercase
  ) {
    alert('Must select at least one character type');
    return null;
  }

  // Returning an object with the selected options
  return {
    length,
    includesSpecial,
    includesNumeric,
    includesLowercase,
    includesUppercase,
  };
}

// Function to write the generated password to the #password input
function writePassword() {
  const pwdOptions = getPasswordOptions();

  // If no options are selected, return
  if (!pwdOptions) return;

  // Combining selected character sets into one array
  const allCharacters = [].concat(
    pwdOptions.includesSpecial ? specialChar : [],
    pwdOptions.includesNumeric ? numericChar : [],
    pwdOptions.includesLowercase ? lowLetterCharc : [],
    pwdOptions.includesUppercase ? capsLetterCharc : []
  );

  // Generating the password using the selected options
  let password = '';
  for (let i = 0; i < pwdOptions.length; i++) {
    password += generatePassword(allCharacters);
  }

  // Displaying the generated password in the #password input field
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Function to generate a random character from the given array
function generatePassword(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// Adding an event listener to the "generate" button to trigger the password generation
generateBtn.addEventListener('click', writePassword);
