/**
 * Created by dmitri on 8/28/2016.
 */

function Manager(board){
    console.log('MANAGER');

    this.startGame = function(){
        console.log('>>>> startGame');
        var size = document.getElementById("size").value;
        var boardElement = board.setBoardElement(size);
        parent = document.getElementById("game");
        parent.innerHTML = "";
        parent.appendChild(boardElement);
    }
}
