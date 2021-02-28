import { create_dBox } from "../../Initialization/Assistants.js";
import { pause } from "../c_Programming/main.Programming.js";
// DIALOGUE PATHS WITH PROGRAMMING ASSISTANT

export function firstReply(){
    create_dBox()
    .then(async(dBox)=>{
        await pause(500);
        $('#white_chatDiv').append(dBox);
        $('#dialogue_box').css("display", "none");
        $('#dialogue_box').slideDown(1000);
        await pause(1000);
    })
}

