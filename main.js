const prompt = require('readline-sync');

function askQuestion(questionText, correctAnswer) 
{
    let tries = 0;
    
    while (tries < 3) 
    {
        let userInput = prompt.question(questionText);
        let userChoice = Number(userInput);
        
        if (userChoice ==correctAnswer)
        {
            console.log("Correct!\n");
            return true; 
        } else
        {
            tries++;
            if (tries < 3) 
            {
                console.log(`Incorrect. Please try again! (${3 - tries} attempts left)\n`);
            }
        }
    }
    
    console.log("Exceeded maximum attempts for this question.\n");
    return false; 
}

function questionCategoryMusic() 
{
    const q1 = "Who is the lead singer of Megadeth:\n1. Dave Mustaine\n2. Chuck Schuldiner\n3. James Hetfield\n4. Eddie Vedder\n\nPlease enter your answer (1,2,3,4): ";
    let q1Passed = askQuestion(q1, 1);
    
    
    if (!q1Passed) 
    {
        console.log("Game Over!");
        return;
    }

   
    const q2 = "Who is the lead singer/guitarist of Metallica:\n1. James Hetfield\n2. Layne Staley\n3. Lars Ulrich\n4. Jerry Cantrell\n\nPlease enter your answer (1,2,3,4): ";
    let q2Passed = askQuestion(q2, 1);
    
    if (q2Passed) 
    {
        console.log("Congratulations! You passed the music category!");
    } else 
    {
        console.log("Game Over!");
    }
}


questionCategoryMusic();
