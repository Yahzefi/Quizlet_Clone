import { Subcomponent } from "../../Initialization/Subcomponent.js"
import { ASSISTANT_LIST } from "../../Initialization/on_Init.js"
import { pause } from "../c_Redirect.js"
import { typeMessage, dialogueLB } from "../../Initialization/Assistants.js"
import { beginConversation } from "../Dialogues/d.Main.js";
import { pageIntroduction } from "../Dialogues/Math/d_math.script.js"

let assistantName_SC = new Subcomponent("h3", "assistant_name", "assist-name");
let chatDiv_SC = new Subcomponent("div", "chat_div", "chat-div");
    let chatBox_SC = new Subcomponent("div", "chat_box", "chat-box");
        let chatBoxMsg_SC = new Subcomponent("h2", "chat_message", "chat-msg");

let introCover_SC = new Subcomponent("div", "intro_cover", 'int-cover');

export async function initShowTime(){
    // Extend Primary container && then animate it to slide upwards
    //Reveal Assistant
    let avatar_Math = ASSISTANT_LIST.Kinsley;
    $(document.body).append(avatar_Math.generate());
    avatar_Math.display("60%");
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
    avatar_Math.switchExpression("open")
    .then(()=>typeMessage("Greetings!"))
    .then(async ()=>{await dialogueLB()})
    // .then(()=>typeMessage("The name's Kinsley."))
    // .then(async()=>{await dialogueLB()})
    // .then(async ()=>{
    //     $('#chat_div').prepend(assistantName_SC.createElement([{attr:"", content:"", innerText:"Kinsley"}]))
    //     $('#' + assistantName_SC.id).animate({left: "18%", opacity: 1}, 1000)
    //     await pause(850);
    //     $('#' + assistantName_SC.id).css("font-style", "normal")
    //     await pause(150);
    // })
    // .then(()=>avatar_Math.switchExpression("smile"))
    // .then(()=>typeMessage("You must be here for the Algorithms conference, yes?"))
    // .then(async()=>{await dialogueLB()})
    // .then(()=>avatar_Math.switchExpression("shocked"))
    // .then(()=>avatar_Math.shake())
    // .then(()=>typeMessage("Wait, what do you mean \"No\"?!"))
    // .then(async()=>{await dialogueLB()})
    // .then(()=>avatar_Math.switchExpression("default"))
    // .then(()=>typeMessage("Ah, I see.  So you're one of the site's new students?"))
    // .then(async()=>{await dialogueLB()})
    // .then(()=>typeMessage("I'm terribly sorry for the misunderstanding, things have been rather hectic recently."))
    // .then(async()=>{await dialogueLB()})
    // .then(async()=>{await pause(500)})
    .then(()=>beginConversation("M"))
}

export function endLine_Math(){
    $(document.body).prepend(introCover_SC.createElement());
    $('#page_navigation').children().first().css({position: "relative", backgroundColor: "grey", padding: "12px", borderRadius: "50%"})
    pageIntroduction();
}
