console.log("Inside Triangle Quiz");
const submit= document.querySelector(".submit");
const quizformdata=document.querySelector(".quiz-form");
const correctAnswers=['yes','no','yes','yes','yes'];
function triangleQuiz()
{
    var score=0,index=0;
    var formResults = new FormData(quizformdata);
    for(let value of  formResults.values())
    {
    if(value==correctAnswers[index])
    {
        score++;
    }
    }
    console.log("Score value "+score);
    document.querySelector(".scoreboard").innerText=score;
}
submit.addEventListener("click",triangleQuiz);