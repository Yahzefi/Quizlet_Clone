import { pause } from "../c_Redirect.js";
import { Subcomponent } from "../../Initialization/Subcomponent.js";
import { ASSISTANT_LIST } from "../../Initialization/on_Init.js";
import { typeMessage, dialogueLB } from "../../Initialization/Assistants.js";
import { beginConversation } from "../Dialogues/d.Main.js";

let assistantName_SC = new Subcomponent("h3", "assistant_name", "assist-name");
let chatDiv_SC = new Subcomponent("div", "chat_div", "chat-div");
    let chatBox_SC = new Subcomponent("div", "chat_box", "chat-box");
        let chatBoxMsg_SC = new Subcomponent("h2", "chat_message", "chat-msg");

export async function initShowTime(){
    let avatar_Dame = ASSISTANT_LIST.Damien
    $(document.body).append(avatar_Dame.generate());
    avatar_Dame.display("60%");
    await pause(1000);
    $(document.body).prepend(chatDiv_SC.createElement());
        $('#' + chatDiv_SC.id).append(chatBox_SC.createElement());
            $('#' + chatBox_SC.id).append(chatBoxMsg_SC.createElement());
            $('#' + chatBox_SC.id).css("display", "none");
    $('#' + chatDiv_SC.id).animate({top:"625px"}, 1000)
    await pause(1000);
    $('#header_container').fadeIn(750);
    await pause(750);
    $('#' + chatBox_SC.id).fadeIn(750);
    await pause(750);
    avatar_Dame.switchExpression("open")
    .then(()=>typeMessage("Hola!"))
    .then(async ()=>{await dialogueLB()})
    .then(()=>avatar_Dame.switchExpression("smile"))
    .then(()=>typeMessage("Me llamo Damien"))
    .then(async()=>{await dialogueLB()})
    .then(async ()=>{
        $('#chat_div').prepend(assistantName_SC.createElement([{attr:"", content:"", innerText:"Damien"}]))
        $('#' + assistantName_SC.id).animate({left: "18%", opacity: 1}, 1000)
        await pause(850);
        $('#' + assistantName_SC.id).css("font-style", "normal")
        await pause(150);
    })
    .then(()=>typeMessage("Although if you're new to the language, I should say my name is Damien."))
    .then(async()=>{await dialogueLB()})
    .then(()=>beginConversation("S"))
}

export function endLine_Span(){
    console.log("End Spanish");
}
