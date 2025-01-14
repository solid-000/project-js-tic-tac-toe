const tileContainer = document.querySelector('.tiles-container');
tileContainer.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.getAttribute('class')){
        case 'tile':
            console.log(target.getAttribute('data-index'));
            break;
    }
});

function choiceToggle(){
    choice = (choice === 'x') ? 'o' : 'x';
}

const gameBoard = (function(){
    const tiles = Object.seal(['', '', '', '', '', '', '', '', '']);

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
            console.log('x wins');
        }else if(victor === 'o'){
            console.log('o wins');
        }else if((tiles[0] && tiles[1] && tiles[2] && tiles[3] && tiles[4] && tiles[5] && tiles[6] && tiles[7] && tiles[8]) && !victor){
            console.log('draw');
        }
    }

    function clearTiles(){
        for(let i = 0; i < tiles.length; i++){
            tiles[i] = '';
        }
    }

    function output(){
        console.log(tiles)
    }

    return {
        placeChoice,
        output,
        clearTiles,
    }
})();