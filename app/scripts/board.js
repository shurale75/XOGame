/**
 * Created by dmitri on 8/28/2016.
 */

function Board(game){
    this.game = game;
    this.size;
    this.moveCount = 0;
    this.cells = [];

    return this;
}

Board.prototype = {
    setBoardElement: function(size){
        this.size = size;
        var board = document.createElement("ul");
        for (var i = 0; i < this.size; i++) {
            var row = document.createElement("ul");
            row.id = 'row' + i;
            board.appendChild(row);
            for (var j = 0; j < this.size; j++) {
                var cIndex = this.cells.length;
                var cell = new Cell(i, j, cIndex, this.game);
                row.appendChild(cell.cellElem);
                this.cells.push(cell);
            }
        }

        return board;
    }
};


