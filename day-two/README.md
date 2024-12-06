# Number Pattern Validator

## Description
This application validates number sequences based on two specific criteria:
1. Pattern Validation: Numbers must consistently either increase or decrease throughout the sequence
2. Difference Validation: The absolute difference between consecutive numbers must be between 1 and 3 (inclusive)

## The Challenge
Each line in the input represents a reactor safety report containing a sequence of space-separated numbers (levels). A report is considered safe if:

1. The sequence is either consistently increasing or decreasing
2. The difference between adjacent numbers must be between 1 and 3

If a report is unsafe, you can attempt to make it safe by removing exactly one number. If removing one number makes the sequence valid, the report is considered salvageable and should be counted as safe.

## How It Works
The application processes lists of numbers (rows) and counts how many rows satisfy both validation criteria. If a sequence is invalid, the application attempts to make it valid by removing one number. If removing one number makes the sequence valid, the report is considered salvageable and should be counted as safe.

### Validation Rules
- **Pattern Rule**: If the sequence starts increasing, all subsequent numbers must increase. If it starts decreasing, all subsequent numbers must decrease.
- **Difference Rule**: The absolute difference between any two consecutive numbers must be at least 1 and at most 3.

### Example
Valid sequence: `[1, 3, 4, 5, 8]`
- Pattern: Consistently increasing
- Differences: 2, 1, 1, 3 (all between 1 and 3)

Invalid sequence: `[1, 3, 2, 5]`
- Pattern: Not consistent (increases then decreases)

## Usage
1. Ensure you have Node.js installed
2. Run the application:
   ```bash
   node index.js
   ```

3. The application will output the total number of valid rows.

## Input Format
The input should be provided in `numbers.js` as an array of number arrays. For example:

    const numberLists = [
    [1, 3, 4, 5, 8],
    [48, 51, 54, 55, 55],
    // ... more arrays
    ]


## Output
The program outputs the total count of valid number sequences that satisfy both criteria.

## Technical Implementation
The validation is performed using one main function `isRowValid` that checks both criteria.

To do this, it:
- Compares the first and second numbers to determine if the pattern is increasing or decreasing
- Iterates through the rest of the numbers to check if the pattern is consistent
- Checks if the absolute difference between consecutive numbers is between 1 and 3

If any of the criteria are not met, the function returns `false`.

## Files
- `index.js`: Main application logic and validation functions
- `numbers.js`: Input data containing the number sequences to validate

## Requirements

- Node.js

## Advent of Code 2024

The challenge can be found [here](https://adventofcode.com/2024/day/2).
