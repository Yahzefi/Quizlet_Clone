import { typeMessage, dialogueLB } from "../../../Initialization/Assistants.js"
import { pause } from "../../c_Redirect.js"
import { ASSISTANT_LIST } from "../../../Initialization/on_Init.js"

const avatar = ASSISTANT_LIST.Fredrick;

export function nextLine_Hist(branchNum, d_Num, responseChar){
    return new Promise((resolve)=>{
        let logUpdate;
        let introScript = function(){
            switch(d_Num){
                case 0:
                    $('#dChoice_A').text("\"Absolutely!  I'm here to learn as much as I can.\"");
                    $('#dChoice_B').text("\"Sure, I guess.\"");
                    $('#dChoice_C').text("\"I'm not interested in conversation with peasants.\"");
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
                        .then(()=>typeMessage("Indeed!  Ah, how wonderful!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("However, before we begin I must ask you..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("What's the most interesting period of history?"))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{await pause(1000)})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>typeMessage("..."))
                        .then(async()=>{await pause(1500)})
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("........"))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{await pause(500)})
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("Oh my..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("I see I confused you, but you need not worry."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("The answer is actually quite simple."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("You see, it is the period with no history at all!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("It's our duty as historians to learn about the past, right?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("Well, isn't it only natural we wish to know the unknown?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("Which is why..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("shocked"))
                        .then(()=>avatar.shake())
                        .then(()=>typeMessage("Oh no!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("There I go, getting ahead of myself again!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("I suppose I should end my tangent here, and show you around?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>{
                            logUpdate = 0
                            resolve(logUpdate)
                        })
                        break;
                    case 1:
                        $('#dChoice_A').text("");
                        $('#dChoice_B').text("");
                        $('#dChoice_C').text("Click to Continue");
                        logUpdate = 1
                        resolve(logUpdate)
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("default")
                        .then(()=>typeMessage("Hm...  You don't seem very excited."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("That truly is a shame, but in the end I suppose..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("I could always just change your mind!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>{avatar.switchExpression("smile")})
                        .then(()=>{
                            logUpdate = 0
                            resolve(logUpdate)
                        })
                        break;
                    case 1:
                        avatar.switchExpression("default")
                        .then(()=>typeMessage("..."))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{await pause(1000)})
                        .then(()=>typeMessage("....."))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{await pause(1000)})
                        .then(()=>avatar.switchExpression("shocked"))
                        .then(()=>typeMessage("Really..?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("Nothing?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>{
                            logUpdate = 0
                            resolve(logUpdate)
                        })
                        break;
                    case 2:
                        typeMessage("Well...")
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("I guess it's up to me to spark some interest in you!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>{
                            $('#dChoice_A').text("");
                            $('#dChoice_B').text("");
                            $('#dChoice_C').text("Click to Continue");
                            logUpdate = 1
                            resolve(logUpdate);
                        })
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "C"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("shocked")
                        .then(()=>typeMessage("W-Wait, really?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>typeMessage("Well alright then, I guess I'll be off."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("If you change your mind, just click the button at the top left of the screen."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("Farewell."))
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
                        logUpdate = 1
                        resolve(logUpdate)
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            }
        }
        let secondBranch = function(){
            switch(d_Num){
                case 0:
                    logUpdate = -1;
                    resolve(logUpdate);
                    break;
                default:
                    throw Error("Line Not Found")
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
