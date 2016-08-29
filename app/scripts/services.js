/**
 * Created by dmitri on 8/28/2016.
 */

function Services(){
    this.checkWinner = function(x, y, index, player, board){
        board.moveCount++;

        if(this.isCol(x, player, board) || this.isRow(y, player, board) || this.isDiag(x, y, player, board) || this.isAntiDiag(player, board)){
            return player;
        }else if(this.isDraw(board)){
            return 'DRAWN'
        }
        return 'PLAY';
    };

    this.isCol = function(x, player, board){
        for(var i = 0; i < board.cells.length; i++){
            if(board.cells[i].x === x && board.cells[i].stat != player) {
                return false;
            }
        }
        return true;
    };

    this.isRow = function(y, player, board){
        for(var i = 0; i < board.cells.length; i++){
            if(board.cells[i].y === y && board.cells[i].stat != player) {
                return false;
            }
        }
        return true;
    };

    this.isDiag = function(x, y, player, board){
        if(x === y) {
            for (var i = 0; i < board.cells.length; i++) {
                if (board.cells[i].x === board.cells[i].y && board.cells[i].stat != player) {
                    return false;
                }
            }
            return true
        }else{
            return false;
        }
    };

    this.isAntiDiag = function(player, board){
        for (var i = 0; i < board.cells.length; i++) {
            if(board.cells[i].y === (board.size-1)-(i%board.size) && board.cells[i].stat != player) {
                return false;
            }
        }
        return true;
    };

    this.isDraw = function(board){
        if(board.moveCount === board.cells.length){
            return true;
        }else{
            return false;
        }
    }

}

