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
                        avatar.switchExpression("shocked")
                        .then(()=>typeMessage("W-Wait, really?"))
                        .then(async()=>{await dialogueLB()})
                        // .then(()=>avatar.switchExpression("default"))
                        // .then(()=>typeMessage("That's it?"))
                        // .then(async()=>{await dialogueLB()})
                        // .then(()=>avatar.switchExpression("smile"))
                        // .then(()=>typeMessage("Well I suppose it could be worse."))
                        // .then(async()=>{await dialogueLB()})
                        // .then(()=>typeMessage("As long as you're willing to learn, you're in the right place!"))
                        // .then(async()=>{await dialogueLB()})
                        // .then(()=>typeMessage("So, shall we begin?"))
                        // .then(async()=>{await dialogueLB()})
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
                        .then(()=>typeMessage("O-Oh, um...  Yes, of course."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>typeMessage("If you change your mind, you can click on the icon at the top left of the screen."))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{
                            $('#assistant_help').fadeIn(1000);
                            await pause(1000);
                        })
                        .then(()=>avatar.switchExpression("open"))
                        .then(()=>typeMessage("Good luck with your studies!"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("smile"))
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

export function pageIntroduction_Spanish(lineNumber){
    return new Promise((resolve)=>{
        switch(lineNumber){
            case 0:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Alrighty!  So, this first section is pretty self-explanatory."))
                .then(async()=>{await dialogueLB()})
                // .then(()=>avatar.switchExpression("smile"))
                // .then(()=>typeMessage("It's basically an English to Spanish dictionary to help you out."))
                // .then(async()=>{await dialogueLB()})
                // .then(()=>typeMessage("Everything is in alphabetical order, and you can browse by letter!"))
                // .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 1:
                avatar.switchExpression("open")
                .then(()=>typeMessage("The second section contains several common phrases spoken most frequently."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("This will help you learn how people actually use the language instead of only the textbook stuff"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("Of course the textbook stuff is important, but not all of it is used in everyday speech."))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("It's much like how the English language and the English dictionary are not a perfect 1:1 ratio."))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 2:
                avatar.switchExpression("open")
                .then(()=>typeMessage("This section is rather self-explanatory as well."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("It consists of several different courses.  From beginner to advanced, to help you learn the Spanish language."))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 3:
                avatar.switchExpression("open")
                .then(()=>typeMessage("This section covers some different cultural practices and beliefs found in different Spanish speaking countries."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("Unfortunately, we don't have a lot of information in this section, so if you'd like to add some as you learn, we'd greatly appreciate it!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 4:
                avatar.switchExpression("open")
                .then(()=>typeMessage("The last section covers basic tourist attractions in the previously mentioned countries."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("Once again, if there's something you don't see in this section , feel free to add to the site."))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 5:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Well, I guess that's everything."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("How unfortunate...  I was getting rather into it all too..."))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("Oh well, the show must go on!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("If you need more help, just click the icon at the top left of the screen."))
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
