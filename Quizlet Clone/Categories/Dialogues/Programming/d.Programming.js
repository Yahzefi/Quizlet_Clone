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

//                                      ||   CONVERSATION OBJECT   ||                                      \\

let Conversation = {
    hasBegun: false,
    hasListener: false,
    branchIsOver: false,
    isFinished: false,
    branchNo: 0,
    caseNum: 0
}

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
        $('#dialogue_box').append(dialogueInstructions_SC.createElement([{attr:"",content:"",innerText:"Choose Your Reply"}]));
        $('#dialogue_box').append(dialogueChoice_A_SC.createElement());
        $('#dialogue_box').append(dialogueChoice_B_SC.createElement());
        $('#dialogue_box').append(dialogueChoice_C_SC.createElement());
        $('#dialogue_box').append(continueMessage_SC.createElement([{attr:"",content:"",innerText:"Press any key to continue.."}]))
        
        maintainDialogue("Z");
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
        if(!Conversation.isFinished){
            continueDialogue(responseChar)
            .then((data)=>{
                // IF DATA == 0 ... SEQUENCE OF DIALOGUE AFTER CHOICE HAS BEGUN
                if(data === 0 && !Conversation.hasListener){
                    if(Conversation.branchIsOver){
                        Conversation.branchIsOver = false;
                    }
                    document.addEventListener("keyup", statusUpdate);
                    Conversation.hasListener = true;
                // IF DATA == 1 ... SEQUENCE HAS REACHED END OF DIALOGUE BEFORE ADDITIONAL CHOICE
                } else if(data === 1) {
                    document.removeEventListener("keyup", statusUpdate);
                    Conversation.hasListener = false;
                    // clearInterval(msgInterval);
                    displayChoices()
                    .then(()=>{
                        $('#dialogue_box').click((e)=>{
                            switch(e.target.id){
                                case "dChoice_A":
                                    Conversation.branchNo++;
                                    Conversation.caseNum = 0;
                                    userSpeak("A").then(()=>statusUpdate())
                                    // PUT IF STATEMENT AT TOP OF MAINTAIN FUNCTION TO SEE IF YOU CAN CHECK A BOOLEAN FOR IF BRANCH IS OVER TO THEN RUN STATUS UPDATE THEREBY BYPASSING THE INTERVAL AS WELL AS PASSING THE CHARACTER PARAMETER
                                    break;
                                case "dChoice_B":
                                    console.log("B");
                                    
                                    Conversation.branchIsOver = true;
                                    Conversation.branchNo += 1;
                                    Conversation.caseNum = 0;
                                    console.log(Conversation.branchNo);
                                    userSpeak("B").then(()=>{maintainDialogue("B")});
                                    break;
                                case "dChoice_C":
                                    Conversation.branchIsOver = true;
                                    Conversation.branchNo++;
                                    Conversation.caseNum = 0;
                                    maintainDialogue("C");
                                    break;
                                default:
                                    break;
                            }
                        })
                    })
                // IF DATA == -1 ... THE CONVERSATION HAS CONCLUDED
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
    if(!Conversation.hasBegun && !Conversation.isFinished){
        Conversation.hasBegun = true;
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
    Conversation.isFinished = true;
}

async function continueDialogue(responseChar){

    if(responseChar === "Z"){
        return nextLine(Conversation.branchNo, Conversation.caseNum, responseChar)
    } else {
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
        let update =  nextLine(Conversation.branchNo, Conversation.caseNum, responseChar)
        .then(async(data)=>{
            Conversation.caseNum++;
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
}
