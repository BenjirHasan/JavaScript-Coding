//FAHRENHEIT TO CELSIUS CONVERSION

var fahrenheit = parseFloat(prompt("Enter Fahrenheit = "));

var celsius = (fahrenheit - 32) * (5/9);


document.write("The Celciuos temperature is : " + celsius.toFixed(2) + "<br/>");

//CELSIUS TO FAHRENHEIT CONVERSION

var celsius = parseFloat(prompt("Enter Celsius = "));

var fahrenheit = (celsius*(9/5)) + 32;


document.write("The Fahrenheit temperature is : " + fahrenheit.toFixed(2));
