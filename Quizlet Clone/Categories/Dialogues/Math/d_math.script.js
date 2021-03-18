// import { toggleDialogueBox } from "../../Initialization/Assistants.js";
// DIALOGUE PATHS WITH MATH ASSISTANT

export function nextLine_Math(branchNum, d_Num, responseChar){
    return new Promise((resolve)=>{
        let logUpdate;
        let introScript = function(){
            switch(d_Num){
                case 0:
                    console.log("Math");
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
                        logUpdate = -1
                        resolve(logUpdate)
                        break;
                    case 1:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    case 1:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "C"){
                switch(d_Num){
                    case 0:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    case 1:
                        logUpdate = null
                        resolve(logUpdate)
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
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    case 1:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    case 1:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "C"){
                switch(d_Num){
                    case 0:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    case 1:
                        logUpdate = null
                        resolve(logUpdate)
                        break;
                    default:
                        throw new Error("Line Not Found")
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
