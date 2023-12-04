# Password Generator Javascript

The project is modifiying index.js. The code this code creates a password generator that prompts the user for preferences, generates a password based on those preferences, and displays the result on a webpage.

## Table of Contents

- [Description](#description)
- [Screenshot](#screenshot)
- [Deployed Application](#deployed-application)
- [Installation](#installation)

## Description

### Purpose:

The purpose of the provided code is to create a password generator application that allows users to generate secure passwords based on specific criteria they choose. The application runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.


#### User Input:

> The user is prompted to specify the desired length of the password, which should be between 8 and 128 characters.
Character Set Selection:

> The user can choose which types of characters to include in the generated password. The available character sets are special characters, numeric characters, lowercase letters, and uppercase letters.
#### Validation:

> The user's input is validated to ensure it meets the specified requirements. For example, the password length must be a number between 8 and 128, and at least three types of characters must be selected.
#### Password Generation:

> Based on the user's input, the application generates a random password that adheres to the specified criteria.
#### Password History:
 
> The application keeps track of the generated passwords in a history array.
#### Display:

> The generated password is displayed in the HTML input field, and the password history is displayed below the input field.
#### Clear History:

> There's an option to clear the password history.
#### Event Listeners:

> Event listeners are used to trigger password generation when the "Generate" button is clicked and to clear the password history when the "Clear History" button is clicked.
#### Initialization:

> The application is initialized when the DOM is ready, displaying the password history.
> The overall purpose is to provide users with a convenient tool to generate secure passwords with flexibility in choosing the length and types of characters included. It encourages good password practices for users who need to create strong passwords for sensitive data access.

### Features and Changes:

**Button Assignment:**

> A button with the ID 'generate' is assigned to the variable _'generateBtn'._

**Character Set Arrays:**

> Arrays are created for different character sets:
> specialChar for special characters.
> numericChar for numeric characters.
> LowLetterCharc for lowercase alphabetical characters.
> CapsLetterCharc for uppercase alphabetical characters.

**Prompting for Password Options:**

> The getPasswordOptions function is defined to gather user preferences for password generation.
> The user is prompted to input the desired length of the password.
> The input is validated, ensuring it's a number between 8 and 128.
> The user is asked to confirm the inclusion of special characters, numeric characters, lowercase characters, and uppercase characters.
> Validation ensures that at least one character type is selected.
> An object containing the selected options is returned.

**Writing the Password:**

> The writePassword function is defined to generate and display the password.
> It calls getPasswordOptions to get the user's preferences.
> If no options are selected, the function returns.
> The selected character sets are combined into one array.
> A loop generates a password by randomly selecting characters from the combined set based on the desired length.
> The generated password is displayed in the HTML element with the ID 'password'.

**Password Generation:**

> The _generatePassword_ function takes an array and returns a random element from it.

**Event Listener:**

> An event listener is added to the 'generate' button.
> When the button is clicked, it triggers the writePassword function.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Screenshot

Include a screenshot or multiple screenshots of your application to give users a visual representation of your project.

![Step by step Instruction.](./Assets/images/PasswordGenerator.gif)

![Screenshot of application](./Assets/images/passwordgenerator.png)
![Screenshot of application](./Assets/images/passwordgenerator2.png)

## Deployed Application

Link to the live deployment of your application. Make it easy for users to access and explore your project.

[Deployed Application](https://brxwnsugxr.github.io/Password-Generator-with-javascript/#about)

## Installation

Two methods of cloning.

```bash
# Example installation steps
git clone https://github.com/BrxwnSugxr/Password-Generator-with-javascript.git
git clone git@github.com:BrxwnSugxr/Password-Generator-with-javascript.git
cd your-repository
ls file-name
```
