import { pause } from "../../c_Redirect.js";
import { typeMessage, dialogueLB } from "../../../Initialization/Assistants.js";
import { ASSISTANT_LIST } from "../../../Initialization/on_Init.js";

let avatar = ASSISTANT_LIST.Tom;

export function nextLine_Prog(branchNum, d_Num, responseChar){
    return new Promise((resolve)=>{
        let logUpdate;
        let introScript = function(){
            switch(d_Num){
                case 0:
                    console.log("Programming");
                    $('#dChoice_A').text("\"It's nice to meet you too!\"");
                    $('#dChoice_B').text("\"Uh...\"");
                    $('#dChoice_C').text("\"Please leave me alone...\"");
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
                        .then(()=>typeMessage("Oh, you're nice?  Well that's a pleasant surprise!"))
                        .then(()=>{
                            logUpdate = 0;
                            resolve(logUpdate);
                        })
                        break;
                    case 1:
                        avatar.switchExpression("open")
                        .then(()=>typeMessage("You have no idea how rare that is nowadays..."))
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("So then..."))
                        .then(async()=>{await dialogueLB();})
                        .then(()=>typeMessage("Are you ready to start coding?"))
                        .then(async()=>{await dialogueLB();})
                        .then(()=>{
                            logUpdate = 0;
                            resolve(logUpdate);
                        })
                        break;
                    case 2:
                        $('#d_instructions').text("");
                        $('#dChoice_C').css({fontSize: "54px", letterSpacing: "10px", position: "relative", top: "20%", left: "0%"})
                        $('#dChoice_A').text("");
                        $('#dChoice_B').text("");
                        $('#dChoice_C').text("Click to Continue");
                        logUpdate = 1;
                        resolve(logUpdate);
                        break;
                    default:
                        throw new Error("Line Not Found.")
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("shocked")
                        .then(()=>typeMessage("Oh gosh, d-did I break you?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("Are you broken?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("Don't worry, I can fix this."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("All you need is the awesome power of knowledge, right?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("So then, let's begin!"))
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
                        .then(()=>typeMessage("Wow...  Seriously?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>typeMessage("That kind of attitude won't get you very far, but..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("I guess I'll have to accept it as it is, right?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("If you change your mind, click the icon at the top left of the screen."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("Good luck on your journey!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>{
                            logUpdate = 0;
                            resolve(logUpdate);
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
                    resolve(logUpdate)
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
