//Stephen Badcock sd12 s3
// QAP1 password generator

// Constants
const DEFAULT_LENGTH = 8;

// Function to generate a password
function generatePassword(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Function to parse arguments
function parseArgs(args) {
  const options = { length: DEFAULT_LENGTH };

  args.forEach((arg, index) => {
    if (arg === "--length" && args[index + 1]) {
      const len = parseInt(args[index + 1], 10);
      if (!isNaN(len) && len > 0) {
        options.length = len;
      } else {
        console.error("Error: Invalid length provided. Please provide a positive number.");
        process.exit(1);
      }
    } else if (arg === "--help") {
      console.log(`
        Usage:
          node index.js [--length <number>]
        Options:
          --length    Specify the password length (default: 8)
          --help      Show this help message
      `);
      process.exit(0);
    }
  });

  return options;
}

// Main Program
const args = process.argv.slice(2);
const options = parseArgs(args);

// Generate and display the password
console.log("Generated Password:", generatePassword(options.length));
