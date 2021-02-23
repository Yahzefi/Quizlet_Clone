import { initShowTime } from "./showtime.js";

const BANNER = document.getElementById("banner_image");

$(BANNER).css("display", "none");
$('#showTime_btn').css("display", "none");
$('#topic_navBar').css("display", "none");

$(document).ready(()=>{
    bannerAnimation()
    .then(async ()=>{
        $('#introMsg_1').animate({left: "50px"}, 1000);
        $('#introMsg_1').animate({left: "0px"});
        await pause(1500);
    })
    .then(async ()=>{
        $('#introMsg_2').animate({left: "25px"}, 1000);
        $('#introMsg_2').animate({left: "0px"});
        await pause(1500);
    })
    .then(()=>{
        $('#showTime_btn').slideDown(1000);
    })
})

$('#showTime_btn').click(initShowTime);

function bannerAnimation(){
    return new Promise(async (resolve)=>{
        $(BANNER).css("display", "");
        BANNER.style.animationName = "loadBannerArt";
        BANNER.style.animationDuration = "2s";
        BANNER.style.animationTimingFunction = "ease-in";
        await pause(2000);
        resolve();
    })
}

export function pause(ms){return new Promise(resolve=>setTimeout(resolve, ms))};
