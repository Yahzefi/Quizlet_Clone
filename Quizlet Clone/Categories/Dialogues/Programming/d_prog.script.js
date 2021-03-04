import { pause } from "../../c_Programming/main.Programming.js";
import { typeMessage } from "../../c_Programming/showtime.js";
import { ASSISTANT_LIST } from "../../../Initialization/on_Init.js";

let avatar = ASSISTANT_LIST.Tom;

export function nextLine(branchNum, d_Num, responseChar){
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
                        avatar.switchExpression("open")
                        .then(()=>typeMessage("Oh, you're nice?  Well that's a pleasant surprise!"))
                        .then(()=>{
                            logUpdate = 0;
                            resolve(logUpdate);
                        })
                        break;
                    case 1:
                        typeMessage("What do you mean it only comes naturally?!")
                        .then(()=>{
                            logUpdate = 1;
                            resolve(logUpdate);
                        })
                        $('#dChoice_A').text("It just kinda does, I'm not sure why.");
                        $('#dChoice_B').text("I feel danger.");
                        $('#dChoice_C').text("Shut up, tool!");
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
                        break;
                    default:
                        throw new Error("Line Not Found");
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
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
            case 1:
                firstBranch();
                break;
            case 2:
                console.log("Second Branch Here");
                secondBranch();
                break;
            default:
                break;
        }
    })
}
