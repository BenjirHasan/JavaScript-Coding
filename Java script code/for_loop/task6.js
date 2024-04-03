//task with for loop

var sum = 0;
for(var x=1; x<=100; x++)
{
    if (x%3==0 && x%5==0)
    {
        sum = sum + x;
    }
    
}
document.write(sum + "</br>");


// var x = 1;
// var sum = 0;

// while(x <= 20)
// {
//     if(x % 3 == 0 && x % 5 == 0)
//     {
//         sum = sum + x;
//     }
//     document.write(sum);
// }

//task with while loop
var x = 1;
var sum = 0;

while(x <= 20)
{
    if(x % 3 == 0 && x % 5 == 0)
    {
        sum = sum + x;
       
    }
     x++;
    
}
document.write(sum);
