import { pause } from "../../c_Redirect.js";
import { typeMessage, dialogueLB } from "../../c_Programming/showtime.js"
;import { ASSISTANT_LIST } from "../../../Initialization/on_Init.js";

let avatar = ASSISTANT_LIST.Tom;

export function nextLine_Prog(branchNum, d_Num, responseChar){
    return new Promise((resolve)=>{
        let logUpdate;
        let introScript = function(){
            switch(d_Num){
                case 0:
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
                        .then(()=>{
                            logUpdate = 0;
                            resolve(logUpdate);
                        })
                        break;
                    case 2:
                        $('#dChoice_A').text("Absolutely!");
                        $('#dChoice_B').text("Eh, not really.");
                        $('#dChoice_C').text("Sick");
                        avatar.switchExpression("smile")
                        .then(()=>typeMessage("So then..."))
                        .then(async()=>{await dialogueLB();})
                        .then(()=>typeMessage("Are you ready to start coding?"))
                        .then(async()=>{await dialogueLB();})
                        .then(()=>{
                            logUpdate = 1;
                            resolve(logUpdate);
                        })
                        break;
                    default:
                        throw new Error("Line Not Found.")
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        break;
                    case 1:
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "C"){
                switch(d_Num){
                    case 0:
                        break;
                    case 1:
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            }
        }
        let secondBranch = function(){
            if(responseChar === "A"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("open")
                        .then(()=>typeMessage("Glad to hear it!  Alright then, let's get started!"))
                        .then(()=>{
                            logUpdate = -1;
                            resolve(logUpdate);
                        })
                        break;
                    default:
                        throw new Error("Line Not Found");
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("default")
                        .then(()=>typeMessage("Really?  That's too bad..."))
                        .then(async()=>{await dialogueLB();})
                        .then(()=>typeMessage("Maybe next time, then."))
                        .then(()=>{
                            logUpdate = -1;
                            resolve(logUpdate);
                        })
                        .then(async()=>{
                            await dialogueLB();
                            await pause(500);
                        })
                        .then(()=>{window.close()})
                        break;
                    default:
                        throw new Error("Line Not Found");
                }
            } else if(responseChar === "C"){
                switch(d_Num){
                    case 0:
                        break;
                    default:
                        throw new Error("Line Not Found");
                }
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
