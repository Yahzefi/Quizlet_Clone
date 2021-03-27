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
                        .then(()=>typeMessage("We've been steadily losing members for about two years now, and well..."))
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
                        avatar.switchExpression("open")
                        .then(()=>typeMessage("Ah yes, I probably shouldn't waste a promising student's time."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
                        .then(()=>typeMessage("Please, allow me to show you around!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>{
                            logUpdate = -1
                            resolve(logUpdate)
                        })
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

export function pageIntroduction_Math(lineNumber){
    console.log("page intro")
    return new Promise((resolve)=>{
        switch(lineNumber){
            case 0:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Okay, so first things first."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("Here you'll find \"The Basics\" which is what it sounds like."))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("Anything from addition to long division can be found here."))
                .then(async()=>{await dialogueLB()})
                .then(()=>{resolve()})
                break;
            case 1:
                avatar.switchExpression("open")
                .then(()=>typeMessage("This next one is my personal favorite!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("From simple equations like 2x = 4, you'll build up your algebra skills here."))
                .then(async()=>{await dialogueLB()})
                .then(()=>{resolve()})
                break;
            case 2:
                typeMessage("I'm not much of a fan of this subject, but you might feel differently!")
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("This is where shapes/figures and mathematics meet."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("open"))
                .then(()=>typeMessage("Yup, that's Geometry."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>{resolve()})
                break;
            case 3:
                typeMessage("What's Calculus, you ask?")
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("open"))
                .then(async()=>typeMessage("I have no idea!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("Well, at least that's what I hear a lot."))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("So if you feel the same way, don't worry!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("Everyone has to start somewhere, right?"))
                .then(async()=>{await dialogueLB()})
                .then(()=>{resolve()})
                break;
            case 4:
                typeMessage("Okay, so this one I actually don't know too much about.")
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("open"))
                .then(()=>typeMessage("That being said, I hear it's extremely fascinating stuff!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("If that kind of stuff interests you..."))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("You'll find all sorts of materials on it here!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>{resolve()})
                break;
            case 5:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Well, I think that about covers it!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("If you need any help, feel free to click the icon at the top left of the screen."))
                .then(async()=>{await dialogueLB()})
                .then(()=>$('#assistant_help').fadeIn(500))
                .then(async()=>await pause(500))
                .then(()=>avatar.switchExpression("open"))
                .then(()=>typeMessage("Good Luck!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>{resolve()});
                break;
            default:
                throw Error("Line Not Found");
        }
    })
}
