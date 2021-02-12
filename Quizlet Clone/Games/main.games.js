$(document).ready(()=>{
    gameTemplate.start();
    myFirstCharacter = new Character(30,30,"red",10,120);
})

let gameTemplate = {
    canvas_1 : document.getElementById('gameOne'),
    // canvas_2 : document.getElementById('gameTwo'),
    // canvas_3 : document.getElementById('gameThree'),
    start : function(){
        console.log(this.canvas_1);
        // console.log(this.canvas_2);
        // console.log(this.canvas_3);
        this.canvas_1.width = 480;
        this.canvas_1.height = 270;
        this.context1 = this.canvas_1.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
        $(window).keydown((e)=>{
            gameTemplate.keys = (gameTemplate.keys || [])
            gameTemplate.keys[e.keyCode] = true;
        });
        $(window).keyup((e)=>{
            gameTemplate.keys[e.keyCode] = false;
        });
    },
    clear : function() {
        this.context1.clearRect(0,0,this.canvas_1.width, this.canvas_1.height);
    },
    boundaryCheck : function(){
        if(myFirstCharacter.x <= 0){myFirstCharacter.x = 0}
        if(myFirstCharacter.x >= (gameTemplate.canvas_1.width - myFirstCharacter.width)){myFirstCharacter.x = (gameTemplate.canvas_1.width - myFirstCharacter.width)}
        if(myFirstCharacter.y <= 0){myFirstCharacter.y = 0}
        if(myFirstCharacter.y >= (gameTemplate.canvas_1.height - myFirstCharacter.height)){myFirstCharacter.y = (gameTemplate.canvas_1.height - myFirstCharacter.height)}
    }
}

class Character {
    constructor(width, height, color, x, y){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
    }
    update(){
        let ctx1 = gameTemplate.context1;
        ctx1.fillStyle = this.color;
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea(){
    gameTemplate.boundaryCheck();
    gameTemplate.clear();
    stopPlayer();
    movePlayer();
    myFirstCharacter.newPos();
    myFirstCharacter.update();
}

function movePlayer(){
    if(gameTemplate.keys && gameTemplate.keys[37]){myFirstCharacter.speedX = -1}
    if(gameTemplate.keys && gameTemplate.keys[38]){myFirstCharacter.speedY = -1}
    if(gameTemplate.keys && gameTemplate.keys[39]){myFirstCharacter.speedX = 1}
    if(gameTemplate.keys && gameTemplate.keys[40]){myFirstCharacter.speedY = 1}
}

function stopPlayer() {
    myFirstCharacter.speedX = 0;
    myFirstCharacter.speedY = 0;
}
