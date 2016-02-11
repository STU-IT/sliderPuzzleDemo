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

function clickOnBrick( event )
{
    var x = this.parentNode.rowIndex;
    var y = this.cellIndex;
    if (game.canBrickMove(x, y))
    {
        game.moveBrick(x, y);
        showBoard(game)
    }
}

function showBoard ( game )
{
    for (var i = gamepad.rows.length-1; i >= 0; i--)
    {
        gamepad.deleteRow(i);
    }
    for (var i = 0; i < game.board.length; i++)
    {
        var tr = document.createElement("tr");

        var collumn = game.board[i];
        for (var j = 0; j < collumn.length; j++)
        {
            var td = document.createElement("td");
            if (game.board[i][j].value != null)
            {
                td.addEventListener("click", clickOnBrick, false);
                td.classList.add("cell");
                var span = document.createElement("span");
                span.innerHTML = game.board[i][j].value;
                td.appendChild(span);
            }

            tr.appendChild(td);
            gamepad.appendChild(tr);
        }
    }
}

var game = new Game(2);
showBoard(game);
