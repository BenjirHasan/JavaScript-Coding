//creat a function called highestScore that will receive 1D array and return the highest score
//1D array

function highestRunScorer(scores) 
{
    var highest = scores[0] [0];
    var highest = scores[0] [1];

    for(let i=0; i<scores.length; i++)
    {
        if(highest<scores[i][1])
        {
            highest=scores[i][1];
            highest = scores[i][0];

        }

    }
    return highest;
    
}
var scores = 
[
    ["BENJIR",10],
    ["HASAN",88],
    ["TAHRINA",72],
    ["AKTER",58],
    ["ESRAT",67],
    ["JESSY",34]
];

var name = highestRunScorer(scores);
console.log(name);