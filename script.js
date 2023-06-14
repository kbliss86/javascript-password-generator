// Assignment Code
var generateBtn = document.querySelector("#generate");

// function called in the write password (button click) fucntion 
function generatePassword() {
  // declare variables 
  //Variables for each of the password character "types"
  var uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseValues =  "abcdefghijklmnopqrstuvwxyz";
  var numberValues = "0123456789";
  var specialValues = "!@#$%^&*()";
  //Entire pool of characters that password generator can pull from
  var totalChars = "";
  //variable for the desired password length
  var passwordLength;
  //password variable for the final password that is genertated and displayed
  var password = "";

  //Variables to control if a specific character type is included in the final password (1 character from each that is true)
  var inlcudeUpper = false;
  var inlcudeLower = false;
  var inlcudeNumber = false;
  var inlcudeSpecial = false;
  // var testnumber = 3;

  //function to call to get the character length of the password and also the character types in the final password
  var getPasswordLength = function() {
    //Prompts user for a password length betwen 8 and 128
    var length = prompt("What is the desired length of the password? (Must be between 8 and 128");
    //condition that prevents password lenght less than 8 or greater than 128 - returns user to the original prompt if condition is violated
    if (length < 8 || length > 128 ) {
      alert("Password must be between 8 and 128 character.");
      getPasswordLength();
    } else { 
      //if the password length conditions are met - sets the passwordLength variable to the length selected by the user
      passwordLength = length;
    };
    //determines if the user wants the character types included in the final password and assigns a random character to the password variable if true, only allows character types that the user selects in the totalChar variable
    function getpasswordoptions() {
    if (uppers = window.confirm("Do you want Uppercase letters?")) {
      inlcudeUpper = true;
      password += uppercaseValues.charAt(Math.floor(Math.random() * uppercaseValues.length))
      totalChars += uppercaseValues;
    };
    if (uppers = window.confirm("Do you want Lowerercase letters?")) {
      inlcudeLower = true;
      password += lowercaseValues.charAt(Math.floor(Math.random() * lowercaseValues.length))
      totalChars += lowercaseValues;
    };
    if (uppers = window.confirm("Do you want Numbers?")) {
      inlcudeNumber = true;
      password += numberValues.charAt(Math.floor(Math.random() * numberValues.length))
      totalChars += numberValues;
    };
    if (uppers = window.confirm("Do you want Special Characters?")) {
      inlcudeSpecial = true;
      password += specialValues.charAt(Math.floor(Math.random() * specialValues.length))
      totalChars += specialValues;
    };
    //Tests that atleast one character type is chosen
    if ((inlcudeUpper == true) || (inlcudeLower == true) || (inlcudeNumber == true) || (inlcudeSpecial == true)) {
    //fills in the remaining characters depending on the length selected by the user
    for (var i = password.length; i < passwordLength; i++) {
      password += totalChars.charAt(Math.floor(Math.random() * totalChars.length));
      };
      //forces the user to reselect the character types for the password
    } else { 
      alert("You Must select atleast 1 type of character");
      getpasswordoptions();
    };
  };
  getpasswordoptions();
};
getPasswordLength();
//logs to check the values that are generated for the password
  console.log("Password Length: " + passwordLength);
  console.log("Include Upper: " + inlcudeUpper + " " + typeof inlcudeUpper);
  console.log("Include Upper: " + inlcudeLower + " " + typeof inlcudeLower);
  console.log("Include Upper: " + inlcudeNumber + " " + typeof inlcudeNumber);
  console.log("Include Upper: " + inlcudeSpecial + " " + typeof inlcudeSpecial);
  console.log("totalchars: " + totalChars);
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