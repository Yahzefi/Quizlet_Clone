export class Assistant{
    constructor(id, src, width, height, positionRight){
        this.id = id;
        this.src = src;
        this.width = width;
        this.height = height;
        this.positionRight = positionRight;
    }
    generate(){
        let newAssistant = document.createElement("img");
        newAssistant.id = this.id;
        newAssistant.src = this.src;
        newAssistant.style.width = this.width;
        newAssistant.style.height = this.height;
        newAssistant.style.position = "fixed";
        newAssistant.style.top = "100%";
        newAssistant.style.right = this.positionRight;
        return newAssistant;
    }
    async display(positionTop){
        $('#' + this.id).animate({top: positionTop}, 1000);
        await pause(1000);
    }
    async switchExpression(newSrc){
        return new Promise(async (res)=>{
            $('#' + this.id).fadeOut(500);
            await pause(500);
            $('#' + this.id).attr("src", newSrc);
            $('#' + this.id).fadeIn(500);
            await pause(250);
            res();
        })
    }
}

export function toggleDialogueBox(){
    //
}

function pause(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}