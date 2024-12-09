# Advent of Code 2024 - Day 1

This project is a simple JavaScript application that calculates the running total of absolute differences between two sorted lists of numbers.

## The Challenge

Throughout the Chief's office, the historically significant locations are listed not by name but by a unique number called the location ID. To make sure they don't miss anything, The Historians split into two groups, each searching the office and trying to create their own complete list of location IDs.

There's just one problem: by holding the two lists up side by side (your puzzle input), it quickly becomes clear that the lists aren't very similar.

Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are. Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.

Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances.

## Description

The application takes two lists of numbers, sorts them, and then calculates the absolute difference between corresponding elements in the sorted lists. It maintains a running total of these differences and outputs the final total.

## Usage

1. Ensure you have Node.js installed on your machine.
2. Run the application using the following command:

   ```bash
   node index.js
   ```

3. The application will output the running total of absolute differences between the two lists.

## How It Works

- The lists `list1` and `list2` are sorted in ascending order.
- The application iterates over the sorted lists, calculates the absolute difference between each pair of corresponding elements, and adds this difference to a running total.
- The final running total is logged to the console.

## Requirements

- Node.js

## Advent of Code 2024

The challenge can be found [here](https://adventofcode.com/2024/day/1).