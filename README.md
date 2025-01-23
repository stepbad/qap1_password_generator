# Password Generator CLI

## Overview
The Password Generator CLI is a command-line application built with Node.js. It generates secure passwords based on user-specified options provided through flags. The application is designed for simplicity and flexibility, allowing users to customize password length and include additional character sets like uppercase letters, numbers, and symbols.

## Features
- **Default Password Generation**: Generates an 8-character password using lowercase letters.
- **Customizable Options**:
  - Specify password length using the `--length` flag.
  - Include uppercase letters with the `--uppercase` flag.
  - Include numbers with the `--numbers` flag.
  - Include symbols with the `--symbols` flag.
- **Help Message**: Displays usage instructions with the `--help` flag.
- **Error Handling**: Provides informative error messages for invalid inputs.

## Usage
### Basic Syntax
```bash
node index.js [--length <number>] [--uppercase] [--numbers] [--symbols]
```

### Options
| Flag         | Description                                           |
|--------------|-------------------------------------------------------|
| `--length`   | Specify the password length (default: 8).             |
| `--uppercase`| Include uppercase letters in the password.            |
| `--numbers`  | Include numbers in the password.                      |
| `--symbols`  | Include symbols in the password.                      |
| `--help`     | Show the help message.                                |

### Examples
1. Generate a default password:
   ```bash
   node index.js
   ```
   Output:
   ```
   Generated Password: abcdefgh
   ```

2. Generate a 12-character password with uppercase letters:
   ```bash
   node index.js --length 12 --uppercase
   ```
   Output:
   ```
   Generated Password: aBcDeFgHiJkL
   ```

3. Generate a password with numbers and symbols:
   ```bash
   node index.js --numbers --symbols
   ```
   Output:
   ```
   Generated Password: a1b@c2d#e3f$
   ```

4. Display the help message:
   ```bash
   node index.js --help
   ```
   Output:
   ```
   Usage:
     node index.js [--length <number>] [--uppercase] [--numbers] [--symbols]
   Options:
     --length      Specify the password length (default: 8)
     --uppercase   Include uppercase letters
     --numbers     Include numbers
     --symbols     Include symbols
     --help        Show this help message
   ```


## Project Structure
```
password-generator/
├── index.js      # Main application script
├── package.json  # Project metadata
├── README.md     # Project documentation
```


## License
This project is open-source and available under the [MIT License](LICENSE).

---

**Author**: Stephen Badcock
