let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice")
const message=document.querySelector("#message")

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#computer-score")
const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randomIdx=Math.floor(Math.random()*3)
    return options[randomIdx];
}
const gameDraw=()=>{
    message.innerText="Game was draw"
    message.style.backgroundColor="blue";
    
}

const showWinner=(userWin ,userChoice,compChoice)=>{
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore
        message.innerText=`you win! your ${userChoice} Beats ${compChoice}`
        message.style.backgroundColor="red";
        
    }else{
        computerScore++;
        compScorePara.innerText=computerScore;
        message.innerText=`you lost ${userChoice} Beats yours ${compChoice}`
        message.style.backgroundColor="green";
        
    }
}

const playGame=(userChoice)=>{
    console.log("user choice is ",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice is ",compChoice);
    
    if (userChoice===compChoice) {
        gameDraw();
    }else{
        let userWin=true;
        if (userChoice==="rock") {
            //scissors ,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock  ,scissors
            userWin=compChoice==="scissors"? false:true;
        }else{
            //rock , paper
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id')
        playGame(userChoice)
    })
    
})