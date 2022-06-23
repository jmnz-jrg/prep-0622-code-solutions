function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}
var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('productDividedByFive:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

function getCirculeCircumference(radius) {
  var result = (2 * Math.PI) * radius;
  return result;
}

var circumference = getCirculeCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, LastName) {
  var result = firstName + ' ' + LastName;
  return result;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName:', fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}
var cubed = cube(5);
console.log('cubed:', cubed);
