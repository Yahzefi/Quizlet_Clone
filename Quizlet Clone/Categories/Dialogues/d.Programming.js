//                                      ||   IMPORTS   ||                                      \\
import { create_dBox } from "../../Initialization/Assistants.js";
import { pause } from "../c_Programming/main.Programming.js";
import { Subcomponent } from "../../Initialization/Subcomponent.js";
import { typeMessage } from "../c_Programming/showtime.js";

//                                      ||   SUBCOMPONENTS   ||                                      \\
let userName_SC = new Subcomponent("h3", "d_userName", "d-name");
let dialogueInstructions_SC = new Subcomponent("h3", "d_instructions", "d-instruct");
let dialogueChoice_A_SC = new Subcomponent("p", "dChoice_A", "d-choice");
let dialogueChoice_B_SC = new Subcomponent("p", "dChoice_B", "d-choice");
let dialogueChoice_C_SC = new Subcomponent("p", "dChoice_C", "d-choice");
let continueMessage_SC = new Subcomponent("p", "continue_message", "cont-msg");

//                                      ||   GLOBAL VARIABLES   ||                                      \\

var logisOver = true;
var logNum = 0;

//                                      ||   INITIAL FUNCTION   ||                                      \\
export function firstReply(){
    create_dBox()
    .then(async(dBox)=>{
        await pause(500);
        $('#white_chatDiv').append(dBox);
        $('#dialogue_box').css("display", "none");
        $('#dialogue_box').slideDown(1000);
        await pause(1000);
        $('#dialogue_box').append(userName_SC.createElement([{attr:"",content:"",innerText:"User"}]));
        $('#dialogue_box').append(dialogueInstructions_SC.createElement());
        $('#dialogue_box').append(dialogueChoice_A_SC.createElement());
        $('#dialogue_box').append(dialogueChoice_B_SC.createElement());
        $('#dialogue_box').append(dialogueChoice_C_SC.createElement());
        $('#dialogue_box').append(continueMessage_SC.createElement([{attr:"",content:"",innerText:"Press any key to continue.."}]))
        
        $('#' + dialogueInstructions_SC.id).text("Choose Your Reply")
        $('#' + dialogueChoice_A_SC.id).text("\"It's nice to meet you too!\"");
        $('#' + dialogueChoice_B_SC.id).text("\"Uh...\"");
        $('#' + dialogueChoice_C_SC.id).text("\"Please leave me alone...\"");

        $('#' + dialogueInstructions_SC.id).fadeIn(500);
        await pause(500);
        $('#' + dialogueChoice_A_SC.id).slideDown(1000);
        await pause(500);
        $('#' + dialogueChoice_B_SC.id).slideDown(1000);
        await pause(500);
        $('#' + dialogueChoice_C_SC.id).slideDown(1000);
        await pause(1000);

        $('#' + dialogueChoice_A_SC.id).click(async()=>{
            $('#black_chatBox').animate({opacity: 0.25}, 500)
            await pause(500);
            $('#'+ userName_SC.id).css("display", "block");
            $('#' + dialogueInstructions_SC.id).css("display", "none");
            $('#' + dialogueChoice_B_SC.id).css("display", "none");
            $('#' + dialogueChoice_C_SC.id).css("display", "none");
            $('#' + dialogueChoice_A_SC.id).css({
                color: "white",
                cursor: "default",
                textAlign: "left",
                position: "relative",
                left: "5%",
                top: "5%",
                fontSize: "28px"
            })
            $('#' + dialogueChoice_A_SC.id).hover(function(){$(this).css({color:"white", cursor: "default"})})
            maintainDialogue("A");
        })
        $('#' + dialogueChoice_B_SC.id).click(()=>{
            //
        })
        $('#' + dialogueChoice_C_SC.id).click(()=>{
            //
        })
    })
}

function maintainDialogue(responseChar){
    logisOver = false;
    var isListening = false;
    let msgInterval = setInterval(()=>{
        let contMsg = document.getElementById("continue_message");
        if(contMsg.style.display === "none"){
            contMsg.style.display = "block";
        } else {
            contMsg.style.display = "none";
        }
    }, 750)
    $('#continue_message').css("visibility", "hidden");
    let statusUpdate = function(){
        if(!logisOver){
            continueDialogue(responseChar)
            .then((data)=>{
                if(data === 0 && !isListening){
                    document.addEventListener("keyup", statusUpdate);
                    isListening = true;
                } else if(data === -1){
                    endDialogue(msgInterval);
                    document.removeEventListener("keyup", statusUpdate);
                    statusUpdate();
                }
            })
        } else {
            alert("End");
        }
    }
    if(!logisOver && logNum === 0){
        statusUpdate()
    }
}

function endDialogue(msgInterval){
    clearInterval(msgInterval);
    $('#dialogue_box').children().css("display", "none");
    logisOver = true;
}

async function continueDialogue(responseChar){
    $('#continue_message').css("visibility", "hidden");
    $('#dChoice_' + responseChar).css("display", "none");
    $('#d_userName').css("display", "none");
    $('#dialogue_box').animate({opacity: 0.25}, 500)
    $('#black_chatBox').animate({opacity: 1}, 500)
    await pause(500);
    return nextLine(logNum)
    .then(async(data)=>{
        await pause(500);
        $('#continue_message').css("visibility", "");
        $('#dialogue_box').animate({opacity: 1}, 500);
        $('#black_chatBox').animate({opacity: 0.25},500)
        await pause(500);
        console.log(data);
        return data;
    })
}

function nextLine(d_Num){
    return new Promise((resolve)=>{
        let update;
        switch(d_Num){
            case 0:
                $('#chat_message').text("");
                typeMessage("Oh, you're nice?  Well that's a pleasant surprise!")
                .then(()=>{
                    logNum++;
                    update = 0;
                    console.log(update);
                    resolve(update);
                })
                break;
            case 1:
                $("#chat_message").text("");
                typeMessage("Oh okay, that's fine.  See ya around.")
                .then(async()=>{
                    await pause(500);
                    $('#chat_message').text("");
                })
                .then(()=>{
                    logNum++;
                    update = -1;
                    console.log(update);
                    resolve(update);
                })
                break;
            default:
                console.log("Error");
        }
    })
}



