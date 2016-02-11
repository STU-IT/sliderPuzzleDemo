function Game(n)
{
    this.board = [];
    for (var i = 0; i < n; i++)
    {
        this.board[i] = [];
        for (var j = 0; j < n; j++)
        {
            this.board[i][j] = new Brick(i*n+j+1);
        }
    }
    this.board[n-1][n-1] = new Brick(null);
    this.emptyBrickPossition = {'x':n-1, 'y':n-1};
}

function Brick(n, board)
{
    this.value = n;
    this.image = "..." ; // TODO get image ...
}

Game.prototype.canBrickMove = function(x, y)
{
    //if (x == this.emptyBrickPossition.x
    //    && y == this.emptyBrickPossition.y)
    if(
        ((x-1 == this.emptyBrickPossition.x || x+1 == this.emptyBrickPossition.x) && y == this.emptyBrickPossition.y)
        ||
        ((y-1 == this.emptyBrickPossition.y || y+1 == this.emptyBrickPossition.y) && x == this.emptyBrickPossition.x)
      )
    {
        return true;
    }
    else
    {
        return false;
    }
}

Game.prototype.moveBrick = function(x, y)
{
    var tempBrick = this.board[x][y];

    this.board[x][y] = this.board[this.emptyBrickPossition.x][this.emptyBrickPossition.y];
    this.board[this.emptyBrickPossition.x][this.emptyBrickPossition.y] = tempBrick;

    this.emptyBrickPossition = {'x':x, 'y':y};
}
