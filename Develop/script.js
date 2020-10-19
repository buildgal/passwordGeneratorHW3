// Assignment Code
var generateBtn = document.querySelector("#generate");
let letters =["a","b","c"];



function generatePassword(letters){
  
  let randomLetter= [Mathfloor(Math.random()* letters.length)];
 return letters[randomLetter]; 
 

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;
  


};

// Add event listener to generate button
 generateBtn.addEventListener("click", function writePassword() {
 
let passwordLength= prompt("Enter a password length.");
let charList=["!","@","#","$","%"]


if (passwordLength< 8) {
    alert("Password length must be 8 characters long.");
}
else if (passwordLength>128){
    alert("Password length must be less than 128 characters.")

}

else if (isNaN(passwordLength)){
    alert("Only numeric values accepted.")
}

else if(passwordLength>8 && passwordLength<128){
    let specialChar= confirm("Would you like to include special characaters?");

    if (specialChar){
        //let charRand= Math.Floor(Math.Random()*charList)
        alert("Your new password is BLANK");
    }
    else {
        alert("No special characters will be in your password.")
    }

}
 

  
});


/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
