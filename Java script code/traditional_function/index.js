//pre-define function

function sqaure() //creating a function
{
    var num = 5;
    var result = num*num;
    
    document.write("Result = " + result + "</br>");
}
sqaure();  //calling a function

//post-define function

function sqaure(num) //creating a function with parameter
{
    var result = num*num;
    
    document.write("Result = " + result + "</br>");
}
sqaure(5);  //calling a function with parameter
sqaure(6);
sqaure(3);
sqaure(8);

//multiply variables with functions

function sqaure(num1, num2) //creating a function with parameter
{
    var result = num1 * num2;
    
    document.write("Result = " + result + "</br>");
}
sqaure(5, 6);  //calling a function with parameter


//return value to the function

function sqaure(num1, num2) //creating a function with parameter
{
    var result = num1 * num2;
    return result;
    
    ("Result = " + result + "</br>");
}
document.write(sqaure(5, 6));  //calling a function with parameter