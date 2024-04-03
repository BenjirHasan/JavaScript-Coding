//IIFEs (Immediately Invokeable Function Expression)

(function display(message) 
{
    document.write(message);
})("hi");
document.write("</br>");

//FUNCTION EXPRESSION

var display2 = function displayMassege(msg)
{
    document.write(msg);
}
display2("hi. i am massege");