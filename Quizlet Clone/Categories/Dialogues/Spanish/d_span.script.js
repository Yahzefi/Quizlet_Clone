// import { toggleDialogueBox } from "../../Initialization/Assistants.js";
// DIALOGUE PATHS WITH SPANISH ASSISTANT

export function nextLine_Span(branchNum, d_Num, responseChar){
    return new Promise((resolve)=>{
        let logUpdate;
        let introScript = function(){
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
        let firstBranch = function(){
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