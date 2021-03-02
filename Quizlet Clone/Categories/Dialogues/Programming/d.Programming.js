//                                      ||   IMPORTS   ||                                      \\
import { create_dBox } from "../../../Initialization/Assistants.js";
import { pause } from "../../c_Programming/main.Programming.js";
import { Subcomponent } from "../../../Initialization/Subcomponent.js";
import { nextLine } from "../Programming/d_prog.script.js";


//                                      ||   SUBCOMPONENTS   ||                                      \\
let userName_SC = new Subcomponent("h3", "d_userName", "d-name");
let dialogueInstructions_SC = new Subcomponent("h3", "d_instructions", "d-instruct");
let dialogueChoice_A_SC = new Subcomponent("p", "dChoice_A", "d-choice");
let dialogueChoice_B_SC = new Subcomponent("p", "dChoice_B", "d-choice");
let dialogueChoice_C_SC = new Subcomponent("p", "dChoice_C", "d-choice");
let continueMessage_SC = new Subcomponent("p", "continue_message", "cont-msg");

//                                      ||   GLOBAL VARIABLES   ||                                      \\

var isListening = false;
var lineIsOver = false;
var logisOver = false;
var branchNo = 1;
var logNum = 0;

//                                      ||   INITIAL FUNCTION   ||                                      \\
export function beginConversation(){
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

        $('#black_chatBox').animate({opacity: 0.25}, 500)
        await pause(500);
        $('#' + dialogueInstructions_SC.id).fadeIn(500);
        await pause(500);
        $('#' + dialogueChoice_A_SC.id).slideDown(1000);
        await pause(500);
        $('#' + dialogueChoice_B_SC.id).slideDown(1000);
        await pause(500);
        $('#' + dialogueChoice_C_SC.id).slideDown(1000);
        await pause(1000);

        $('#' + dialogueChoice_A_SC.id).click(()=>{
            $('#chat_message').text("");
            userSpeak("A")
            .then(()=>maintainDialogue("A"));
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
        $('#chat_message').text("");
        if(!logisOver){
            if(lineIsOver){
                lineIsOver = false;
            }
            continueDialogue(responseChar)
            .then((data)=>{
                if(data === 0 && !isListening){
                    document.addEventListener("keyup", statusUpdate);
                    isListening = true;
                } else if(data === 1) {
                    document.removeEventListener("keyup", statusUpdate);
                    clearInterval(msgInterval);
                    displayChoices(responseChar)
                    .then(()=>{
                        $('#dialogue_box').click((e)=>{
                            switch(e.target.id){
                                case "dChoice_A":
                                    lineIsOver = true;
                                    branchNo++;
                                    logNum = 1;
                                    userSpeak("A").then(()=>maintainDialogue("A"));
                                    break;
                                case "dChoice_B":
                                    lineIsOver = true;
                                    branchNo++;
                                    logNum = 1;
                                    maintainDialogue("B");
                                    break;
                                case "dChoice_C":
                                    lineIsOver = true;
                                    branchNo++;
                                    logNum = 1;
                                    maintainDialogue("C");
                                    break;
                                default:
                                    break;
                            }
                        })
                    })
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
    if(!logisOver && logNum === 0 || !logisOver && lineIsOver){
        statusUpdate()
    }
}

function userSpeak(responseChar){
    return new Promise((resolve)=>{
        $('#'+ userName_SC.id).css("display", "block");
        $('#' + dialogueInstructions_SC.id).css("display", "none");
        if(responseChar === "A"){
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
        } else if(responseChar === "B"){
            $('#' + dialogueChoice_A_SC.id).css("display", "none");
            $('#' + dialogueChoice_C_SC.id).css("display", "none");
            $('#' + dialogueChoice_B_SC.id).css({
                color: "white",
                cursor: "default",
                textAlign: "left",
                position: "relative",
                left: "5%",
                top: "5%",
                fontSize: "28px"
            })
            $('#' + dialogueChoice_B_SC.id).hover(function(){$(this).css({color:"white", cursor: "default"})})
        } else if(responseChar === "C"){
            $('#' + dialogueChoice_A_SC.id).css("display", "none");
            $('#' + dialogueChoice_B_SC.id).css("display", "none");
            $('#' + dialogueChoice_C_SC.id).css({
                color: "white",
                cursor: "default",
                textAlign: "left",
                position: "relative",
                left: "5%",
                top: "5%",
                fontSize: "28px"
            })
            $('#' + dialogueChoice_C_SC.id).hover(function(){$(this).css({color:"white", cursor: "default"})})
        }
        resolve();
    })
}

function displayChoices(){
    return new Promise(async(resolve)=>{
        $('#black_chatBox').animate({opacity: 0.25}, 500)
        await pause(500);
        $('#' + dialogueInstructions_SC.id).fadeIn(500);
        await pause(500);
        $('#' + dialogueChoice_A_SC.id).slideDown(1000);
        await pause(500);
        $('#' + dialogueChoice_B_SC.id).slideDown(1000);
        await pause(500);
        $('#' + dialogueChoice_C_SC.id).slideDown(1000);
        await pause(1000);
        resolve();
    })
}

function endDialogue(msgInterval){
    clearInterval(msgInterval);
    $('#dialogue_box').children().css("display", "none");
    logisOver = true;
}

async function continueDialogue(responseChar){
    $('#continue_message').css("visibility", "hidden");
    $('#d_userName').css("display", "none");
    $('#dialogue_box').animate({opacity: 0.25}, 500)
    $('#black_chatBox').animate({opacity: 1}, 500)
    await pause(500);
    $('#dChoice_' + responseChar).fadeOut(500);
    await pause(500);
    $('#dChoice_' + responseChar).remove();
    if(responseChar === "A"){
        let choice = dialogueChoice_A_SC.createElement();
        $('#d_instructions').after(choice);
    } else if(responseChar === "B"){
        let choice = dialogueChoice_B_SC.createElement();
        $('#' + dialogueChoice_A_SC.id).after(choice);
    } else if(responseChar === "C"){
        let choice = dialogueChoice_C_SC.createElement();
        $('#' + dialogueChoice_B_SC.id).after(choice);
    }
    let update =  nextLine(branchNo, logNum, responseChar)
    .then(async(data)=>{
        logNum++;
        await pause(500);
        if(data == 0){
            $('#continue_message').css("visibility", "");
        }
        $('#dialogue_box').animate({opacity: 1}, 500);
        $('#black_chatBox').animate({opacity: 0.25},500)
        await pause(500);
        return data;
    })
    return update;
}





