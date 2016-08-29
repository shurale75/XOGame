/**
 * Created by dmitri on 8/28/2016.
 */

function Board(size){
    console.log('BOARD');

    this.boardSize = size;
    this.cells = [];
    //this.boardElement = this.setBoardElement(this.boardSize);

    return this;
}

Board.prototype.setBoardElement = function(size){
    var board = document.createElement("ul");
    for (var i = 0; i < size; i++) {
        var row = document.createElement("ul");
        row.id = 'row' + i;
        board.appendChild(row);
        for (var j = 0; j < size; j++) {
            var cell = document.createElement("li");
            cell.id = 'cell' + i + j;
            cell.className = "cell";
            cell.align = cell.valign = 'center';
            cell.board = this;
            cell.onclick = function(){
                console.log('this:', this);
                console.log('board:', board);
                console.log('brd:', this.board);
            };
            cell.appendChild(document.createTextNode("X"));
            row.appendChild(cell);
            this.cells.push(cell);
        }
    }

    return board;
}

Board.prototype.turn = function(id){
    console.log('>>> board >> turn ::: id:', id);
    this.className = "cellx";
}

Board.prototype.updateBoardElement = function(size){
    this.boardSize = size;
    this.boardElement = this.setBoardElement(this.boardSize);
}