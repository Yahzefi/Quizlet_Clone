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
    crashesWith(otherObj){
        var myLeft = this.x;
        var myRight = (this.x + this.width);
        var myTop = this.y;
        var myBottom = (this.y + this.height);

        var otherLeft = otherObj.x;
        var otherRight = (otherObj.x + otherObj.width);
        var otherTop = otherObj.y;
        var otherBottom = (otherObj.y + otherObj.height);

        var hasCrashed = true;

        if(
            // o|me
            myLeft > otherRight ||
            // me|o
            myRight < otherLeft ||
            // o
            //---
            // me
            myTop > otherBottom ||
            // me
            //---
            // o
            myBottom < otherTop
            ){
                hasCrashed = false;
            }
        return hasCrashed;
    }
}

let myFirstCharacter = new Character(30,30,"red",10,120);
var myObstacles = [];

let gameTemplate = {
    canvas : document.getElementById('gameOne'),
    start : function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context1 = this.canvas.getContext("2d");
        this.frameNo = 0;
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
        this.context1.clearRect(0,0,this.canvas.width, this.canvas.height);
    },
    boundaryCheck : function(){
        if(myFirstCharacter.x <= 0){myFirstCharacter.x = 0}
        if(myFirstCharacter.x >= (gameTemplate.canvas.width - myFirstCharacter.width)){myFirstCharacter.x = (gameTemplate.canvas.width - myFirstCharacter.width)}
        if(myFirstCharacter.y <= 0){myFirstCharacter.y = 0}
        if(myFirstCharacter.y >= (gameTemplate.canvas.height - myFirstCharacter.height)){myFirstCharacter.y = (gameTemplate.canvas.height - myFirstCharacter.height)}
    },
    stop : function(){
        clearInterval(this.interval);
    }
}



function updateGameArea(){
    let x, y;
    $(myObstacles).each((i)=>{
        if(myFirstCharacter.crashesWith(myObstacles[i])){
            gameTemplate.stop();
            return;
        }
    })
    gameTemplate.boundaryCheck();
    gameTemplate.clear();
    gameTemplate.frameNo++;
    if(gameTemplate.frameNo == 1 || everyInterval(150)){
        x = gameTemplate.canvas.width;
        // y = gameTemplate.canvas.height - 200;
        let minHeight = 20;
        let maxHeight = 200;
        let height = Math.floor(Math.random()*((maxHeight - minHeight+1)+ minHeight));
        let minGap = 50;
        let maxGap = 200;
        let gap = Math.floor(Math.random()*((maxGap - minGap + 1) + minGap));
        myObstacles.push(new Character(15, height, "green", x, 0));
        myObstacles.push(new Character(15, (x - height - gap), "green", x, height + gap))
    }
    $(myObstacles).each((i)=>{
        myObstacles[i].x--;
        myObstacles[i].update();
    });
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

function everyInterval(n){
    if((gameTemplate.frameNo / n) % 1 == 0){
        return true;
    };
    return false;
}

export function startGameOne(){
    gameTemplate.start();
}