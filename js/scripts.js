var beep = "Beep!";
var boop = "Boop!";
var errorMessage = "Please enter a valid number.";
var inputtedName;

var convertNumbers = function(inputtedNumber) {
  var displayedArray = [];
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
    } else if (inputtedNumberString.includes(1)) {
      var displayMessage = boop;
    } else if (inputtedNumberString.includes(0)) {
      var displayMessage = beep;
    } else if (inputtedNumberString.includes(8)) {
      displayedArray.push(i);
      var displayMessage = (displayedArray.toString()).split(",").reverse().join(", ");
    } else {
      displayedArray.push(i);
      var displayMessage = (displayedArray.toString()).split(",").join(", ");
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
    $("#messageToUser").text(outputtedMessage);
    $("#result").show();
  });

  $("#clickable").click(function() {
    $("#halExplanation").slideToggle();
  });
});
