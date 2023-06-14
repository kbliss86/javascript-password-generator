// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseValues =  "abcdefghijklmnopqrstuvwxyz";
  var numberValues = "0123456789";
  var specialValues = "!@#$%^&*()";
  var totalChars = uppercaseValues + lowercaseValues + numberValues + specialValues;
  console.log(totalChars)
  var passwordLength;
  var password = "";

  var inlcudeUpper = false;
  var inlcudeLower = false;
  var inlcudeNumber = false;
  var inlcudeSpecial = false;
  // var testnumber = 3;

  var getPasswordLength = function() {
    var length = prompt("What is the desired length of the password? (Must be between 8 and 128");

    if (length < 8 || length > 128 ) {
      alert("Password must be between 8 and 128 character.");
      getPasswordLength();
    } else { 
      passwordLength = length;
    };

    if (uppers = window.confirm("Do you want Uppercase letters?")) {
      inlcudeUpper = true;
      password += uppercaseValues.charAt(Math.floor(Math.random() * uppercaseValues.length))
    };
    if (uppers = window.confirm("Do you want Lowerercase letters?")) {
      inlcudeLower = true;
      password += lowercaseValues.charAt(Math.floor(Math.random() * lowercaseValues.length))
    };
    if (uppers = window.confirm("Do you want Numbers?")) {
      inlcudeNumber = true;
      password += numberValues.charAt(Math.floor(Math.random() * numberValues.length))
    };
    if (uppers = window.confirm("Do you want Special Characters?")) {
      inlcudeSpecial = true;
      password += specialValues.charAt(Math.floor(Math.random() * specialValues.length))
    };
    for (var i = password.length; i < passwordLength; i++) {
      password += totalChars.charAt(Math.floor(Math.random() * totalChars.length));
      };
  };
getPasswordLength();

  console.log("Password Length: " + passwordLength);
  console.log("Include Upper: " + inlcudeUpper + " " + typeof inlcudeUpper);
  console.log("Include Upper: " + inlcudeLower + " " + typeof inlcudeLower);
  console.log("Include Upper: " + inlcudeNumber + " " + typeof inlcudeNumber);
  console.log("Include Upper: " + inlcudeSpecial + " " + typeof inlcudeSpecial);
  console.log(password);

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // alert("you clicked the button");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Start with declaring password content variable

// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" - make an arrary? - addd in lowerCase, Numbers and Special




// Prompt for password length - check condition that response is atleast 8 but less than 128 - alert if outside those params 

// Prompts for how many Upper/lower/number/spec character to inlcude - check condition that the sum of all the criteria less than 128 - alert if outside the params
    //Check with instructors to make sure i actually NEED to have the NUMBER of characters or just yes/no (boolean)


// Check condition if sum of special character = 0 then send alert - change if only yes/no is needed




