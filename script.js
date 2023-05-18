turn=0;

const gameBoardModule= (()=>{
    let gameBoard=["", "", "", "", "", "", "", "", ""];
    return{gameBoard};
})();

let gameBoard=gameBoardModule.gameBoard;

function render () {
    for (let i=1; i<=gameBoard.length; i++) {
        let marker=gameBoard[i-1];
        let square=document.getElementById(`${i}`);
        square.innerHTML=`${marker}`;
    }

}

function checkWinnerP1 () {
    if (gameBoard[0]=="X" && gameBoard[1]=="X" && gameBoard[2]=="X") {
        return true;
    }
    if (gameBoard[3]=="X" && gameBoard[4]=="X" && gameBoard[5]=="X") {
        return true;
    }
    if (gameBoard[6]=="X" && gameBoard[7]=="X" && gameBoard[8]=="X") {
        return true;
    }
    if (gameBoard[0]=="X" && gameBoard[3]=="X" && gameBoard[6]=="X") {
        return true;
    }
    if (gameBoard[1]=="X" && gameBoard[4]=="X" && gameBoard[7]=="X") {
        return true;
    }
    if (gameBoard[2]=="X" && gameBoard[5]=="X" && gameBoard[8]=="X") {
        return true;
    }
    if (gameBoard[0]=="X" && gameBoard[4]=="X" && gameBoard[8]=="X") {
        return true;
    }
    if (gameBoard[2]=="X" && gameBoard[4]=="X" && gameBoard[6]=="X") {
        return true;
    }
    else {
        return false;
    }
    
}

function checkWinnerP2 () {
    if (gameBoard[0]=="O" && gameBoard[1]=="O" && gameBoard[2]=="O") {
        return true;
    }
    if (gameBoard[3]=="O" && gameBoard[4]=="O" && gameBoard[5]=="O") {
        return true;
    }
    if (gameBoard[6]=="O" && gameBoard[7]=="O" && gameBoard[8]=="O") {
        return true;
    }
    if (gameBoard[0]=="O" && gameBoard[3]=="O" && gameBoard[6]=="O") {
        return true;
    }
    if (gameBoard[1]=="O" && gameBoard[4]=="O" && gameBoard[7]=="O") {
        return true;
    }
    if (gameBoard[2]=="O" && gameBoard[5]=="O" && gameBoard[8]=="O") {
        return true;
    }
    if (gameBoard[0]=="O" && gameBoard[4]=="O" && gameBoard[8]=="O") {
        return true;
    }
    if (gameBoard[2]=="O" && gameBoard[4]=="O" && gameBoard[6]=="O") {
        return true;
    }
    else {
        return false;
    }
    
}

function handleClick (event) {
    if (turn%2==0) {
        if (gameBoard[event.target.id-1]=="") {
            gameBoard[event.target.id-1]="X";
            turn+=1;
            if (checkWinnerP1()==true) {
                console.log("hola");
                let player1=document.querySelector("#play1").value;
                document.querySelector(".message").innerHTML=`${player1} has won!`;
                render();
                squares.forEach(square=> {square.removeEventListener("click", handleClick)})
            }
            else {
                if (turn==9) {
                    document.querySelector(".message").innerHTML=`It's a tie!`;
                    render();
                }
                else {
                    let player2=document.querySelector("#play2").value;
                    document.querySelector(".message").innerHTML=`It's ${player2}'s turn!`;
                    render();
                }
                
            }
        }
        
    }
    else {
        if (gameBoard[event.target.id-1]=="") {
            gameBoard[event.target.id-1]="O";
            turn+=1;
            if (checkWinnerP2()==true) {
                let player2=document.querySelector("#play2").value;
                document.querySelector(".message").innerHTML=`${player2} has won!`;
                render();
                squares.forEach(square=> {square.removeEventListener("click", handleClick)})
            }
            else {
                if (turn==9) {
                    document.querySelector(".message").innerHTML=`It's a tie!`;
                    render();
                }
                else {
                    let player1=document.querySelector("#play1").value;
                    document.querySelector(".message").innerHTML=`It's ${player1}'s turn!`;
                    render();
                }
                
            }
        }
    }
}
    

let squares=document.querySelectorAll(".square");
squares.forEach(square=> {square.addEventListener("click", handleClick)})

let form=document.querySelector("#form");
form.addEventListener("submit", function () {
    event.preventDefault();
    let game=document.querySelector(".game");
    game.style="";
    let player1=document.querySelector("#play1").value;
    document.querySelector(".message").innerHTML=`It's ${player1}'s turn!`;


})

let restart=document.querySelector("#restart");
restart.addEventListener("click", function (){
    squares.forEach(square=> {square.addEventListener("click", handleClick)})
    turn=0;
    let game=document.querySelector(".game");
    game.style.display="none";
    document.querySelector("#play1").value="";
    document.querySelector("#play2").value="";
    document.querySelector(".message").innerHTML="";
    gameBoard=["", "", "", "", "", "", "", "", ""];
    render();
})



