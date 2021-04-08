import { pause } from "../../c_Redirect.js";
import { typeMessage, dialogueLB } from "../../../Initialization/Assistants.js";
import { ASSISTANT_LIST } from "../../../Initialization/on_Init.js";

let avatar = ASSISTANT_LIST.Tom;

/*
    (nextLine_*ins-category-abbr*) is the main function of the file which contains possible branches the user can go down
    depending on what they choose as their response

    (introScript) is the first function called and sets up the first batch of responses

    (firstBranch) is the branch that segments off depending on the choice made.
    If time allowed, there'd be segmented branches from each choice (such as branch 2a, 2b, and 2c) which would then split off even further into something like 2a1 2b1 2c1 or some other unique name to travel through as the dialogue progresses

    The switch at the bottom acts as a conditional check to see which path the user will go down in direct relation to their reply choice

    At the bottom we have (pageIntrocution_*ins-category*) which contains a separate script for the initial run of the page
    where the designated assistant will give a brief overview of the navigation links and what they contain
*/

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
                            logUpdate = -1;
                            resolve(logUpdate);
                        })
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
                        .then(()=>typeMessage("Wow...  Seriously?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>avatar.switchExpression("default"))
                        .then(()=>typeMessage("That kind of attitude won't get you very far, but..."))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("I guess I'll have to accept it as it is, right?"))
                        .then(async()=>{await dialogueLB()})
                        .then(()=>typeMessage("If you change your mind, click the icon at the top left of the screen."))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{
                            $('#assistant_help').fadeIn(1000);
                            await pause(1000);
                        })
                        .then(()=>typeMessage("Good luck on your journey!"))
                        .then(async()=>{await dialogueLB()})
                        .then(async()=>{$('#' + avatar.id).animate({right: "100%"}, 1000);await pause(1000);$('#' + avatar.id).remove()})
                        .then(async()=>{$('#chat_div').fadeOut(1000);await pause(1000)})
                        .then(()=>{
                            logUpdate = -1;
                            resolve(logUpdate);
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

export function pageIntroduction_Programming(lineNumber){
    return new Promise((resolve)=>{
        switch(lineNumber){
            case 0:
                avatar.switchExpression("open")
                .then(()=>typeMessage("With the first section, we decided to start with the basics."))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("If you're interested in Web Development, it's important to understand the skeleton before you can start dissecting the muscles and other bits."))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 1:
                avatar.switchExpression("open")
                .then(()=>typeMessage("The second section covers the styling of the site.  CSS stands for Cascading Style Sheets after all!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("If you want to focus on front-end development, it's a must to understand the concepts revolving around CSS."))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 2:
                avatar.switchExpression("open")
                .then(()=>typeMessage("Alright, alright...  This is the big kahuna!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("Once you've understood the basics of HTML and CSS, you'll most likely find yourself moving towards the functionality of it all"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("JavaScript allows you to really stick your foot in the door of creating a webiste or other applications."))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 3:
                avatar.switchExpression("open")
                .then(()=>typeMessage("The fourth section has to do with the JavaScript framework, \"React\""))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("A framework or library is designed to allow the user to code within a certain structure to allow for more organized and collaboration-friendly code."))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 4:
                avatar.switchExpression("open")
                .then(()=>typeMessage("The last section is Node.js"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("Node focuses on the back-end development side of things, and allows communication with a server to access various types of information"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("I'm still a little fuzzy on these kinds of things, but from what I've seen so far it's just as fascinating as everything else!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>resolve());
                break;
            case 5:
                avatar.switchExpression("open")
                .then(()=>typeMessage("And the next thing...  Oh wait!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>avatar.switchExpression("smile"))
                .then(()=>typeMessage("I think that's it!"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("Wow, that went by fast didn't it?"))
                .then(async()=>{await dialogueLB()})
                .then(()=>typeMessage("If you require any additional support, just click the icon at the top left of the screen."))
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
