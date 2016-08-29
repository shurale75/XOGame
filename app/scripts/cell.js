/**
 * Created by dmitri on 8/28/2016.
 */

function Cell(r, c, cIndex, game){
    this.game = game;
    this.stat = -1;
    this.x = c;
    this.y = r;
    this.index = cIndex;
    this.cellElem = document.createElement("li");
    this.cellElem.id = 'cell' + r + c;
    this.cellElem.className = "cell";
    this.cellElem.obj = this;
    this.cellElem.onclick = function(){
        if(game.isStarted) {
            this.obj.turn(this);
        }
    };
    this.cellElem.cellValue = document.createElement("span");
    this.cellElem.cellValue.id = 'cval';
    this.cellElem.cellValue.innerHTML = "+";
    this.cellElem.appendChild(this.cellElem.cellValue);

    return this;
}

Cell.prototype = {
    styles: ["cellX", "cellO"],
    turn: function(el){
        if(this.stat === -1) {
            this.stat = this.game.players.currentPlayer;
            this.cellElem.cellValue.innerHTML = this.game.players.players[this.stat];
            el.classList.add(this.styles[this.game.players.currentPlayer]);
            this.game.manager.switchPlayer(this.x, this.y, this.index);
        }
    }
};