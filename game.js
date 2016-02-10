function Game(n)
{
    this.board = [];
    for (var i = 0; i < n; i++)
    {
        this.board[i] = [];
        for (var j = 0; j < n; j++)
        {
            this.board[i][j] = new Brick(i*n+j, this.board);
        }
    }
    this.board[n-1][n-1] = null;
    this.emptyBrickPossition = {'x':n-1, 'y':n-1};

}

function Brick(n, board)
{
    this.value = n;
    this.image = "..." ; // TODO get image ...
    this.board = board;
}

Game.prototype.canBrickMove = function(x, y)
{
    if (x == this.emptyBrickPossition.x
        && y == this.emptyBrickPossition.y)
    {
        return false;
    }
    else
    {
        return true;
    }
}

Game.prototype.moveBrick = function(x, y)
{
    var tempBrick = this.board[0][0];
    this.board[0][0] = this.board[x][y];
    this.board[x][y] = tempBrick;
}
