let turn = 'x';
const tileContainer = document.querySelector('.tiles-container');
const resultDiv = document.querySelector('.result');
tileContainer.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.getAttribute('class')){
        case 'tile':
            gameBoard.placeChoice(target.getAttribute('data-index'), turn);
            target.textContent = turn;
            turnToggle();
            target.disabled = true;
            break;
    }
});
document.querySelector('.reset-button').addEventListener('click', ()=>{
    gameBoard.clearTiles();
});
 
function turnToggle(){
    turn = (turn === 'x') ? 'o' : 'x';
}

const gameBoard = (function(){
    const tiles = Object.seal(['', '', '', '', '', '', '', '', '']);
    let tilesOnScreen = document.querySelectorAll('.tile');

    function placeChoice(index, choice){
        tiles[index] = choice;
        checkWin(choice);
    }

    function checkWin(placeholder){
        let victor = '';

        //row-check//
        if(tiles[0] === placeholder && tiles[1] === placeholder && tiles[2] === placeholder) victor = placeholder;
        if(tiles[3] === placeholder && tiles[4] === placeholder && tiles[5] === placeholder) victor = placeholder;
        if(tiles[6] === placeholder && tiles[7] === placeholder && tiles[8] === placeholder) victor = placeholder;

        //column-check//
        if(tiles[0] === placeholder && tiles[3] === placeholder && tiles[6] === placeholder) victor = placeholder;
        if(tiles[1] === placeholder && tiles[4] === placeholder && tiles[7] === placeholder) victor = placeholder;
        if(tiles[2] === placeholder && tiles[5] === placeholder && tiles[8] === placeholder) victor = placeholder;

        //diagonal-check//
        if(tiles[0] === placeholder && tiles[4] === placeholder && tiles[8] === placeholder) victor = placeholder;
        if(tiles[2] === placeholder && tiles[4] === placeholder && tiles[6] === placeholder) victor = placeholder;

        if(victor === 'x'){
            resultDiv.textContent = `Player 1 Wins!`;
            disableTilesOnWin();
        }else if(victor === 'o'){
            resultDiv.textContent = `Player 2 Wins!`;
            disableTilesOnWin();
        }else if((tiles[0] && tiles[1] && tiles[2] && tiles[3] && tiles[4] && tiles[5] && tiles[6] && tiles[7] && tiles[8]) && !victor){
            resultDiv.textContent = "Its's a Draw!";
        }
    }

    function clearTiles(){
        for(let i = 0; i < tiles.length; i++){
            tiles[i] = '';
        }
        tilesOnScreen.forEach(element => {
            element.textContent = '';
            element.disabled = false;
            turn = 'x';
        });
        resultDiv.textContent = '';
    }

    function disableTilesOnWin(){
        tilesOnScreen.forEach(element => {
            element.disabled = true;
        });
    }

    return {
        placeChoice,
        clearTiles,
    }
})();