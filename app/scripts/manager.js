/**
 * Created by dmitri on 8/28/2016.
 */

function Manager(game){
    this.startGame = function(){
        game.isStarted = true;
        game.board.moveCount = 0;
        game.board.cells.length = 0;
        var size = document.getElementById("size").value;
        var boardElement = game.board.setBoardElement(size);
        parent = document.getElementById("game");
        parent.innerHTML = "";
        parent.appendChild(boardElement);
    };

    this.endGame = function(winner){
        game.isStarted = false;
        if(winner != 'DRAWN'){
            document.getElementById("scores").innerHTML = "<span>The WINNER is:" + game.players.players[winner] +"</span>";
        }else{
            document.getElementById("scores").innerHTML = "<span>DRAWN</span>";
        }
    };

    this.switchPlayer = function(cellX, cellY, index){
        var win = game.services.checkWinner(cellX, cellY, index, game.players.currentPlayer, game.board);
        if(win != 'PLAY')
            this.endGame(win);
        document.getElementById("cplayer").value = game.players.switchPlayer();
    };
}
