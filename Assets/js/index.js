// Initialize DOM elements
generateBtn = document.querySelector('#generate');
clearHistoryBtn = document.querySelector('#clear-history');

// Create arrays for character sets
specialChar = [
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
numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
lowLetterCharc = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);
capsLetterCharc = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

// Initialize password history array
passwordHistory = [];

// Function to prompt user for password options
function getPasswordOptions() {
  length = parseInt(prompt('Password length between 8 and 128'), 10);

  // Validate length input
  if (Number.isNaN(length) || length < 8 || length > 128) {
    alert('Password length must be provided as a number between 8 and 128');
    return null;
  }

  // Check the state of checkboxes
  includesSpecial = document.getElementById('specialCharCheckbox').checked;
  includesNumeric = document.getElementById('numericCharCheckbox').checked;
  includesLowercase = document.getElementById('lowercaseCharCheckbox').checked;
  includesUppercase = document.getElementById('uppercaseCharCheckbox').checked;

  // Count the number of selected character types
  selectedTypes = [
    includesSpecial,
    includesNumeric,
    includesLowercase,
    includesUppercase,
  ].filter(Boolean);

  // Validate that at least two character types are selected
  if (selectedTypes.length < 3) {
    alert('WARNING!! PLEASE SELECT 3+ CHECKBOX');
    return null;
  }

  // Return an object with the selected options
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
  pwdOptions = getPasswordOptions();

  // If no options are selected, return
  if (!pwdOptions) return;

  // Combine selected character sets into one array
  allCharacters = [].concat(
    pwdOptions.includesSpecial ? specialChar : [],
    pwdOptions.includesNumeric ? numericChar : [],
    pwdOptions.includesLowercase ? lowLetterCharc : [],
    pwdOptions.includesUppercase ? capsLetterCharc : []
  );

  // Generate the password using the selected options
  password = '';
  for (let i = 0; i < pwdOptions.length; i++) {
    password += generatePassword(allCharacters);
  }

  // Update password history and display it
  updatePasswordHistory(password);
  displayPasswordHistory();

  // Display the generated password in the #password input field
  passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Function to generate a random character from the given array
function generatePassword(arr) {
  randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// Function to update the password history array
function updatePasswordHistory(password) {
  passwordHistory.push(password);
}

// Function to display the password history
function displayPasswordHistory() {
  historyContainer = document.getElementById('password-history');
  historyContainer.innerHTML = '';

  passwordHistory.forEach((password, index) => {
    passwordItem = document.createElement('div');
    passwordItem.textContent = `Password ${index + 1}: ${password}`;
    historyContainer.appendChild(passwordItem);
  });
}

// Event listener for the "generate" button to trigger password generation
generateBtn.addEventListener('click', writePassword);

// Event listener for the "Clear History" button
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
