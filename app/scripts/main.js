(function(){
    var game = {};

    game.services = new Services(game);
    game.board = new Board(game);
    game.players = new Players(game);
    game.manager = new Manager(game);
    game.isStarted = false;

    document.getElementById("playbtn").addEventListener("click", game.manager.startGame, false);
    document.getElementById("cplayer").value = game.players.setRndPlayer();

}());