import { Subcomponent } from "../../Initialization/Subcomponent.js"
import { ASSISTANT_LIST } from "../../Initialization/on_Init.js"
import { pause } from "../c_Redirect.js"
import { typeMessage, dialogueLB } from "../../Initialization/Assistants.js"
import { beginConversation } from "../Dialogues/d.Main.js";

let assistantName_SC = new Subcomponent("h3", "assistant_name", "assist-name");
let chatDiv_SC = new Subcomponent("div", "chat_div", "chat-div");
    let chatBox_SC = new Subcomponent("div", "chat_box", "chat-box");
        let chatBoxMsg_SC = new Subcomponent("h2", "chat_message", "chat-msg");

export async function initShowTime(){
    let avatar_Fred = ASSISTANT_LIST.Fredrick;
    $(document.body).append(avatar_Fred.generate());
    avatar_Fred.display("60%");
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
    avatar_Fred.switchExpression("default")
    .then(()=>typeMessage("Hmm..."))
    // .then(async ()=>{await dialogueLB()})
    // .then(()=>avatar_Fred.switchExpression("shocked"))
    // .then(()=>typeMessage("You must be a fellow historian, yes?"))
    // .then(async()=>{await dialogueLB()})
    // .then(()=>avatar_Fred.switchExpression("open"))
    // .then(()=>avatar_Fred.shake())
    // .then(async()=>{await pause(500)})
    // .then(()=>typeMessage("Oh, no!  Where are my manners?"))
    // .then(async()=>{await dialogueLB()})
    // .then(()=>typeMessage("I'm Fredrick, it's a pleasure to make your aquaintance!"))
    .then(async()=>{await dialogueLB()})
    .then(()=>avatar_Fred.switchExpression("smile"))
    .then(async ()=>{
        $('#chat_div').prepend(assistantName_SC.createElement([{attr:"", content:"", innerText:"Fredrick"}]))
        $('#' + assistantName_SC.id).animate({left: "18%", opacity: 1}, 1000)
        await pause(850);
        $('#' + assistantName_SC.id).css("font-style", "normal")
        await pause(150);
    })
    .then(()=>beginConversation("H"))
}
