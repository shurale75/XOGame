(function(){
    var boardSize = 3;
    var currentPlayer = 1;
    var lastWinner = -1;

    var gameBoard = new Board(boardSize);
    var players = new Players();
    var manager = new Manager(gameBoard);
    var services = new Services();

    console.log('main board:', gameBoard);
    //console.log('main cell:', cell);
    console.log('main players:', players);
    console.log('main manager:', manager);
    console.log('main services:', services);

    document.getElementById("playbtn").addEventListener("click", manager.startGame, false);


    /*var board = document.createElement("ul");

    //var board = new Board;

    for (var i = 0; i < 3; i++) {
     var row = document.createElement("ul");
     row.id = 'row' + i;
     board.appendChild(row);
     for (var j = 0; j < 3; j++) {
     var cell = document.createElement("li");
     cell.id = 'cell' + i + j;
     cell.className = "emptyCell";
     cell.align = cell.valign = 'center';
     //    cell.indicator = indicator;
     //    cell.onclick = set;
     //    cell.appendChild(document.createTextNode(""));
     row.appendChild(cell);
     //    squares.push(cell);
     //    indicator += indicator;
     }
     }
    var parent = document.getElementById("game") || document.body;
    parent.appendChild(board);*/

}())