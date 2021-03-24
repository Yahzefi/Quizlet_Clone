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
                            logUpdate = -1
                            resolve(logUpdate)
                        })
                        break;
                    default:
                        throw new Error("Line Not Found")
                }
            } else if(responseChar === "B"){
                switch(d_Num){
                    case 0:
                        avatar.switchExpression("default")
                        .then(()=>typeMessage("Hm...  You don't seem very excited."))
                        // .then(async()=>{await dialogueLB()})
                        // .then(()=>typeMessage("That truly is a shame, but in the end I suppose..."))
                        // .then(async()=>{await dialogueLB()})
                        // .then(()=>avatar.switchExpression("open"))
                        // .then(()=>typeMessage("I could always just change your mind!"))
                        // .then(async()=>{await dialogueLB()})
                        // .then(()=>{avatar.switchExpression("smile")})
                        .then(()=>{
                            logUpdate = -1
                            resolve(logUpdate)
                        })
                        break;
                    // case 1:
                    //     avatar.switchExpression("default")
                    //     .then(()=>typeMessage("..."))
                    //     .then(async()=>{await dialogueLB()})
                    //     .then(async()=>{await pause(1000)})
                    //     .then(()=>typeMessage("....."))
                    //     .then(async()=>{await dialogueLB()})
                    //     .then(async()=>{await pause(1000)})
                    //     .then(()=>avatar.switchExpression("shocked"))
                    //     .then(()=>typeMessage("Really..?"))
                    //     .then(async()=>{await dialogueLB()})
                    //     .then(()=>typeMessage("Nothing?"))
                    //     .then(async()=>{await dialogueLB()})
                    //     .then(()=>avatar.switchExpression("default"))
                    //     .then(()=>{
                    //         logUpdate = 0
                    //         resolve(logUpdate)
                    //     })
                    //     break;
                    // case 2:
                    //     typeMessage("Well...")
                    //     .then(()=>avatar.switchExpression("open"))
                    //     .then(()=>typeMessage("I guess it's up to me to spark some interest in you!"))
                    //     .then(async()=>{await dialogueLB()})
                    //     .then(()=>avatar.switchExpression("smile"))
                    //     .then(()=>{
                    //         logUpdate = -1
                    //         resolve(logUpdate);
                    //     })
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
                        .then(async()=>{
                            $('#assistant_help').fadeIn(1000);
                            await pause(1000);
                        })
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("Farewell."))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{$('#' + avatar.id).animate({right: "100%"}, 1000);await pause(1000);$('#' + avatar.id).remove()})
                        .then(async()=>{$('#chat_div').fadeOut(1000);await pause(1000)})
                        .then(()=>{
                            logUpdate = -1
                            resolve(logUpdate)
                        })
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
            default:
                throw new Error("No Branch Found");
        }
    })
}

export function pageIntroduction_History(lineNumber){
    return new Promise((resolve)=>{
        switch(lineNumber){
            case 0:
                avatar.switchExpression("open")
                .then(()=>typeMessage("We have sections for each of the major continents"))
                .then(async()=>{await dialogueLB()})
                // .then(()=>avatar.switchExpression("smile"))
                // .then(()=>typeMessage("For the sake of this site's layout, Asia has been grouped in with Europe."))
                // .then(async()=>{await dialogueLB()})
                // .then(()=>typeMessage("The first section covers the history within North America."))
                // .then(async()=>{await dialogueLB()})
                // .then(()=>typeMessage("This includes not only the United States, but also Canada and Mexico's history!"))
                // .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 1:
                avatar.switchExpression("open")
                .then(()=>typeMessage("The next section covers North America's southern sister!"))
                .then(async()=>{await dialogueLB()})
                // .then(()=>avatar.switchExpression("smile"))
                // .then(()=>typeMessage("Once again for simplicity's sake, areas of central America have been included in this section"))
                // .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 2:
                avatar.switchExpression("open")
                .then(()=>typeMessage("The third section is Africa."))
                .then(async()=>{await dialogueLB()})
                // .then(()=>avatar.switchExpression("smile"))
                // .then(()=>typeMessage("In this case, the Middle East will be included in this section."))
                // .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 3:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Fourth is Austrailia.  Ah yes, the Great Outback!"))
                .then(async()=>{await dialogueLB()})
                // .then(()=>avatar.switchExpression("smile"))
                // .then(()=>typeMessage("This area's history is my personal favorite since not many in the states talk about it."))
                // .then(async()=>{await dialogueLB()})
                // .then(()=>typeMessage("I hope you share the same experience as you learn more about it too!"))
                // .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 4:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Lastly is Europe!  As I said at the start, a lot is contained in this section."))
                .then(async()=>{await dialogueLB()})
                // .then(()=>avatar.switchExpression("smile"))
                // .then(()=>typeMessage("It might seem overwhelming because of this, but there's no need to worry!"))
                // .then(async()=>{await dialogueLB()})
                // .then(()=>typeMessage("When it comes to learning our world's history, it's important to take your time."))
                // .then(async()=>{await dialogueLB()})
                // .then(()=>typeMessage("It's not likely you'll know it all, so you might as well relax and enjoy your stay!"))
                // .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 5:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Hmm...  I think that about covers everything!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("Wow, that went by fast, right?"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("If you need any further assistance, you can click the icon in the top left of the screen."))
                .then(async()=>{await dialogueLB()})
                .then(()=>$('#assistant_help').fadeIn(500))
                .then(()=>typeMessage("Good Luck!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            default:
                throw Error("Line Not Found");
        }
    })
}
