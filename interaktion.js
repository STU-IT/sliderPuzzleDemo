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
        //var tr = gamepad.firstElementChild.children[i];
        var tr = document.createElement("tr");
        gamepad.appendChild(tr);

        var collumn = game.board[i];
        for (var j = 0; j < collumn.length; j++)
        {
            var td = document.createElement("td");
            td.classList.add("cell");
            tr.appendChild(td);

            var span = document.createElement("span");
            td.appendChild(span);

            if (game.board[i][j])
            {
                span.innerHTML = game.board[i][j].value;
                td.addEventListener("click", clickOnBrick, false);
            }
            else
            {
                td.innerHTML = "";
                td.class = "";
            }

        }
    }
}

var game = new Game(3);
showBoard(game);
