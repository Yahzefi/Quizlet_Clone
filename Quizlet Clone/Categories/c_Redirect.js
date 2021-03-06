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
