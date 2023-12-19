# Password-Generator

## Task
Create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Instructions
* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 8 characters but no more than 128.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

  The following image shows the web application's appearance and functionality:

![password generator demo](/assets/images/05-javascript-challenge-demo.png)


## Workflow
I committed straight to main with very clear commit messages and history

Code source can be found in script.js

## Implementation
* 4 Arrays of special, numeric, lowercase and uppercase characters to be included in password
* Function to obtain user input on desired password length
* Function to prompt user for password options
* Function for getting a random element from an array
* Function to generate password with user input
* Get references to the #generate element
* Write password to the #password input
* Add event listener to generate button

## After thoughts
  
* In the initial implementation, if a user entered a desired password length < 8 or > 128, the user would still be presented with additional options. However, the password generation would inevitably fail since the initial condition was not met. From a user usability standpoint, this approach lacks clarity as users are left in the dark about what went wrong and why a password was not generated. A more user-friendly approach would be to immediately notify users of the incorrect password length and guide them to provide a valid input, fostering a smoother and more transparent user experience.

// function passwordLength() {
//   let lengthOfPassword = parseInt(prompt("Please enter the desired characters for your password between 8 - 128"));

//   if (isNaN(lengthOfPassword) || lengthOfPassword < 8 || lengthOfPassword > 128) {
//     return null;
//   }
//   return lengthOfPassword;
// }


* Hence, a recursive call was incorporated into the `passwordLength` function. In the event of an invalid input, where the condition (< 8 or > 128) is not met, the function calls itself and issues an alert with an error message. This enhancement ensures that the user is prompted repeatedly until a valid password length is provided, offering a more intuitive and responsive user experience.

* Given more time, I would have refactored the code to consolidate all requirements into a single array. This would streamline the logic, as it would involve working with just one array. Such a consolidation simplifies the code, making it more concise and potentially easier to maintain.


## Installation

The challenge is deployed using Github Pages. The end result can be found here: https://reginaabena19.github.io/Password-Generator/ When viewing through the editor ensure live server is installed in order to run the index.html file in the browswer.

