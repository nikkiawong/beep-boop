var beep = "Beep!";
var boop = "Boop!";
var errorMessage = "Please enter a valid number.";
var inputtedName;
var displayedArray = [];

var convertNumbers = function(inputtedNumber) {
  // var zero = displayedArray.indexOf(0);
  var inputtedNumberString = inputtedNumber.toString();

  if (inputtedNumberString.includes(NaN)) {
    alert(errorMessage);
  }

  for (var i = 0; i <= inputtedNumber; i++) {
    if (inputtedNumber > 10000) {
      var displayMessage = inputtedName + ", I really think I'm entitled to an answer to that question."
    } else if (inputtedNumber % 3 === 0 && inputtedNumber != 0) {
      var displayMessage = "I'm sorry, " + inputtedName + ". I'm afraid I can't do that.";
    } else if (inputtedNumber % 7 === 0 && inputtedNumber != 0) {
      var displayMessage = "Just what do you think you're doing, " + inputtedName + "?";
    } else {
      displayedArray.push(i);
      console.log(displayedArray);
      var displayMessage = displayedArray;
    }
  }
//
//   if (index !== -1) {
//     items[index] = 1010;
// }
  return displayMessage;
};

// var replaceNumbers = function(displayedArray) {
//   var indexOfZero = displayedArray.indexOf(0);
//   for (var i = 0; i <= displayedArray.length; i++) {
//     var result = displayedArray.push("Beep!");
//     }
//
//   console.log(result);
//   return result;
// };

$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    inputtedName = $("input#nameInput").val();
    var inputtedNumber = parseInt($("input#userInput").val());

    var outputtedMessage = convertNumbers(inputtedNumber);
    // replaceNumbers(displayedArray);
    $("#messageToUser").text(outputtedMessage);
    $("#result").show();
  });

  $("#clickable").click(function() {
    $("#halExplanation").slideToggle();
  });
});
