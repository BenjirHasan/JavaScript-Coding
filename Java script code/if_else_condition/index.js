//control statements are  2 types.
//1. conditional control: if,else,else if,switch
//2. loop control: for, while, do while


//LETTER GRADE
var marks =prompt("Enter your marks: ");

if(marks>100)
document.write("INVALID NUMBER");

else if(marks>=90 && marks<=100)
document.write("A+");

else if(marks>=85 && marks<=89)
document.write("A");

else if(marks>=80 && marks<=84)
document.write("B+");

else if(marks>=75 && marks<=79)
document.write("B");

else
document.write("Fail");

//VOWEL & CONSONANT
var letter = prompt("Enter your letter : ");
letter = letter.toLowerCase();


if(letter== "a" ||letter== "e" ||letter== "i" ||letter== "o" ||letter== "u")
document.write("This letter is under Vowel");

else
document.write("This letter is under Consonant");

//SWITCH CONDITION

var num = prompt("Enter your number: ");

switch(num)
{
    case "0":
        document.write("zero");

    case "1":
        document.write("one");

    case "2":
        document.write("two");
    
    case "3":
        document.write("three");
            
    case "4":
        document.write("four");
        
    case "5":
        document.write("five");
        
    case "6":
        document.write("six");
            
    case "7":
        document.write("seven");
    
    case "8":
        document.write("eight");
            
    case "9":
        document.write("nine");
                
    case "10":
        document.write("invalid input");
}