class Character {
    constructor(width, height, color, x, y, type){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.type = type;
        if(this.type === "image"){
            this.image = new Image();
            this.image.src = this.color;
            this.image.id = "avatar";
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
    setPosition(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

let gameBoard = {
    canvas : document.createElement("canvas"),
    start : function(){

        // MAKE AND APPEND CANVAS
        this.canvas.width = "800";
        this.canvas.height = "500";
        this.context = this.canvas.getContext("2d");
        this.canvas.style.border = "1px solid black";
        $('#main_container').append(this.canvas);

        // CREATE BUTTON CONTAINER && BUTTONS
        let btn_cont = document.createElement('div');
        let left_btn = document.createElement("button");
        let right_btn = document.createElement("button");
        let up_btn = document.createElement("button");
        let down_btn = document.createElement("button");
        // SET ID ATTRIBUTE FOR ABOVE ELEMENTS
        btn_cont.id = "button_container";
        left_btn.id = "left_btn";
        right_btn.id = "right_btn";
        up_btn.id = "up_btn";
        down_btn.id = "down_btn";
        // SET TEXT CONTENT FOR BUTTONS
        left_btn.textContent = "Left";
        right_btn.textContent = "Right";
        up_btn.textContent = "Up";
        down_btn.textContent = "Down";
        // APPEND BUTTON CONTAINER && BUTTONS
        $('#main_container').append(btn_cont);
            $('#button_container').append(left_btn);
            $('#button_container').append(right_btn);
            $('#button_container').append(up_btn);
            $('#button_container').append(down_btn);

        // SET INTERVAL FUNCTION
        this.interval = setInterval(updateBoard, 16.6);
    },
    clear : function(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}

let playerOne = new Character("", "", "../Images/avatar.png", 75, 200, "image")

function updateBoard(){
    gameBoard.clear();
    movePlayer();
    playerOne.updatePlayer();
    playerOne.setPosition();
}

function movePlayer(){
// LEFT
    $('#left_btn').mousedown(()=>{playerOne.speedX = -1})
    $('#left_btn').mouseup(()=>{playerOne.speedX = 0})
// RIGHT
    $('#right_btn').mousedown(()=>{playerOne.speedX = 1})
    $('#right_btn').mouseup(()=>{playerOne.speedX = 0})
// UP
    $('#up_btn').mousedown(()=>{playerOne.speedY = -1})
    $('#up_btn').mouseup(()=>{playerOne.speedY = 0})
// DOWN
    $('#down_btn').mousedown(()=>{playerOne.speedY = 1})
    $('#down_btn').mouseup(()=>{playerOne.speedY = 0})
}




export function startGameTwo(){
    gameBoard.start();
}
