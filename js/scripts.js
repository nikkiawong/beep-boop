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
    } else if (inputtedNumber === 0) {
      var displayMessage = beep;
    } else if (inputtedNumber === 1) {
      var displayMessage = boop;
    } else {
      displayedArray.push(i);
      var displayedArrayString = displayedArray.toString();

      if (displayedArrayString.includes(0)) {
        displayedArray.splice(displayedArray.indexOf(0), 1, beep);
      } else if (displayedArrayString.includes(1)) {
        displayedArray.splice(displayedArray.indexOf(1), 1, boop);
      }

      var displayMessage = displayedArrayString.split(",").join(", ");
    }
  }

  return displayMessage;
};

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
