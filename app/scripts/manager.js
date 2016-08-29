/**
 * Created by dmitri on 8/28/2016.
 */

function Manager(game){
    console.log('MANAGER board:', game.board);

    this.startGame = function(){
        console.log('>>>> startGame');
        var size = document.getElementById("size").value;
        var boardElement = game.board.setBoardElement(size);
        console.log('boardElement:', boardElement);
        parent = document.getElementById("game");
        parent.innerHTML = "";
        parent.appendChild(boardElement);
    };

    this.switchPlayer = function(){
        document.getElementById("cplayer").value = game.players.switchPlayer();
    };
}
