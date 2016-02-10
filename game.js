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
}

function Brick(n, board)
{
    this.value = n;
    this.image = "..." ; // TODO get image ...
    this.board = board;
}

Game.prototype.canBrickMove = function()
{
    return true;
}

Game.prototype.moveBrick = function()
{
    var tempBrick = this.board[0][0];
    this.board[0][0] = this;
    //this = tempBrick;
}
