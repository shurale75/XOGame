/**
 * Created by dmitri on 8/28/2016.
 */

function Board(game){
    console.log('BOARD services:', game.services);

    this.game = game;
    //this.boardSize = game.size;
    //this.services = game.services;

    this.cells = [];

    return this;
}

Board.prototype = {
    setBoardElement: function(size){
        this.boardSize = size;
        var board = document.createElement("ul");
        for (var i = 0; i < this.boardSize; i++) {
            var row = document.createElement("ul");
            row.id = 'row' + i;
            board.appendChild(row);
            for (var j = 0; j < this.boardSize; j++) {
                var cell = new Cell(i, j, this.game);
                row.appendChild(cell.cellElem);
                this.cells.push(cell);
            }
        }

        return board;
    },

    turn: function(id){
        console.log('>>> board >> turn ::: id:', id);
    }

    //updateBoardElement: function(size){
    //    this.boardSize = size;
    //    this.boardElement = this.setBoardElement(this.boardSize);
    //},
};


