//                                      ||   IMPORTS   ||                                      \\
import { pause } from "./main.Programming.js";
import { Subcomponent } from "../../Initialization/Subcomponent.js";
import { Assistant } from "../../Initialization/Assistants.js";

//                                      ||   GLOBAL VARIABLES   ||                                      \\
const BANNER = document.getElementById('banner_image');

//                                      ||   ASSISTANTS   ||                                      \\
var avatar = new Assistant("program_assistant","/Images/Assistants/Programming/programGuy_neutral.png","300px", "400px", "82.5%");

//                                      ||   SUBCOMPONENTS   ||                                      \\
let chatBox_SC = new Subcomponent("div", "chat_box", "chat-box");
    let chatBoxMsg_SC = new Subcomponent("h2", "chat_message", "chat-msg");
let whiteChatDiv_SC = new Subcomponent("div", "white_chatDiv", "white-chat");
    let blackChatBox_SC = new Subcomponent("div", "black_chatBox", "b-chat-box");
        let blackChatBoxMsg_SC = new Subcomponent("h2", "b_chat_message", "b-chat-msg");


export function initShowTime(){
    hideElements()
    .then(async ()=>{
        $(document.body).css("background-image", "url('https://noware.tech/wp-content/uploads/sites/140/2018/10/bluescreen-t-1024x538.jpg')")
        await pause(1000);
    })
    .then(async ()=>{
        $('#primary_container').css("display", "flex");
        $('#primary_container').animate({top: "625px"}, 1000);
        await pause(500);

        // ASSISTANT ARRIVES
        $(document.body).append(avatar.generate());
        avatar.display("60%");
        $('#primary_container').append(chatBox_SC.createElement());
            $('#' + chatBox_SC.id).css("display", "none");
        await pause(1000);
            $('#' + chatBox_SC.id).fadeIn(1000);
        await pause(1000);
        $('#' + chatBox_SC.id).append(chatBoxMsg_SC.createElement());

        // BEGINNING OF DIALOGUE
        avatar.switchExpression("/Images/Assistants/Programming/programGuy_shocked.png")
        .then(()=>typeMessage("chat_message", "W-What?!"))
        .then(async ()=>{
            await pause(500);
            $('#chat_message').text("");
        })
        .then(()=>avatar.switchExpression("/Images/Assistants/Programming/programGuy_neutral.png"))
        .then(()=>typeMessage("chat_message", "Well that's not good..."))
        .then(async()=>{
            await pause(500);
            $('#chat_message').text("");
        })
        .then(()=>avatar.switchExpression("/Images/Assistants/Programming/programGuy_smileOpen.png"))
        .then(()=>typeMessage("chat_message", "Well this is kind of awkward!"))
        .then(async()=>{
            await pause(500);
            $('#chat_message').text("");
        })
        .then(()=>typeMessage("chat_message", "I'm actually kind of new here, but the other devs had their hands full"))
        .then(async()=>{
            await pause(500);
            $('#chat_message').text("");
        })
        .then(()=>avatar.switchExpression("/Images/Assistants/Programming/programGuy_shocked.png"))
        .then(()=>typeMessage("chat_message", "Wait...  I wonder if..."))
        .then(async()=>{
            await pause(500);
            $('#chat_message').text("");
            await pause(1000);
        })
        .then(()=>avatar.switchExpression("/Images/Assistants/Programming/programGuy_neutral.png"))
        .then(()=>typeMessage("chat_message", "Hold on, I'll be right back!"))
        .then(async()=>{
            await pause(500);
            $('#chat_message').text("");
            $('#' + chatBox_SC.id).fadeOut(1000);
            await pause(1000);
            $('#' + avatar.id).animate({right: "125%"}, 1000);
            await pause(1000);
            $('#' + avatar.id).remove();
            $('#primary_container').animate({top: "1000px"}, 500);
            await pause(1500);
            $(document.body).css("background-image", "url('https://miro.medium.com/max/1200/1*NXhs15W3eBIuLT9xWFXLcA.jpeg')");
            await pause(5000);
            $(document.body).css("background-image", "url('https://www.thoughtco.com/thmb/mvmMSSC5cnBtqNmQ_hfFSTD7yew=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css-code-in-text-editor--web-page-internet-technology-862672426-5c8455ddc9e77c0001a67650.jpg')");
            await pause(500);
        })
        // END SEQUENCE OF ASSISTANT "CUTSCENE"
        .then(()=>{
            returnElements()
            .then(async()=>{
                $(document.body).append(avatar.generate());
                $('#' + avatar.id).css({"z-index": "3", top: "60%", right: "100%"});
                $('#' + avatar.id).animate({right: "82.5%"}, 1000)
                await pause(1000);
            })
            .then(()=>avatar.switchExpression("/Images/Assistants/Programming/programGuy_smile.png"))
            .then(()=>typeMessage("b_chat_message", "Wow, I can't believe that actually worked."))
            .then(async()=>{
                await pause(500);
                $('#b_chat_message').text("");
            })
        })
    })
    // RE-ENABLE WEBPAGE SCROLLING
    .then(()=>{
        // $(document.body).css("overflow", "auto")
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
        await pause(500);
        resolve();
    })
}

function typeMessage(box, msg){
    return new Promise(resolve=>{
        let x = 0;
        let chatArr = msg.split("");
        chatArr.join("");
        let splitByLetter = function(){
            if(x < chatArr.length){
                $('#' + box).append(chatArr[x])
                x++;
            } else {
                clearInterval(myInterval);
                resolve();
            }
        }
        let myInterval = setInterval(splitByLetter, 75)
    })
}

function returnElements(){
    return new Promise(async(resolve)=>{
        $('#primary_container').css("height", "1000px");
        $('#primary_container').animate({top: "0px"}, 1000)
        await pause(1000);
        $("#header_container").css("display", "")
        $("#body_container").css("display", "")
        $("#footer_container").css("display", "")
        $(BANNER).css({display: "inline", top: "0px"});
        $(BANNER).animate({width: "90%"}, 1000)
        $(BANNER).animate({height: "300px"}, 1000)
        await pause(1000);
        $('#topic_navBar').slideDown(1000);
        await pause(1000);

        $(document.body).prepend(whiteChatDiv_SC.createElement());
            $('#' + whiteChatDiv_SC.id).append(blackChatBox_SC.createElement());
                $('#' + blackChatBox_SC.id).append(blackChatBoxMsg_SC.createElement());

        $('#' + whiteChatDiv_SC.id).css("display", "flex")
            $('#' + blackChatBox_SC.id).css("display", "none");
        $('#' + whiteChatDiv_SC.id).animate({top: "625px"}, 1000)
            $('#' + blackChatBox_SC.id).fadeIn(1000);
        await pause(1000);
        resolve();
    })
}
