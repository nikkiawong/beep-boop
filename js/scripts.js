var beep = "Beep!";
var boop = "Boop!";
var spaceOdysseyQuote = "I'm sorry, Dave. I'm afraid I can't do that.";
var errorMessage = "Please enter a valid number.";

var convertNumbers = function(inputtedNumber) {
  var displayedArray = [];
  var inputtedNumberString = inputtedNumber.toString();

  if (inputtedNumberString.includes(NaN)) {
    alert(errorMessage);
  }

  for (var i = 0; i <= inputtedNumber; i++) {
    if (inputtedNumber % 3 === 0 && inputtedNumber != 0) {
      var displayMessage = spaceOdysseyQuote;
    } else if (inputtedNumberString.includes(1)) {
      var displayMessage = boop;
    } else if (inputtedNumberString.includes(0)) {
      var displayMessage = beep;
    } else {
      displayedArray.push(i);
      var displayMessage = (displayedArray.toString()).split(",").join(", ");
    }

    return displayMessage;
  }
};

$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#userInput").val());

    var outputtedMessage = convertNumbers(inputtedNumber);
    $("#messageToUser").text(outputtedMessage);
    $("#result").show();
  });
});
