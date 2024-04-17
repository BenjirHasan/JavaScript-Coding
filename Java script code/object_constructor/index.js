//here "student1" is a object where we can put multiple variable for the object

var student1 = {
    name: "Benjir HASAN",
    age : 27,
    GPA : 5.00,
    language : ["Bangla", "English", "Urdu", "Hindi"]
}
console.log(student1.name); //to print an object's variable
console.log(student1);  //to print  objects all variables

// adding constructor for multiple objects

function Student(name, age, GPA, language)
{
    this.name = name;
    this.age = age;
    this.GPA = GPA;
    this.language = language;

    this.print = function()  // adding a function for printing object's variables
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.GPA);
        console.log(this.language);
    }
}
var student1 = new Student("Benjir Hasan", 27, 5.00, ["Bangla", "English", "Urdu", "Hindi"]);
var student2 = new Student("Tahrina Akter", 21, 4.58, ["Bangla", "English", "Hindi"]);
var student3 = new Student("Mridul Kumar", 25, 5.00, ["Bangla", "English", "Tamil", "Hindi"]);

student1.print();
student2.print();

//Math object

var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));

var maximum = Math.max(num1,num2);
console.log(maximum);

//in web console panel
var root = Math.sqrt(64);
console.log(root);

var abs = Math.abs(-8);
console.log(abs);

var sin = Math.sin(2);
console.log(sin);

var cos = Math.cos(2);
console.log(cos);

var tan = Math.tan(2);
console.log(tan);

var pow = Math.pow(2,4);
console.log(pow);

var floor = Math.floor(3.88);
console.log(floor);

var ceil = Math.ceil(4.88);
console.log(ceil);

var round = Math.round(3.2);
console.log(round);

var random = Math.random();
console.log(random);

var random1 = Math.floor(Math.random());
console.log(random1);

var random2 = Math.floor(Math.random()*6 + 2);
console.log(random2);
