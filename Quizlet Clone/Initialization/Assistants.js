import { Subcomponent } from "./Subcomponent.js";

export class Assistant{
    constructor(id, hasIntroduced, category){
        this.id = id;
        this.hasIntroduced = hasIntroduced;
        this.category = category;
        
        this.smile = "/Images/Assistants/" + this.category + "/" + this.category + "Guy_smile.png";
        this.open = "/Images/Assistants/" + this.category + "/" + this.category + "Guy_smileOpen.png";
        this.default = "/Images/Assistants/" + this.category + "/" + this.category + "Guy_neutral.png";
        this.shocked = "/Images/Assistants/" + this.category + "/" + this.category + "Guy_shocked.png";
    }
    generate(){
        let newAssistant = document.createElement("img");
        newAssistant.id = this.id;
        newAssistant.src = this.default;
        newAssistant.style.width = "300px";
        newAssistant.style.height = "400px";
        newAssistant.style.position = "fixed";
        newAssistant.style.top = "100%";
        newAssistant.style.right = "82.5%";
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
            switch(newSrc){
                case "smile":
                    $('#' + this.id).attr("src", this.smile);
                    break;
                case "open":
                    $('#' + this.id).attr("src", this.open);
                    break;
                case "default":
                    $('#' + this.id).attr("src", this.default);
                    break;
                case "shocked":
                    $('#' + this.id).attr("src", this.shocked);
                    break;
                default:
                    throw new Error("Expression Not Found");
            }
            $('#' + this.id).fadeIn(500);
            res();
        })
    }
    shake() {
        $('#' + this.id).animate({right: "82%", height: "407.5px"}, 25)
        $('#' + this.id).animate({right: "83%", height: "415px"}, 25)
        $('#' + this.id).animate({right: "82.5%", height: "425px"}, 15)
        $('#' + this.id).animate({right: "82%", height: "415px"}, 25)
        $('#' + this.id).animate({right: "83%", height: "407.5px"}, 25)
        $('#' + this.id).animate({right: "82.5%", height: "400px"}, 15)
    }
}

export function typeMessage(msg){
    return new Promise(resolve=>{
        let x = 0;
        let chatArr = msg.split("");
        chatArr.join("");
        let splitByLetter = function(){
            if(x < chatArr.length){
                $('#chat_message').append(chatArr[x])
                x++;
            } else {
                clearInterval(myInterval);
                resolve();
            }
        }
        let myInterval = setInterval(splitByLetter, 35)
    })
}

// Inserts a 500ms pause before clearing out the message string || Useful for when the sentence is too long
export async function dialogueLB(){
    await pause(500);
    $('#chat_message').text("");
}

export function create_dBox(){
    return new Promise((resolve)=>{
        let dBox_SC = new Subcomponent("div", "dialogue_box", "d-box")
        resolve(dBox_SC.createElement());
    })
}


function pause(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}
