//relational operation: >,<,<=,>=,==,===,!=,!==
//logical operation: &&,||,!

//compare both variable and define result

var num1 = 50;
var num2 = 30;

document.write((num1>num2) + "<br/>"); 

//compare both side values and define result

var num1 = 20;
var num2 = 20;

document.write((num1==num2) + "<br/>");

//compare both side values as well as data type and define result

var num1 = 20;
var num2 = 20;

document.write((num1===num2) + "<br/>"); 

// compare variables with eachothers and define value

var num1 = 50;
var num2 = 30;
var num3 = 10;

document.write((num1>num2 && num3>num2) + "<br/>"); //it returns true only if both condition is true, otherwise print false

var num1 = 50;
var num2 = 30;
var num3 = 10;

document.write((num1>num2 || num3>num2) + "<br/>"); //it returns true if any one condition is true, otherwise print false

// print the opposite value of the result

var num1 = 50;
var num2 = 30;

document.write(!(num1>num2)); //it will check the condition first, then print the opposite result of the actual result.