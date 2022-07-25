// Assignment code here
// Set up Arrays for the different types of characters I used the split to make the code easier to read.
var upperLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var lowerLetters = ("abcdefghijklmnopqrstuvwxyz").split("");
var numbers = ("0123456789").split("");
var specialCharacters = ("!#$%&+-./:@\\^_").split("");

function passwordCreation(passLength, includeLower, includeUpper, includeNumbers, includeSpecial) {
  var characters = [];
  var password = "";

  // Intialize counters with nothing so the if statements later on is easier and only set to 0 if we're using that type of character
  var lowerCount;
  var upperCount;
  var numberCount;
  var specialCount;

  // Create the list of usable letters
  if (includeLower) {
    characters = characters.concat(lowerLetters);
    lowerCount = 0;
  }
  if (includeUpper) {
    characters = characters.concat(upperLetters);
    upperCount = 0;
  }
  if (includeNumbers) {
    characters = characters.concat(numbers);
    numberCount = 0;
  }
  if (includeSpecial) {
    characters = characters.concat(specialCharacters);
    specialCount = 0;
  }

  // Actual creation of the password using math random to get a random character from the characters array.
  // Doing this in a for loop for how long the password is going to be.
  // Added an increment to the counters so I can check later on to see if the characters occur.
  for (var i = 0; i < passLength; i++){
    var newLetter = characters[Math.floor(Math.random() * characters.length)];

    if (lowerLetters.includes(newLetter)) {
      lowerCount++;
    }
    if (upperLetters.includes(newLetter)) {
      upperCount++;
    }
    if (numbers.includes(newLetter)) {
      numberCount++;
    }
    if (specialCharacters.includes(newLetter)) {
      specialCount++;
    }

    password += newLetter;
  }
// if the count is 0 it means a character that i want in the password doesn't show up so I regenerate it with recursion.
  if (lowerCount === 0 ||
    upperCount === 0 ||
    numberCount === 0 ||
    specialCount === 0) {
      password = passwordCreation(passLength, includeLower, includeUpper, includeNumbers, includeSpecial);
  }
  return password;
}


function generatePassword() {
  // Make sure passLength is a number and has the correct amount of characters
  var passLength = (Number(prompt("Select your password length(8-128 characters)")));
  if (!passLength ||
    passLength > 128 ||
    passLength < 8){
    alert("Invalid Password Length");
    return null;
  }
  // Prompts for character types
  var includeLower = confirm("Should the password contain lowercase letters?");
  var includeUpper = confirm("Should the password contain uppercase letters?");
  var includeNumbers = confirm("Should the password contain numbers?");
  var includeSpecial = confirm("Should the password contain special characters?");

  // If no character types were selected return null so they have to try again
  if (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
    alert("No character types selected");
    return null;
  }

  // Call the passwordCreation function which return the password
  return passwordCreation(passLength, includeLower, includeUpper, includeNumbers, includeSpecial);
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
