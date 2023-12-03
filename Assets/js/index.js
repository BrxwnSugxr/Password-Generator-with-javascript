var generateBtn = document.querySelector('#generate');
var clearHistoryBtn = document.querySelector('#clear-history');

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

// Password history array
var passwordHistory = [];

// Function to prompt the user for password options
function getPasswordOptions() {
  // Getting the desired length of the password from the user
  const length = parseInt(prompt('Password length between 8 and 128'), 10);

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

  // Counting the number of selected character types
  const selectedTypes = [
    includesSpecial,
    includesNumeric,
    includesLowercase,
    includesUppercase,
  ].filter(Boolean);

  // Validating that at least two character types are selected
  if (selectedTypes.length < 3) {
    alert('WARNING!! PLEASE SELECT 3+ CHECKBOX');
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

  // Update password history and display it
  updatePasswordHistory(password);
  displayPasswordHistory();

  // Displaying the generated password in the #password input field
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Function to generate a random character from the given array
function generatePassword(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// Function to update the password history array
function updatePasswordHistory(password) {
  passwordHistory.push(password);
}

// Function to display the password history
function displayPasswordHistory() {
  const historyContainer = document.getElementById('password-history');
  historyContainer.innerHTML = '';

  passwordHistory.forEach((password, index) => {
    const passwordItem = document.createElement('div');
    passwordItem.textContent = `Password ${index + 1}: ${password}`;
    historyContainer.appendChild(passwordItem);
  });
}

// Adding an event listener to the "generate" button to trigger the password generation
generateBtn.addEventListener('click', writePassword);

// Adding an event listener to the "Clear History" button
clearHistoryBtn.addEventListener('click', function () {
  // Clear the password history array
  passwordHistory = [];

  // Display the cleared password history
  displayPasswordHistory();
});

// Additional function to initialize the application
function initializeApp() {
  displayPasswordHistory();
}

// Call the initialize function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
