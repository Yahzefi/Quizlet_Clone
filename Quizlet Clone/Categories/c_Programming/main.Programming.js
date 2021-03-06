import { initShowTime } from "./showtime.js";
import { ASSISTANT_LIST } from "../../Initialization/on_Init.js";
import { pause } from "../c_Redirect.js";

const BANNER = document.getElementById("banner_image");
let avatar_Tom = ASSISTANT_LIST.Tom;

$(document).ready(()=>{
    bannerAnimation()
    .then(async ()=>{
        BANNER.style.animation = "none";
        $('#introMsg_1').animate({left: "100px"}, 0);
        $('#introMsg_1').animate({left: "0px"});
        // await pause(1500);
    })
    .then(async ()=>{
        $('#introMsg_2').animate({left: "25px"}, 0);
        $('#introMsg_2').animate({left: "0px"});
        // await pause(1500);
    })
    .then(async ()=>{
        $('#introMsg_3').animate({left: "50px"}, 0);
        $('#introMsg_3').animate({left: "0px"});
        // await pause(1500);
    })
    .then(async ()=>{
        $('#showTime_btn').slideDown(1000);
        $('#showTime_btn').css("display", "inline")
        // await pause(1000);
    })
    .then(()=>{
        $(document.body).css("overflow", "auto")
    })
})

// localStorage.removeItem("assistantHasAppeared")

// if(localStorage.getItem("assistantHasAppeared") !== null){
//     avatar_Tom.hasIntroduced = true;
// }


if(!avatar_Tom.hasIntroduced){
    $('#showTime_btn').click(initShowTime);
} else {
    $('#showTime_btn').click(skipShowTime);
}

function bannerAnimation(){
    return new Promise(async (resolve)=>{
        await pause(500)
        $('#primary_container').css("display", "flex");
        $('#primary_container').animate({top: "0px", height: "1000px"}, 1000)
        await pause(1000);
        $(BANNER).css("display", "inline");
        BANNER.style.animationName = "loadBannerArt";
        BANNER.style.animationDuration = "0.5s";
        BANNER.style.animationTimingFunction = "ease-in";
        await pause(500);
        resolve();
    })
}

function skipShowTime(){
    console.log("Skipped");
}
