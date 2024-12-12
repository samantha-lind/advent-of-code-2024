# Number Order Validator

## Description
A Node.js application that validates sequences of numbers based on ordering rules. The program checks if numbers appear in the correct order according to given rules, then finds and sums the middle numbers of valid sequences.

## The Challenge
You've been given two sets of data:
1. Rules that specify which numbers must appear before others (e.g., "4|1" means 4 must appear before 1)
2. Sequences of numbers to validate

Your task is to:
- Find all sequences that satisfy every rule
- Identify the middle number in each valid sequence
- Sum all these middle numbers

For any sequence that doesn't satisfy all rules, you should readjust the sequence to satisfy the rules (if possible). 

All corrected sequences that are now valid should also have the middle number identified and summed.

## How It Works
1. The program reads input using Node's inbuilt [fs module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
2. Processes the input into two parts:
   - Rules: Array of number pairs `[4,1]` meaning first number must appear before second
   - Pages: Arrays of number sequences to validate
3. For each sequence:
   - Checks if all rules are satisfied using `indexOf` to compare positions
   - Collects sequences that pass all rules
4. Finds the middle number of each valid sequence and sums them

## Usage
1. Ensure you have Node.js installed
2. Run the application:
   ```bash
   node index.js
   ```

3. The application will output the sum of middle numbers from valid sequences.

## Input Format
The input should be a text file (`input.txt`) containing two sections separated by a blank line:
1. Rules (one per line, numbers separated by |)
2. Number sequences (one per line, numbers separated by commas)

Example input:
```
1|3

4,1,5,3,2
1,4,3,5,2
4,5,1,3,2
```

## Output
The program outputs a single number representing the sum of middle numbers from all valid sequences.

## Technical Implementation
The solution uses:
- Array methods (`map`, `indexOf`, `every`) for data processing
- Number parsing for string-to-number conversion
- Position comparison for rule validation
- Array indexing for finding middle numbers

## Error Handling
- Validates number formats
- Handles missing or invalid rules
- Ensures consistent data types (converts strings to numbers)

## Files
- `index.js` - Main program logic
- `input.txt` - Input data file

## Requirements
- Node.js (any recent version)
- File system access for reading input.txt

## Advent of Code 2024

The challenge can be found [here](https://adventofcode.com/2024/day/5).