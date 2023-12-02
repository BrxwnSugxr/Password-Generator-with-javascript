function writePassword() {
  const passwordOptions = getPasswordOptions();
  if (!passwordOptions) return;

  const allCharacters = [].concat(
    passwordOptions.includesSpecial ? specialCharacters : [],
    passwordOptions.includesNumeric ? numbercCharacters : [],
    passwordOptions.includesLowercase ? lowerCasedCharacters : [],
    passwordOptions.includesUppercase ? upperCasedCharacters : []
  );

  let password = '';
  for (let i = 0; i < passwordOptions.length; i++) {
    password += generatePassword(allCharacters);
  }

  const strengthResult = zxcvbn(password);
  console.log('Password strength:', strengthResult.score);
  console.log('Feedback:', strengthResult.feedback.suggestions);

  // Now you can use the strengthResult.score and feedback to provide user feedback.
}
