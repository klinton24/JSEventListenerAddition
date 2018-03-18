//variables
var numberOne = document.getElementById("numberOne");
var numberTwo = document.getElementById("numberTwo");
var sum = document.getElementById("sum");

numberOne.addEventListener("input", addNumbers);
numberTwo.addEventListener("input", addNumbers);


function addNumbers() {
    //parse float changes it to a number
    // Or zero prevents NaN error
    var first = parseFloat(numberOne.value) || 0;
    var second = parseFloat(numberTwo.value) || 0;
    sum.innerHTML = "your sum is: " + (first + second);
}