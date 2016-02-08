var cells = document.querySelectorAll(".cell");
for (var item in cells)
{
    //TODO fige how to get x and y

    item.addEventListener("click", function( event ) {
        if (game.board.[x][y].canMove())
        {
            game.board.[x][y].move();
        }
    }, false);

    item.addEventListener("mouseenter"), function( event ) {
        // set css for movable, if canMove()
    }, false);
    item.addEventListener("mouseleave"), function( event ) {
        //reset css
    }, false);
}

function showBoard ( board )
{
    for (var collumn in board)
    {
        for (var brick in collumn)
        {

        }
    }
}
