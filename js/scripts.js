//business logic
var beep = "Beep!";
var boop = "Boop!";
var spaceOdysseyQuote = "I'm sorry, Dave. I'm afraid I can't do that."

var convertNumbers = function(inputtedNumber) {
  var displayedArray = [];

  for (var i = 1; i <= inputtedNumber; i++) {
    if (inputtedNumber === 333) {
      displayedArray.push(i);
    }
  }

  return displayedArray.toString();
};

// user interface logic
$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#userInput").val());

    var outputtedMessage = convertNumbers(inputtedNumber);
    console.log(outputtedMessage);
    // $("#text-here").text(outputtedMessage);
    // $("#result").show();
  });
});
