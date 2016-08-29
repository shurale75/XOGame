(function(){
    var game = {};
    //var boardSize = 3;
    var lastWinner = -1;

    game.services = new Services(game);
    game.board = new Board(game);
    game.players = new Players(game);
    game.manager = new Manager(game);

    console.log('main board:', game.board);
    console.log('main players:', game.players);
    console.log('main manager:', game.manager);
    console.log('main services:', game.services);

    document.getElementById("playbtn").addEventListener("click", game.manager.startGame, false);
    document.getElementById("cplayer").value = game.players.setRndPlayer();


}());