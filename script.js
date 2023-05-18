turn=1;

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

function handleClick (event) {
    turn+=1;
    if (turn%2==0) {
        gameBoard[event.target.id-1]="X";

    }
    else {
        gameBoard[event.target.id-1]="0";

    }
    render();

}

let squares=document.querySelectorAll(".square");
squares.forEach(square=> {square.addEventListener("click", handleClick)})

let form=document.querySelector("#form");
form.addEventListener("submit", function () {
    event.preventDefault();
    let game=document.querySelector(".game");
    game.style="";
}
)

let restart=document.querySelector("#restart");
restart.addEventListener("click", function (){
    let game=document.querySelector(".game");
    game.style.display="none";
    document.querySelector("#play1").value="";
    document.querySelector("#play2").value="";
    gameBoard=["", "", "", "", "", "", "", "", ""];
    render();


})




