let userscore=0;
let user=document.querySelector(".userscore");
let comp=document.querySelector(".computerscore");
let compscore=0;
const choices=document.querySelectorAll(".choice");
let message=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msgcontainer");

const showwinner=(userwin)=>{
    if(userwin==true){
        console.log(++userscore);
        user.innerText=userscore;
        message.innerText="You win!!";
        message.style.backgroundColor="green";
    }else if(userwin==false){
        console.log(++compscore);
        comp.innerText=compscore;
        message.innerText="You lose!!";
        message.style.backgroundColor="red";
    }

}
const generatecompchoice=()=>{
    let options=["stone","paper","scissor"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
}
const playgame=(userchoice)=>{
    console.log(userchoice)
    //Generate comp choice
    const computerchoice=generatecompchoice();
    console.log(computerchoice);
    let userwin=true;
    if(userchoice==="stone"&&computerchoice==="scissor"){
        console.log("user")
        userwin=true;
    }else if(userchoice==="stone"&&computerchoice==="paper"){
        console.log("comp")
        userwin=false;
    }
    else if(userchoice==="paper"&&computerchoice==="stone"){
        console.log("user")
        userwin=true;
    }
    else if(userchoice==="paper"&&computerchoice==="scissor"){
        console.log("comp");
        userwin=false;
    }
    else if(userchoice==="scissor"&&computerchoice==="stone"){
        console.log("comp");
        userwin=false;
    }
    else if(userchoice==="scissor"&&computerchoice==="paper"){
        console.log("user")
        userwin=true;
    }else {
        console.log("draw");
        userwin=null;
        message.innerText="It's a draw!!Play again";
        message.style.backgroundColor="#c361d7"
    }
    showwinner(userwin);
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(userchoice);
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})