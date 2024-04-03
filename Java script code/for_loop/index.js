
for(var i=1; i<=10; i=i++)
{
    document.write("<h1> BANGLADESH </h1>");

}
document.write("<h1> OKK BYE </h1>");


//TO DO SUM
var sum = 0;
for(var x=1; x<=5; x++)
{
    sum = sum + x;
}
document.write(sum + "</br>");

//USER INPUT
var x = parseInt(prompt("Enter the first number : "));
var y = parseInt(prompt("Enter the last number : "));
var sum = 0;

for(var i=x; i<=y; i++)
{
    sum = sum + i;
}
document.write(sum);

//WHILE LOOP
var i=1; 
var sum = 0;
while(i<=10)
{
    sum = sum + i;
    i++
}
document.write(sum);

//DO-WHILE LOOP

var i = 1;
do
{
    document.write(" " + i);
    i++;
}
while(i<=10)
