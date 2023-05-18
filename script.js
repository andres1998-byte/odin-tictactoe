const gameBoardModule= (()=>{
    let gameBoard=[];
    return{gameBoard};
})();

gameBoard=["X", "O", "X", "X", "O", "X", "X", "O", "X"];

function render () {
    for (let i=1; i<=gameBoard.length; i++) {
        let marker=gameBoard[i-1];
        let square=document.getElementById(`${i}`);
        square.innerHTML=`${marker}`;
    }

}

console.log(render())