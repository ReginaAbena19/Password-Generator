let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function passwordLength() {
  let lengthOfPassword = parseInt(prompt("Please enter the desired characters for your password between 8 - 128"));

  if (isNaN(lengthOfPassword) || lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Incorrect number of characters requested, please try again");
    return passwordLength();
  }
  return lengthOfPassword
}

function getPasswordOptions() {
  let lengthOfPassword = passwordLength();

  let lowercaseCharacter, uppercaseCharacter, numericCharacter, specialCharacter;

  do {
    lowercaseCharacter = confirm("Include lowercase characters?");
    uppercaseCharacter = confirm("Include uppercase characters?");
    numericCharacter = confirm("Include numeric characters?");
    specialCharacter = confirm("Include special characters?");
  } while (!(lowercaseCharacter || uppercaseCharacter || numericCharacter || specialCharacter));

  return {
    length: lengthOfPassword,
    lowerCase: lowercaseCharacter,
    upperCase: uppercaseCharacter,
    numeric: numericCharacter,
    special: specialCharacter,
  };

}

function getRandom(arr) {
  if (arr.length === 0) {
    return null;
  }
  const randomElementIndex = Math.floor(Math.random() * arr.length);
  return arr[randomElementIndex];
}


function generatePassword() {
  const options = getPasswordOptions();

  if (!options) {
    return null;
  }

  const characterArrays = [
    { condition: options.lowerCase, characters: lowerCasedCharacters },
    { condition: options.upperCase, characters: upperCasedCharacters },
    { condition: options.numeric, characters: numericCharacters },
    { condition: options.special, characters: specialCharacters }
  ];

  const selectedCharacters = characterArrays
    .filter(option => option.condition)
    .flatMap(option => option.characters);

  const password = Array.from({ length: options.length }, () => getRandom(selectedCharacters)).join('');

  return password;
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);