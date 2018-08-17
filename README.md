# Beep Boop

#### Beep and boop generator for independent code review, 8.17.18

#### By Nikki Wong

## Description

This website allows users to input a number which will return either one of three preset messages or a range of numbers as well as enter their name to customize the messages.

### Specifications
* Inputs that are not numbers trigger an alert saying "Please enter a valid number."
  * Example Input: hello
  * Example Output: "Please enter a valid number."
* All numbers return a range of numbers from 0 to the chosen number
  * Example Input: 5
  * Example Output: 0, 1, 2, 3, 4, 5
* Numbers that contain an 8 return a range of numbers from the chosen number to 0
  * Example Input: 8
  * Example Output: 8, 7, 6, 5, 4, 3, 2, 1, 0
* Numbers that contain a 0 are replaced (all digits) with "Beep!"
  * Example Input: 0
  * Example Output: "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
  * Example Input: 10
  * Example Output: "Boop!"
* Numbers divisible by 7 are replaced with "Just what do you think you're doing, [Name]?"
  * Example Input: 14
  * Example Output: "Just what do you think you're doing, [Name]?"
* Numbers divisible by 3 are replaced with "I'm sorry, [Name]. I'm afraid I can't do that."
  * Example Input: 30
  * Example Output: "I'm sorry, [Name]. I'm afraid I can't do that."
* Numbers greater than 10,000 are replaced with "[Name], I really think I'm entitled to an answer to that question."
  * Example Input: 10010
  * Example Output: "[Name], I really think I'm entitled to an answer to that question."

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
