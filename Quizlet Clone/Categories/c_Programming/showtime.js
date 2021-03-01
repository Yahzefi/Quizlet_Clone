//                                      ||   IMPORTS   ||                                      \\
import { pause } from "./main.Programming.js";
import { Subcomponent } from "../../Initialization/Subcomponent.js";
import { ASSISTANT_LIST } from "../../Initialization/on_Init.js";
import { firstReply } from "../Dialogues/d.Programming.js";

//                                      ||   GLOBAL VARIABLES   ||                                      \\
const BANNER = document.getElementById('banner_image');
let avatar_Tom = ASSISTANT_LIST.Tom;

//                                      ||   SUBCOMPONENTS   ||                                      \\
let assistantName_SC = new Subcomponent("h3", "assistant_name", "assist-name");
let chatBox_SC = new Subcomponent("div", "chat_box", "chat-box");
    let chatBoxMsg_SC = new Subcomponent("h2", "chat_message", "chat-msg");
let whiteChatDiv_SC = new Subcomponent("div", "white_chatDiv", "white-chat");
    let blackChatBox_SC = new Subcomponent("div", "black_chatBox", "b-chat-box");


export function initShowTime(){
    // console.log(localStorage.getItem("assistantHasAppeared"));
    // if(localStorage.getItem("assistantHasAppeared") == null){
    //     localStorage.setItem("assistantHasAppeared", true)
    // }
    // let storedValue = localStorage.getItem("assistantHasAppeared");
    // console.log(localStorage.getItem("assistantHasAppeared"));
    // console.log(storedValue);
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
        $(document.body).append(avatar_Tom.generate());
        avatar_Tom.display("60%");
        $('#primary_container').append(chatBox_SC.createElement());
            $('#' + chatBox_SC.id).css("display", "none");
        await pause(1000);
            $('#' + chatBox_SC.id).fadeIn(1000);
        await pause(1000);
        $('#' + chatBox_SC.id).append(chatBoxMsg_SC.createElement());

        // BEGINNING OF DIALOGUE
        avatar_Tom.switchExpression("shocked")
        // .then(()=>avatar_Tom.shake())
        // .then(async()=>{
        //     await pause(250);
        //     typeMessage("W-What?!")
        //     await pause(500);
        // })
        // .then(async ()=>{
        //     await pause(750);
        //     $('#chat_message').text("");
        // })
        // .then(()=>avatar_Tom.switchExpression("default"))
        // .then(()=>typeMessage("Well that's not good..."))
        // .then(async()=>{
        //     await pause(500);
        //     $('#chat_message').text("");
        // })
        // .then(()=>avatar_Tom.switchExpression("open"))
        // .then(()=>typeMessage("Well this is kind of awkward!"))
        // .then(async()=>{
        //     await pause(500);
        //     $('#chat_message').text("");
        // })
        // .then(()=>typeMessage("I'm actually kind of new here, but the other devs had their hands full"))
        // .then(async()=>{
        //     await pause(500);
        //     $('#chat_message').text("");
        // })
        // .then(()=>avatar_Tom.switchExpression("shocked"))
        // .then(()=>avatar_Tom.shake())
        // .then(()=>typeMessage("Wait...  I wonder if..."))
        // .then(async()=>{
        //     await pause(500);
        //     $('#chat_message').text("");
        //     await pause(500);
        // })
        // .then(()=>avatar_Tom.switchExpression("default"))
        // .then(()=>typeMessage("Hold on, I'll be right back!"))
        .then(async()=>{
            await pause(500);
            $('#chat_message').text("");
            $('#' + chatBox_SC.id).fadeOut(1000);
            await pause(1000);
            $('#' + chatBox_SC.id).remove();
            $('#' + avatar_Tom.id).animate({right: "125%"}, 1000);
            await pause(1000);
            $('#' + avatar_Tom.id).remove();
            $('#primary_container').animate({top: "1000px"}, 500);
            await pause(1000);
            $(document.body).css("background-image", "url('https://miro.medium.com/max/1200/1*NXhs15W3eBIuLT9xWFXLcA.jpeg')");
            await pause(1000);
            $(document.body).css("background-image", "url('https://www.thoughtco.com/thmb/mvmMSSC5cnBtqNmQ_hfFSTD7yew=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css-code-in-text-editor--web-page-internet-technology-862672426-5c8455ddc9e77c0001a67650.jpg')");
            await pause(500);
        })
        // END SEQUENCE OF ASSISTANT "CUTSCENE"
        .then(()=>{
            returnElements()
            .then(async()=>{
                $(document.body).append(avatar_Tom.generate());
                $('#' + avatar_Tom.id).css({"z-index": "3", top: "60%", right: "100%"});
                $('#' + avatar_Tom.id).animate({right: "82.5%"}, 1000)
                await pause(1000);
                $('#' + whiteChatDiv_SC.id).css("display", "flex");
                $('#' + whiteChatDiv_SC.id).animate({top: "625px"}, 500)
                await pause(500);
            })
            .then(async()=>{
                avatar_Tom.switchExpression("shocked")
                .then(()=>{
                    $('#' + blackChatBox_SC.id).fadeIn(750);
                })
                await pause(750);
            })
            .then(()=>typeMessage("Wow, I can't believe that actually worked."))
            .then(async()=>{
                await pause(500);
                $('#chat_message').text("");
            })
            // .then(()=>avatar_Tom.switchExpression("open"))
            // .then(()=>typeMessage("All I did was turn it off and turn it back on!  Can you believe that?"))
            // .then(async()=>{
            //     await pause(500);
            //     $('#chat_message').text("");
            // })
            .then(()=>avatar_Tom.switchExpression("smile"))
            .then(()=>typeMessage("Anyway, hello there!  My name's Tom."))
            .then(async()=>{
                await pause(500);
                $('#chat_message').text("");
            })
            .then(async()=>{
                $('#' + whiteChatDiv_SC.id).append(assistantName_SC.createElement([{attr:"",content:"",innerText:"Tom"}]));
                $('#' + assistantName_SC.id).animate({left: "18.5%", opacity: 1}, 1000)
                await pause(825);
                $('#' + assistantName_SC.id).css("font-style", "normal")
                await pause(175);
            })
            .then(()=>avatar_Tom.switchExpression("open"))
            .then(()=>typeMessage("It's a pleasure to meet you!"))
            .then(()=>avatar_Tom.switchExpression("smile"))
            .then(()=>firstReply());
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
        $(BANNER).animate({top: "500px"}, 100)
        $(BANNER).animate({height: "0px"},50)
        $(BANNER).animate({width: "0%"}, 50);
        await pause(200);
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
                $('#' + blackChatBox_SC.id).append(chatBoxMsg_SC.createElement());
        $('#' + whiteChatDiv_SC.id).css("display", "none")
            $('#' + blackChatBox_SC.id).css("display", "none");
        resolve();
    })
}
