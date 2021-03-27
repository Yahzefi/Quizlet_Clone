import { anchorRedirect_Math } from "./c_Math/main.Math.js";
import { anchorRedirect_History } from "./c_History/main.History.js";
import { anchorRedirect_Spanish } from "./c_Spanish/main.Spanish.js";
import { anchorRedirect_Programming } from "./c_Programming/main.Programming.js";

import { pageIntroduction_History } from "./Dialogues/History/d_hist.script.js";
import { pageIntroduction_Math } from "./Dialogues/Math/d_math.script.js";
import { pageIntroduction_Spanish } from "./Dialogues/Spanish/d_span.script.js";
import { pageIntroduction_Programming } from "./Dialogues/Programming/d_prog.script.js";

export function openMathPage(){
    window.open("/Categories/c_Math/index.Math.html");
}

export function openProgrammingPage(){
    window.open("/Categories/c_Programming/index.Programming.html");
}

export function openHistoryPage(){
    window.open("/Categories/c_History/index.History.html");
}

export function openSpanishPage(){
    window.open("/Categories/c_Spanish/index.Spanish.html");
}

export function pause(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}

export function pageIntroduction(category, lineNumber){
    return new Promise((resolve)=>{
        if(category === "math"){
            pageIntroduction_Math(lineNumber)
            .then(()=>resolve())
        } else if(category === "history"){
            pageIntroduction_History(lineNumber)
            .then(()=>resolve())
        } else if(category === "spanish"){
            pageIntroduction_Spanish(lineNumber)
            .then(()=>resolve())
        } else if(category === "programming"){
            pageIntroduction_Programming(lineNumber)
            .then(()=>resolve())
        }
    })
}

export function anchorRedirect(ev, category){
    switch(category){
        case "math":
            anchorRedirect_Math(ev.target.id)
            break;
        case "history":
            anchorRedirect_History(ev.target.id);
            break;
        case "spanish":
            anchorRedirect_Spanish(ev.target.id);
            break;
        case "programming":
            anchorRedirect_Programming(ev.target.id);
            break;
        default:
            throw Error("Error: Redirect Failed")
    }
}
