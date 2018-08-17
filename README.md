# Beep Boop

#### Beep and boop generator for independent code review, 8.17.18

#### By Nikki Wong

## Description

This website allows users to input a number which will return either one of three preset messages or a range of numbers.

### Specifications
* All other numbers return a range of numbers from 0 to the chosen number
  * Example Input: 5
  * Example Output: 0, 1, 2, 3, 4, 5
* Numbers that contain a 0 are replaced (all digits) with "Beep!"
  * Example Input: 0
  * Example Output: "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
  * Example Input: 10
  * Example Output: "Boop!"
* Numbers divisible by 7 are replaced with "Weeoop!"
  * Example Input: 14
  * Example Output: "Weeoop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 30
  * Example Output: "I'm sorry, Dave. I'm afraid I can't do that."

## Setup

* Clone this repository
* Open a simple HTTP server in the top level of the cloned directory
* Use git functions to add, commit, and push to the master branch in remote repository

## Technologies Used

* HTML
* CSS
* Git
* Bootstrap
* JavaScript
* jQuery

## Legal
Copyright (c) 2018 Nikki Wong
