var cells = document.querySelectorAll(".cell");
for (var i = 0;  i < cells.length; i++)
{
    //TODO figure how to get x and y := we get it from DOM
    var cell = cells[i];
    var x = cell.cellIndex;
    var y = cell.parentNode.rowIndex;

    cell.addEventListener("click", function( event ) {
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
    for (var collumn in game.board)
    {
        for (var brick in collumn)
        {

        }
    }
}

var game = new Game(2);
