//business logic
var beep = "Beep!";
var boop = "Boop!";
var spaceOdysseyQuote = "I'm sorry, Dave. I'm afraid I can't do that."

var convertNumbers = function(inputtedNumber) {
  var displayedArray = [];
  var inputtedNumberString = inputtedNumber.toString();

  for (var i = 1; i <= inputtedNumber; i++) {
    if (inputtedNumberString.includes(0)) {
      var displayMessage = beep;
    } else {
      displayedArray.push(i);
      var displayMessage = ("0, ".concat(displayedArray.toString()).split(",").join(", "));
    }
  }


  return displayMessage;
};

// user interface logic
$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#userInput").val());

    var outputtedMessage = convertNumbers(inputtedNumber);
    console.log(outputtedMessage);
    $("#text-here").text(outputtedMessage);
    $("#result").show();
  });
});
