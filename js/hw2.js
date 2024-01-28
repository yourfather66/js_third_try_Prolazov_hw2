let fiveDigitNumber = +prompt(`Enter the five digit number`, `12345`);
let firstNumber = parseInt((fiveDigitNumber / 10000) % 10);
let secondNumber = parseInt((fiveDigitNumber / 1000) % 10);
let thirdNumber = parseInt((fiveDigitNumber / 100) % 10);
let fourthNumber = parseInt((fiveDigitNumber / 10) % 10);
let fifthNumber = parseInt(fiveDigitNumber % 10);

alert(
  `${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`
);
