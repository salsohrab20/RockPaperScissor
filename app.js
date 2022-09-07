var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice()
{
    const choices=['r','s','p'];
    const randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
}

function convertToWord(letter)
{
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    if(letter=="s") return "Scissor";

}

function wins(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserword="user".fontsize(3);
    const smallCompword="computer".fontsize(3);
    result_div.innerHTML=`${convertToWord(userChoice)}${smallUserword} beats ${convertToWord(computerChoice)}${smallCompword} You Win!`;
}

function loses(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserword="user".fontsize(3);
    const smallCompword="computer".fontsize(3);
    result_div.innerHTML=`${convertToWord(computerChoice)}${smallCompword} beats ${convertToWord(userChoice)}${smallUserword} You Lose!`;
}

function draw(userChoice,computerChoice){

    const smallUserword="user".fontsize(3);
    const smallCompword="computer".fontsize(3);
    result_div.innerHTML=`${convertToWord(computerChoice)}${smallCompword} equals ${convertToWord(userChoice)}${smallUserword} It's a draw!`;
}

function game(userChoice)
{
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}



function main(){
    rock_div.addEventListener('click',function(){
        game("r");
        //console.log("You cliked on Rock");
    });

    scissor_div.addEventListener('click',function(){
        game("s");
        //console.log("You cliked on Scissor");
    })

    paper_div.addEventListener('click',function(){
        game("p");
        //console.log("You cliked on Paper");
    })
}

main();

