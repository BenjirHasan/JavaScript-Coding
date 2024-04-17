// criteria:
// 1. guess number between 1-10
// 2. number will generate as random number 
// 3. if guess number and random number match, display won otherwise lost 
// 4. run the game for 5 times 
// 5. display result of the game 

var winNum = 0;  //variable for win 
var lostNum = 0; // variable for lost

for (var i=1; i<=5; i++)  //run 5 times 
{
    var guessNum = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNum = Math.floor(Math.random()*5)+1;  //create an object for random number

    if (guessNum == randomNum)  //guessing condition
    {
       console.log("Congratulation. You Won the Game");
       winNum++;
    }
    else 
    {
       console.log("OOPS. You have Lost. Random Number was : " + randomNum);
       lostNum++;
    }
}

document.write("Total number of win = " + winNum + "<br>");
document.write("Total number of lost = " + lostNum + "<br>");

