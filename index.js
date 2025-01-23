//Stephen Badcock sd12 s3
// QAP1 password generator

// Constants
const DEFAULT_LENGTH = 8;
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

// Function to generate a password
function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
  let characters = LOWERCASE;

  // Add character sets based on flags
  if (includeUppercase) characters += UPPERCASE;
  if (includeNumbers) characters += NUMBERS;
  if (includeSymbols) characters += SYMBOLS;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Function to parse arguments
function parseArgs(args) {
  const options = { length: DEFAULT_LENGTH, includeUppercase: false, includeNumbers: false, includeSymbols: false };

  args.forEach((arg, index) => {
    if (arg === "--length" && args[index + 1]) {
      const len = parseInt(args[index + 1], 10);
      if (!isNaN(len) && len > 0) {
        options.length = len;
      } else {
        console.error("Error: Invalid length provided. Please provide a positive number.");
        process.exit(1);
      }
    } else if (arg === "--uppercase") {
      options.includeUppercase = true;
    } else if (arg === "--numbers") {
      options.includeNumbers = true;
    } else if (arg === "--symbols") {
      options.includeSymbols = true;
    } else if (arg === "--help") {
      console.log(`
        Usage:
          node index.js [--length <number>] [--uppercase] [--numbers] [--symbols]
        Options:
          --length      Specify the password length (default: 8)
          --uppercase   Include uppercase letters
          --numbers     Include numbers
          --symbols     Include symbols
          --help        Show this help message
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
console.log("Generated Password:", generatePassword(options.length, options.includeUppercase, options.includeNumbers, options.includeSymbols));
