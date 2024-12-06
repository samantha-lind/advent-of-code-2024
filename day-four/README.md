# Word Search Solver

## Description
A Node.js application that processes a grid of letters to find specific words ('XMAS' and 'SAMX'). The program searches horizontally, vertically, and diagonally in both directions, counting all valid occurrences of these words.

## The Challenge
You've been given a grid of letters, and your task is to find all occurrences of the words 'XMAS' and 'SAMX'. These words can appear:
- Horizontally (left to right)
- Vertically (top to bottom)
- Diagonally (top-left to bottom-right)
- Diagonally (top-right to bottom-left)

The same letter can be used in multiple words, and words can overlap. The search is case-insensitive.

## How It Works
1. The program reads an input grid using Node's inbuilt [fs module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
2. It processes the input into a 2D array of characters
3. Uses [regular expressions](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) to find matching patterns
4. Checks in all four directions:
   - Horizontal rows
   - Vertical columns
   - Diagonal (left to right)
   - Diagonal (right to left)
5. Returns the total count of all matches found

## Usage
1. Ensure you have Node.js installed
2. Run the application:
   ```bash
   node index.js
   ```

3. The application will output the total number of matches found.

## Input Format
The input should be a text file (`input.txt`) containing a grid of letters. Each line should have the same length.

Example input:
```
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
```

## Output
The program outputs a single number representing the total count of 'XMAS' and 'SAMX' occurrences found in all directions.

## Technical Implementation
The solution uses:
- Regular expression with lookahead `(?=(XMAS|SAMX))` for overlapping matches
- Array manipulation for directional searches
- String concatenation for pattern matching
- Modular functions for better code organization

## Error Handling
- Validates input string length
- Checks for undefined array indices
- Handles empty or invalid input
- Ensures consistent row lengths

## Files
- `index.js` - Main program logic
- `input.txt` - Input grid of letters

## Requirements
- Node.js (any recent version)
- File system access for reading input.txt

## Advent of Code 2024

The challenge can be found [here](https://adventofcode.com/2024/day/4).