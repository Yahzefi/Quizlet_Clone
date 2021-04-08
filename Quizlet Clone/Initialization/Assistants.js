// this file contains the Assistant class which is used to define the four category's page assistants who introduce themselves as well as
// the current page the user is visiting.

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
    // the following two methods create the assistant object and then displays it on the screen with an animation
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
    // a method to change the expression of the assistant as the dialogue progress with a 
    // fade out and fade in so it isn't too jarring to break the immersion of speaking to the assistant
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
    // a method to infer surprise or urgency from the assistant
    shake() {
        $('#' + this.id).animate({right: "82%", height: "407.5px"}, 25)
        $('#' + this.id).animate({right: "83%", height: "415px"}, 25)
        $('#' + this.id).animate({right: "82.5%", height: "425px"}, 15)
        $('#' + this.id).animate({right: "82%", height: "415px"}, 25)
        $('#' + this.id).animate({right: "83%", height: "407.5px"}, 25)
        $('#' + this.id).animate({right: "82.5%", height: "400px"}, 15)
    }
}

// this is a recursive function which will run through each character of the passed string and display it with a
// typewriter-like effect

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
        let myInterval = setInterval(splitByLetter, 50)
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
