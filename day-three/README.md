# Number Multiplier

# Description
A Node.js application that processes corrupted memory containing multiplication instructions. The program scans through text to find and execute valid multiplication operations in the format `mul(X,Y)`, where X and Y are 1-3 digit numbers, while ignoring corrupted or invalid instructions.

## The Challenge
The computer appears to be trying to run a program, but its memory (your puzzle input) is corrupted. All of the instructions have been jumbled up!

It seems like the goal of the program is just to multiply some numbers. It does that with instructions like mul(X,Y), where X and Y are each 1-3 digit numbers. For instance, mul(44,46) multiplies 44 by 46 to get a result of 2024. Similarly, mul(123,4) would multiply 123 by 4.

However, because the program's memory has been corrupted, there are also many invalid characters that should be ignored, even if they look like part of a mul instruction. Sequences like mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.

Scan the corrupted memory for uncorrupted mul instructions. What do you get if you add up all of the results of the multiplications?

## How It Works
1. The program reads an input file containing both valid and corrupted instructions using Node's inbuilt [fs module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp).
2. It uses [regular expressions](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) to identify valid `mul(X,Y)` patterns
3. Creates three new variables to capture the destructured numbers from valid matches ("_" ignores the first value, mul; "a" extracts the first number and "b" extracts the second number)
4. Multiplies the numbers and maintains a running total
5. Outputs the final sum of all multiplications

## Usage
1. Ensure you have Node.js installed
2. Run the application:
   ```bash
   node index.js
   ```

3. The application will output the total of all valid mul instructions.

## Input Format
The input should be a text file (`input.txt`) containing a mix of valid and invalid multiplication instructions. Valid instructions must be in the format `mul(X,Y)` where X and Y are 1-3 digit numbers.

Example input:
```
mul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
```

## Output
The program outputs a single number representing the sum of all valid multiplication results found in the input.

## Technical Implementation
The solution uses:
- Regular expression `/mul\((\d+),(\d+)\)/g` to match valid instructions
- `matchAll()` for efficient regex matching with capture groups
- Destructuring to cleanly extract matched numbers
- Type checking to ensure valid number inputs
- Modular functions for better code organization

## Error Handling
- Validates number inputs before multiplication
- Ignores malformed multiplication instructions
- Throws TypeError for invalid number inputs

## Files
- `index.js` - Main program logic
- `input.txt` - Input file containing instructions
- `README.md` - Project documentation

## Requirements
- Node.js (any recent version)
- File system access for reading input.txt

## Advent of Code 2024

The challenge can be found [here](https://adventofcode.com/2024/day/3).
