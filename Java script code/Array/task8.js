//creat a function called highestScore that will receive 1D array and return the highest score
//1D array

function highestScore(scores) 
{
    let highest = scores[0];

    for(let i=0; i<scores.length; i++)
    {
        if(highest<scores[i])
        {
            highest=scores[i];
        }
    }
    return highest;
    
}
let scores = [10,88,72,58,67,34];
var topScore = highestScore(scores);
console.log(topScore);