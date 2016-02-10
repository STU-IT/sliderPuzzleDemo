var cells = document.querySelectorAll(".cell");
for (var i = 0;  i < cells.length; i++)
{
    //TODO figure how to get x and y := we get it from DOM
    var cell = cells[i];
    var x = cell.cellIndex;
    var y = cell.parentNode.rowIndex;

    cell.addEventListener("click", function( event ) {
        var x = this.parentNode.rowIndex;
        var y = this.cellIndex;
        if (game.canBrickMove(x, y))
        {
            game.moveBrick(x, y);
            showBoard(game)
        }
    }, false);

    cell.addEventListener("mouseenter", function( event ) {
        1+1;
        // set css for movable, if canMove()
    }, false);
    cell.addEventListener("mouseleave", function( event ) {
        1+1;
        //reset css
    }, false);
}

function showBoard ( game )
{
    for (var i = 0; i < game.board.length; i++)
    {
        var tr = gamepad.firstElementChild.children[i];
        var collumn = game.board[i];
        for (var j = 0; j < collumn.length; j++)
        {
            var td = tr.children[j];
            var span = td.firstElementChild;
            if (game.board[i][j])
            {
                span.innerHTML = game.board[i][j].value;
            }
            else
            {
                td.innerHTML = "";
            }

        }
    }
}

var game = new Game(2);
showBoard(game);
