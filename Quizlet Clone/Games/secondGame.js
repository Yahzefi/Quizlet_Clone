class Character {
    constructor(width, height, color, x, y, type){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.type = type;
        if(this.type === "image"){
            this.image = new Image();
            this.image.src = this.color;
        }
    }
    updatePlayer(){
        var ctx = gameBoard.context;
        if(this.type === "image"){
            ctx.drawImage(this.image, this.x, this.y);
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

let gameBoard = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = "800";
        this.canvas.height = "500";
        this.context = this.canvas.getContext("2d");
        this.canvas.style.border = "1px solid black";
        $('#main_container').append(this.canvas);
        this.interval = setInterval(updateBoard, 16.6);
    }
}

let playerOne = new Character("", "", "../Images/avatar.png", 75, 200, "image")

function updateBoard(){
    playerOne.updatePlayer();
}






export function startGameTwo(){
    gameBoard.start();
}
