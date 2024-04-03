// number is whether negative or positive

var num = Number(prompt("Enter a number"));
if(num>0)
{
    document.write("possitive");
}
else
{
    document.write("negative");
}


var result = num > 0 ? "possitive" : "negative"  //way using ternary condition
document.write(result);

var num = Number(prompt("Enter a number"));  //way using ternary condition
var result = num > 0 ? "possitive" : num < 0 ? "negative" : "zero"
document.write(result);