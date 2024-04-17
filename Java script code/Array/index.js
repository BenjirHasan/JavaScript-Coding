// Array--> Array is an object; collection of variables

var names = new Array(5);  //CREAT AN ARRAY
var names = ["BENJIR", "HASAN", "TAHRINA", "AKTER", "SETU"]; //ARRAY ELEMENTS
console.log(names[2]); //PRINT INDEVIDUAL ARRAY
console.log(names[0]);
console.log(names);  //PRINT TOTAL ARRAY ELEMENTS
console.log(names.length);  //PRINT ARRAY LENGTH

//ARRAY LIBRARY FUNCTION

//PUSH FUNCTION
var names = ["BENJIR", "HASAN", "TAHRINA", "AKTER", "SETU"];
console.log(names.length);
names.push("ARHAM");  //push functiomn(increase array)
names.push("Abrar");
names.push("jessy");
console.log(names);
console.log(names.length);

//POP FUNCTION
names.pop();  //pop function (decrease array from the last)
console.log(names);

//CONCATANETION FUNCTION

var city = ["RAJSHAHI", "DHAKA"];
var town = ["NAWDAPARA", "MOTIJHIL"];

var country = city.concat(town);
console.log(country);

//USE LOOP IN AN ARRAY

var num = [10,20,30,40,50,60];

for(var i=0; i<=4; i++)  //for loop in array
{
    console.log(num[i]);
}


//SUM OF ARRAY

var num = [10,20,30,40,50];
var sum = 0;

for(var i=0; i<=4; i++)  //for loop in array
{
    console.log(num[i]);
    sum = sum + num[i];
}
console.log(sum);


// USER INPUT IN ARRAY

var num = new Array();

for(i=0; i<5; i++)
{
    num[i] = parseInt(prompt("Enter number for array"));
}

var sum = 0;

for(var i=0; i<=4; i++)  //for loop in array
{
    console.log(num[i]);
    sum = sum + num[i];
}
console.log("the sum is : " + sum);

//Array Methods: push(), pop(),concat(),shift(),unshift(),splice(pos,noe,ele1,ele2,... sort(), reverse())

//shift array

var names = ["BENJIR", "TAHRINA", "JESSY"];
console.log(names);

names.shift();  //shift()--> remove array from the first(opposite of pop)
console.log(names);

names.unshift("ADRITA"); //unshift()--> add array in the first(opposite of push)
console.log(names);

//splice method--> element can add and remove

//adding elements with splice
var names = ["BENJIR", "HASAN", "TAHRINA", "AKTER", "SETU"]; //ARRAY ELEMENTS
console.log(names); //PRINT INDEVIDUAL ARRAY

names.splice(2,0,"karim","rahim");   //splice("starting index position"; "how much element want to be removed"; "what to add" )
console.log(names);

//removing elements with splice

names.splice(2,1);   //splice("starting index position"; "how much element want to be removed"; "what to add" )
console.log(names);

//slice method

var newArray = names.slice(1);
console.log(newArray);
console.log(names);

//sorthing/reverse array alphabetically

var sortedName = names.sort();
console.log(sortedName);  //sorting assending order

var sortedName = names.sort();
names.reverse();
console.log(sortedName);

//sorthing/reverse array numerically

var num = [20,10,40,5,6];
num.sort(function(a,b)
{
     return a-b;
});
console.log(num);

//one dimention array

var names = new Array(5);
var names = ["BENJIR", "HASAN", "TAHRINA", "AKTER", "SETU"]; //ARRAY ELEMENTS
//console.log(names[0]); //PRINT INDEVIDUAL ARRAY
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//console.log(names[4]);

for(var x = 0; x<5; x++)
{
    console.log(names[x]);
}

//two dimentional array

var playersInfo = new Array(4);
var playersInfo =[["BENJIR",90], ["HASAN,88"], ["TAHRINA",85], ["AKTER",80]];
// console.log(names[0] [0]); //PRINT INDEVIDUAL ARRAY
// console.log(names[0] [1]);
// console.log(names[1] [0]);
// console.log(names[1] [1]);
// console.log(names[2] [0]); //PRINT INDEVIDUAL ARRAY
// console.log(names[2] [1]);
// console.log(names[3] [0]);
// console.log(names[3] [1]);

for(var x = 0; x<2; x++)
{
    for( var y = 0; x<2; y++)
    {
        console.log(playersInfo[x] [y]);
    }
    
}