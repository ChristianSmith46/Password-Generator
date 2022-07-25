// Assignment code here
var upperLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var lowerLetters = ("abcdefghijklmnopqrstuvwxyz").split("");
var numbers = ("0123456789").split("");
var specialCharacters = (" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~").split("");


function generatePassword() {
  var passLength = (Number(prompt("Select your password length(8-128 characters)")));
  if (!passLength ||
    passLength > 128 ||
    passLength < 8){
    alert("Invalid Password Length");
    return null;
  }
  var includeLower = confirm("Should the password contain lowercase letters?");
  var includeLower = confirm("Should the password contain uppercase letters?");
  var includeLower = confirm("Should the password contain numbers?");
  var includeLower = confirm("Should the password contain special characters?");

  return "hi";
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
