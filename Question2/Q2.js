// Random Number Generator with Delay and Progress Indication:

// Set the delay in seconds

let delay = 3;

// Display a message every second indicating the time remaining
let timer = setInterval(() => {
  console.log(`Generating random number in ${delay} seconds...`);
  delay--;
  if (delay <= 0) {
    clearInterval(timer);
    generateRandomNumber();
  }
}, 1000);

// Function to generate a random number
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  console.log(`Random number generated: ${randomNumber}`);
}