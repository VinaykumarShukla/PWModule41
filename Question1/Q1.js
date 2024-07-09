//  Reverse String

let prompt = require('prompt-sync')();

// Get the input string from the user
const input = prompt("Enter a string: ");

// Define a function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Use setTimeout to delay the execution of the function by 2 seconds
setTimeout(function() {
  // Reverse the input string and print the result
  const reversed = reverseString(input);
  console.log(`Reversed string: ${reversed}`);
}, 2000);