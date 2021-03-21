import { typeMessage, dialogueLB } from "../../../Initialization/Assistants.js"
import { pause } from "../../c_Redirect.js"
import { ASSISTANT_LIST } from "../../../Initialization/on_Init.js"

const avatar = ASSISTANT_LIST.Damien;

export function nextLine_Span(branchNum, d_Num, responseChar){
    return new Promise((resolve)=>{
        let logUpdate;
        let introScript = function(){
            switch(d_Num){
                case 0:
                    console.log("Spanish");
                    $('#dChoice_A').text("\"It seemed like the easiest option.\"");
                    $('#dChoice_B').text("\"I flipped a coin.\"");
                    $('#dChoice_C').text("\"Can't we skip the icebreakers?\"");
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
                        .then(()=>typeMessage("Is that so?"))
                        .then(async()=>await dialogueLB())
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("I suppose Spanish is known as one of the simpler languages."))
                        .then(async()=>await dialogueLB())
                        .then(()=>typeMessage("Sometimes that lower learning curve helps out quite a bit!"))
                        .then(async()=>await dialogueLB())
                        .then(()=>typeMessage("It won't be easy though, but I hope you won't get discouraged!"))
                        .then(async()=>await dialogueLB())
                        .then(()=>typeMessage("After all, learning a second language is an amazing skill to acquire."))
                        .then(async()=>await dialogueLB())
                        .then(()=>typeMessage("I can attest to that personally, too!"))
                        .then(async()=>await dialogueLB())
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("I can't imagine my life without it!"))
                        .then(async()=>await dialogueLB())
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("Well I think I've talked yoru ear off enough, yes?"))
                        .then(async()=>await dialogueLB())
                        .then(()=>typeMessage("Let's get started!"))
                        .then(async()=>await dialogueLB())
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
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("shocked")
                        .then(()=>typeMessage("W-Wait, really?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>typeMessage("That's it?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("Well I suppose it could be worse."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("As long as you're willing to learn, you're in the right place!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("So, shall we begin?"))
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
            } else if(responseChar === "C"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("shocked")
                        .then(()=>typeMessage("O-Oh, um...  Yes, of course."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>typeMessage("If you change your mind, you can click on the icon at the top left of the screen."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("Good luck with your studies!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
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
