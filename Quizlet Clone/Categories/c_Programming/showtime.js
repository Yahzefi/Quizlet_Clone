import { pause } from "./main.Programming.js";
import { Subcomponent } from "../../Initialization/Subcomponent.js";

const BANNER = document.getElementById('banner_image');
var avatar = new Image(300, 400);
avatar.src = "/Images/Assistants/Programming/programGuy_neutral.png";
$(avatar).css({position: "fixed", right: "82.5%", top: "100%", display: "none"})

let chatBox_SC = new Subcomponent("div", "chat_box", "chat-box");
    let chatBoxMsg_SC = new Subcomponent("h2", "chat_message", "chat-msg");


export function initShowTime(){
    hideElements()
    .then(async ()=>{
        $(document.body).css("background-image", "url('https://noware.tech/wp-content/uploads/sites/140/2018/10/bluescreen-t-1024x538.jpg')")
        await pause(1750);
    })
    .then(async ()=>{
        $('#primary_container').css("display", "flex");
        $('#primary_container').animate({top: "625px"}, 1000);
        await pause(500);
        $(document.body).append(avatar);
        $(avatar).css("display", "");
        $(avatar).animate({top: "60%"}, 1000)
        $('#primary_container').append(chatBox_SC.createElement());
            $('#' + chatBox_SC.id).css("display", "none");
        await pause(1000);
            $('#' + chatBox_SC.id).slideDown(1000);
        await pause(1000);
            $('#' + chatBox_SC.id).append(chatBoxMsg_SC.createElement());
    })
    .then(()=>{
        $(document.body).css("overflow", "auto")
    })
}

function hideElements(){
    return new Promise(async (resolve)=>{
        $(document.body).css("overflow", "");
        $('#showTime_btn').slideUp(1000);
        $('#introMsg_1').fadeOut(1000);
        $('#introMsg_2').fadeOut(1000);
        $('#introMsg_3').fadeOut(1000);
        await pause(1000);
        $(BANNER).css({position: "relative", top: "0px"})
        $(BANNER).animate({top: "500px"}, 1000)
        $(BANNER).animate({height: "0px"},500)
        $(BANNER).animate({width: "0%"}, 500);
        await pause(2000);
        $(BANNER).css("display", "none");
        $('#primary_container').slideUp(1000);
        await pause(1250);
        $('#header_container').css("display", "none");
        $('#body_container').css('display', 'none');
        $('#footer_container').css('display', 'none');
        $('#primary_container').css({top: "1000px", height: "350px"})
        resolve();
    })
}
