//                                      ||   IMPORTS   ||                                      \\
import { create_dBox } from "../../Initialization/Assistants.js"
import { pause, pageIntroduction, anchorRedirect } from "../c_Redirect.js"
import { Subcomponent } from "../../Initialization/Subcomponent.js";
import { nextLine_Prog } from "../Dialogues/Programming/d_prog.script.js";
import { nextLine_Hist } from "../Dialogues/History/d_hist.script.js";
import { nextLine_Span } from "../Dialogues/Spanish/d_span.script.js";
import { nextLine_Math } from "../Dialogues/Math/d_math.script.js";
import { ASSISTANT_LIST } from "../../Initialization/on_Init.js";



//                                      ||   SUBCOMPONENTS   ||                                      \\
let userName_SC = new Subcomponent("h3", "d_userName", "d-name");
let dialogueInstructions_SC = new Subcomponent("h3", "d_instructions", "d-instruct");
let dialogueChoice_A_SC = new Subcomponent("p", "dChoice_A", "d-choice");
let dialogueChoice_B_SC = new Subcomponent("p", "dChoice_B", "d-choice");
let dialogueChoice_C_SC = new Subcomponent("p", "dChoice_C", "d-choice");
let continueMessage_SC = new Subcomponent("p", "continue_message", "cont-msg");
let introCover_SC = new Subcomponent("div", "intro_cover", 'int-cover');

//                                      ||   CONVERSATION OBJECT   ||                                      \\

let Conversation = {
    hasBegun: false,
    hasListener: false,
    branchIsOver: false,
    isFinished: false,
    branchNo: 0,
    caseNum: 0
}

//                                      ||   ASSISTANTS   ||                                      \\

const CURRENT_CATEGORY = {
    isProgramming: ASSISTANT_LIST.Tom.hasIntroduced,
    isMath: ASSISTANT_LIST.Kinsley.hasIntroduced,
    isHistory: ASSISTANT_LIST.Fredrick.hasIntroduced,
    isSpanish: ASSISTANT_LIST.Damien.hasIntroduced
}

//                                      ||   INITIAL FUNCTION   ||                                      \\
export function beginConversation(categoryChar){
    create_dBox()
    .then(async(dBox)=>{
        await pause(500);
        $('#chat_div').append(dBox);
        $('#dialogue_box').css("display", "none");
        $('#dialogue_box').slideDown(500);
        await pause(500);
        $('#dialogue_box').append(userName_SC.createElement([{attr:"",content:"",innerText:"User"}]));
        $('#dialogue_box').append(dialogueInstructions_SC.createElement([{attr:"",content:"",innerText:"Choose Your Reply"}]));
        $('#dialogue_box').append(dialogueChoice_A_SC.createElement());
        $('#dialogue_box').append(dialogueChoice_B_SC.createElement());
        $('#dialogue_box').append(dialogueChoice_C_SC.createElement());
        $('#dialogue_box').append(continueMessage_SC.createElement([{attr:"",content:"",innerText:"Press any key to continue.."}]))
        
        if(categoryChar === "P"){
            CURRENT_CATEGORY.isProgramming = true;
            maintainDialogue("P");
        } else if(categoryChar === "H"){
            CURRENT_CATEGORY.isHistory = true;
            maintainDialogue("H");
        } else if(categoryChar === "S"){
            CURRENT_CATEGORY.isSpanish = true;
            maintainDialogue("S");
        } else if(categoryChar === "M"){
            CURRENT_CATEGORY.isMath = true;
            maintainDialogue("M");
        }
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
                Conversation.caseNum++;
                // IF DATA == 0 ... SEQUENCE OF DIALOGUE AFTER CHOICE HAS BEGUN
                if(data === 0 && !Conversation.hasListener){
                    document.addEventListener("keyup", statusUpdate);
                    Conversation.hasListener = true;
                // IF DATA == 1 ... SEQUENCE HAS REACHED END OF DIALOGUE BEFORE ADDITIONAL CHOICE
                } else if(data === 1) {
                    if(Conversation.hasListener){
                        document.removeEventListener("keyup", statusUpdate);
                        Conversation.hasListener = false;
                    }
                    displayChoices()
                    .then(()=>{
                        $('#dialogue_box').click((e)=>{
                            clearInterval(msgInterval);
                            $('#dialogue_box').off('click');
                            switch(e.target.id){
                                case "dChoice_A":
                                    Conversation.branchNo++;
                                    Conversation.caseNum = 0;
                                    Conversation.branchIsOver = true;
                                    userSpeak("A")
                                    .then(()=>{
                                        maintainDialogue("A")
                                    })
                                    break;
                                case "dChoice_B":
                                    Conversation.branchIsOver = true;
                                    Conversation.branchNo += 1;
                                    Conversation.caseNum = 0;
                                    userSpeak("B").then(()=>{maintainDialogue("B")});
                                    break;
                                case "dChoice_C":
                                    Conversation.branchIsOver = true;
                                    Conversation.branchNo++;
                                    Conversation.caseNum = 0;
                                    userSpeak("C").then(()=>maintainDialogue("C"))
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
        } else if(Conversation.isFinished) {
            console.log("End");
            let prog_avatar = document.getElementById("program_assistant")
            let hist_avatar = document.getElementById("history_assistant")
            let span_avatar = document.getElementById("spanish_assistant")
            let math_avatar = document.getElementById("math_assistant")
            if(CURRENT_CATEGORY.isProgramming){
                if(prog_avatar){
                    endLine("programming")
                } else {
                    console.log("prog c")
                }
            } else if(CURRENT_CATEGORY.isHistory){
                if(hist_avatar){
                    endLine("history");
                } else {
                    console.log("hist c")
                }
            } else if(CURRENT_CATEGORY.isSpanish){
                if(span_avatar){
                    endLine("spanish");
                } else {
                    console.log("span c")
                }
            } else if(CURRENT_CATEGORY.isMath){
                if(math_avatar){
                    endLine("math");
                } else {
                    console.log("math c")
                }
            }
        }
    }
    if(!Conversation.hasBegun && !Conversation.isFinished){
        Conversation.hasBegun = true;
        statusUpdate()
    } 
    if(!Conversation.isFinished && Conversation.branchIsOver){
        Conversation.branchIsOver = false;
        statusUpdate()
    }
}

async function continueDialogue(responseChar){
    if(responseChar === "P"){
        return nextLine_Prog(Conversation.branchNo, Conversation.caseNum, responseChar)
    } else if(responseChar === "H"){
        return nextLine_Hist(Conversation.branchNo, Conversation.caseNum, responseChar)
    } else if(responseChar === "S"){
        return nextLine_Span(Conversation.branchNo, Conversation.caseNum, responseChar)
    } else if(responseChar === "M"){
        return nextLine_Math(Conversation.branchNo, Conversation.caseNum, responseChar)
    } else {
        $('#continue_message').css("visibility", "hidden");
        $('#d_userName').css("display", "none");
        $('#dialogue_box').animate({opacity: 0.25}, 500)
        $('#black_chatBox').animate({opacity: 1}, 500)
        $('#dChoice_' + responseChar).fadeOut(500);
        await pause(500);
        $('#dChoice_' + responseChar).remove();
        return new Promise(async(resolve)=>{
            // Conversation.caseNum++;
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
            if(CURRENT_CATEGORY.isProgramming){
                nextLine_Prog(Conversation.branchNo, Conversation.caseNum, responseChar)
                .then(async(data)=>{
                    await pause(500);
                    if(data == 0){
                        $('#continue_message').css("visibility", "");
                    }
                    $('#dialogue_box').animate({opacity: 1}, 250);
                    $('#black_chatBox').animate({opacity: 0.25}, 250)
                    resolve(data)
                })
            } else if(CURRENT_CATEGORY.isMath){
                nextLine_Math(Conversation.branchNo, Conversation.caseNum, responseChar)
                .then(async(data)=>{
                    await pause(500);
                    if(data == 0){
                        $('#continue_message').css("visibility", "");
                    }
                    $('#dialogue_box').animate({opacity: 1}, 250);
                    $('#black_chatBox').animate({opacity: 0.25}, 250)
                    resolve(data)
                })
            } else if(CURRENT_CATEGORY.isHistory){
                nextLine_Hist(Conversation.branchNo, Conversation.caseNum, responseChar)
                .then(async(data)=>{
                    await pause(500);
                    if(data == 0){
                        $('#continue_message').css("visibility", "");
                    }
                    $('#dialogue_box').animate({opacity: 1}, 250);
                    $('#black_chatBox').animate({opacity: 0.25}, 250)
                    resolve(data)
                })
            } else if(CURRENT_CATEGORY.isSpanish){
                nextLine_Span(Conversation.branchNo, Conversation.caseNum, responseChar)
                .then(async(data)=>{
                    await pause(500);
                    if(data == 0){
                        $('#continue_message').css("visibility", "");
                    }
                    $('#dialogue_box').animate({opacity: 1}, 250);
                    $('#black_chatBox').animate({opacity: 0.25}, 250)
                    resolve(data)
                })
            }
        })
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
        $('#' + dialogueChoice_A_SC.id).fadeIn(1000);
        await pause(500);
        $('#' + dialogueChoice_B_SC.id).fadeIn(1000);
        await pause(500);
        $('#' + dialogueChoice_C_SC.id).fadeIn(1000);
        await pause(1000);
        resolve();
    })
}

function endDialogue(msgInterval){
    clearInterval(msgInterval);
    $('#dialogue_box').children().css("display", "none");
    Conversation.isFinished = true;
}

async function endLine(category){
    let avatar;
    if(category === "math"){
        avatar = ASSISTANT_LIST.Kinsley;
    } else if(category === "history"){
        avatar = ASSISTANT_LIST.Fredrick;
    } else if(category === "spanish"){
        avatar = ASSISTANT_LIST.Damien;
    } else if(category = "programming"){
        avatar = ASSISTANT_LIST.Tom;
    }
    let x = 0;

    $(document.body).prepend(introCover_SC.createElement());
    $('#' + introCover_SC.id).fadeIn(1000)
    $('#dialogue_box').fadeOut(1000);
    await pause(1000)
    .then(()=>{$('#page_navigation').children().first().css({position: "relative", backgroundColor: "grey", padding: "12px", borderRadius: "50%"})})
    .then(()=>pageIntroduction(category, x))
    .then(()=>{
        x++;
        $('#page_navigation').children().first().css({position: "", backgroundColor: "", padding: "", borderRadius: ""})
        $('#page_navigation').children().first().next().css({position: "relative", backgroundColor: "grey", padding: "12px", borderRadius: "50%"})
    })
    .then(()=>pageIntroduction(category, x))
    .then(()=>{
        x++;
        $('#page_navigation').children().first().next().css({position: "", backgroundColor: "", padding: "", borderRadius: ""})
        $('#page_navigation').children().first().next().next().css({position: "relative", backgroundColor: "grey", padding: "12px", borderRadius: "50%"})
    })
    .then(()=>pageIntroduction(category, x))
    .then(()=>{
        x++;
        $('#page_navigation').children().first().next().next().css({position: "", backgroundColor: "", padding: "", borderRadius: ""})
        $('#page_navigation').children().first().next().next().next().css({position: "relative", backgroundColor: "grey", padding: "12px", borderRadius: "50%"})
    })
    .then(()=>pageIntroduction(category, x))
    .then(()=>{
        x++;
        $('#page_navigation').children().first().next().next().next().css({position: "", backgroundColor: "", padding: "", borderRadius: ""})
        $('#page_navigation').children().first().next().next().next().next().css({position: "relative", backgroundColor: "grey", padding: "12px", borderRadius: "50%"})
    })
    .then(()=>pageIntroduction(category, x))
    .then(()=>x++)
    .then(()=>{
        $('#page_navigation').children().first().next().next().next().next().css({position:"", backgroundColor:"", padding:"", borderRadius:""})
        pageIntroduction(category, x)
        .then(async()=>{
            $('#' + avatar.id).animate({right: "100%"}, 1000)
            await pause(1000);
            $('#chat_div').fadeOut(500)
            await pause(500);
            $(document.body).css("overflow", "visible");
            console.log("end");
        })
        .then(async()=>{
            $('#' + introCover_SC.id).fadeOut(500)
            await pause(500)
            $('#' + introCover_SC.id).remove();
            $('#page_navigation a').click(async(e)=>{
                $('#banner_div').slideUp(750)
                $('#header_container h2').slideUp(750)
                $('#page_navigation').slideUp(750)
                await pause(750)
                $('#page_navigation').css({backgroundColor:"grey", padding: "12px"})
                $('#page_navigation').slideDown(750)
                await pause(750);
                anchorRedirect(e, category);
            })
        })
    })
}
