/**
 * Created by dmitri on 8/28/2016.
 */

function Players(){
    this.currentPlayer = 1;
    this.players = ['X', 'O'];
    this.setRndPlayer();

    return this;
}

Players.prototype = {
    setRndPlayer: function(){
        this.currentPlayer = Math.floor((Math.random() * 2));
        return this.players[this.currentPlayer];
    },

    switchPlayer: function(){
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
        return this.players[this.currentPlayer];
    }
};
