// function getHistory() {
//   return document.querySelector(".history-output").innerText;
// }
// function printHistory(num) {
//   document.querySelector(".history-output").innerText = num;
// }
// function getOutput() {
//   return document.querySelector(".output-result").innerText;
// }
// function printOutput(num) {
//   if (num == "") {
//     document.querySelector(".output-result").innerText = num;
//   } else {
//     document.querySelector(".output-result").innerText = getFormattedNumber(num);
//   }
// }
// function getFormattedNumber(num) {
//   if (num == "-") {
//     return "";
//   }
//   var n = Number(num);
//   var value = n.toLocaleString("en");
//   return value;
// }
// function reverseNumberFormat(num) {
//   return Number(num.replace(/,/g, ""));
// }
var operator = document.querySelectorAll(".operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      // it's mean it is blanck string
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        //if output has a value
        output = output.slice(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
// var number = document.querySelectorAll(".number");
// for (var i = 0; i < number.length; i++) {
//   number[i].addEventListener("click", function () {
//     var output = reverseNumberFormat(getOutput());
//     if (output != NaN) {
//       //if output is a number
//       output = output + this.id;
//       printOutput(output);
//     }
//   });
// }
function getHistory() {
  return document.querySelector(".history-output").innerText;
}
function printHistory(num) {
  document.querySelector(".history-output").innerText = num;
}
function getOutput() {
  return document.querySelector(".output-result").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.querySelector(".output-result").innerText = num;
  } else {
    document.querySelector(".output-result").innerText =
    getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
// var operator = document.querySelectorAll(".operator");
// for (let i = 0; i < operator.length; i++) {
//   operator[i].addEventListener("click", function () {
//     if (this.id == "clear") {
//       printHistory("");
//       printOutput("");
//     } else if (this.id == "backspace") {
//       var output = reverseNumberFormat(getOutput()).toString()
//       if (output) {

//       }
//     }
//   });
// }
var number = document.querySelectorAll(".number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      //if output is a number
      output += this.id;
      printOutput(output);
    }
  });
}
