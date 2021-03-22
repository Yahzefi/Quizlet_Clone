import { typeMessage, dialogueLB } from "../../../Initialization/Assistants.js"
import { pause } from "../../c_Redirect.js"
import { ASSISTANT_LIST } from "../../../Initialization/on_Init.js"

const avatar = ASSISTANT_LIST.Kinsley;

export function nextLine_Math(branchNum, d_Num, responseChar){
    return new Promise((resolve)=>{
        let logUpdate;
        let introScript = function(){
            switch(d_Num){
                case 0:
                    console.log("Math");
                    $('#dChoice_A').text("\"What's been going on?\"");
                    $('#dChoice_B').text("\"That's unfortunate.  So, uh...\"");
                    $('#dChoice_C').text("\"I don't care.  Let's get this over with, yeah?\"");
                    logUpdate = 1;
                    resolve(logUpdate);
                    break;
                default:
                    throw new Error("Line Not Found");
            }
        }
        let firstBranch = function(){
            if(responseChar === "A"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("shocked")
                        .then(()=>typeMessage("W-Wait, you actually want to know?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("T-That's sure a surprise!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("Even the ones we report these issues to don't seem to care."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("You see, the Math department has never been very popular."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("We've been steadily losing memebers for about two years now, and well..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("I'm kinda the last one left..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(async()=>{await pause(1000)})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("However!  There's no need to fear, because you're here!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("I will entrust my legacy unto you through the resources we've acquired over the years."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("So then, shall we begin?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>{
                            logUpdate = 0
                            resolve(logUpdate)
                        })
                        break;
                    case 1:
                        $('#d_instructions').text("");
                        $('#dChoice_C').css({fontSize: "54px", letterSpacing: "10px", position: "relative", top: "20%", left: "0%"})
                        $('#dChoice_A').text("");
                        $('#dChoice_B').text("");
                        $('#dChoice_C').text("Click to Continue");
                        logUpdate = 1;
                        resolve(logUpdate);
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("open")
                        .then(()=>typeMessage("Ah yes, I probably shouldn't waste a promising student's time."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("Please, allow me to show you around!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>{
                            logUpdate = 0
                            resolve(logUpdate)
                        })
                        break;
                    case 1:
                        $('#d_instructions').text("");
                        $('#dChoice_C').css({fontSize: "54px", letterSpacing: "10px", position: "relative", top: "20%", left: "0%"})
                        $('#dChoice_A').text("");
                        $('#dChoice_B').text("");
                        $('#dChoice_C').text("Click to Continue");
                        logUpdate = 1;
                        resolve(logUpdate);
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "C"){
                switch(d_Num){
                    case 0:
                    avatar.switchExpression("shocked")
                    .then(()=>typeMessage("O-Oh, I see..."))
                    .then(async()=>{await dialogueLB()})
                    .then(()=>avatar.switchExpression("default"))
                    .then(()=>typeMessage("Indeed, I understand."))
                    .then(async()=>{await dialogueLB()})
                    .then(()=>typeMessage("If you require my assistance navigating the page, you need only ask."))
                    .then(async()=>{await dialogueLB()})
                    .then(()=>typeMessage("If such a time comes, click on the icon at the top left of the screen."))
                    .then(async()=>{await dialogueLB()})
                    .then(async()=>{
                        $('#assistant_help').fadeIn(1000);
                        await pause(1000);
                    })
                    .then(()=>typeMessage("Until then..."))
                    .then(async()=>{await dialogueLB()})
                    .then(()=>{
                        logUpdate = 0
                        resolve(logUpdate)
                    })
                    break;
                    case 1:
                        $('#d_instructions').text("");
                        $('#dChoice_C').css({fontSize: "54px", letterSpacing: "10px", position: "relative", top: "20%", left: "0%"})
                        $('#dChoice_A').text("");
                        $('#dChoice_B').text("");
                        $('#dChoice_C').text("Click to Continue");
                        logUpdate = 1;
                        resolve(logUpdate);
                        break;
                        default:
                        throw new Error("Line Not Found")
                }
            }
        }
        let secondBranch = function(){
            switch(d_Num){
                case 0:
                    logUpdate = -1
                    resolve(logUpdate);
                    break;
                default:
                    throw Error("Line Not Found");
            }
        }
        switch(branchNum){
            case 0:
                introScript();
                break;
            case 1:
                firstBranch();
                break;
            case 2:
                secondBranch();
                break;
            default:
                throw new Error("No Branch Found");
        }
    })
}

export function pageIntroduction(){
    console.log("page intro")
}
