import { pause } from "./main.Programming.js";

const BANNER = document.getElementById('banner_image');
var avatar = new Image();
avatar.src = "/Images/avatar.png";

export function initShowTime(){
    hideElements()
    .then(()=>{
        $('#body_container').append(avatar);
    })
}

function hideElements(){
    return new Promise(async (resolve)=>{
        $('#showTime_btn').slideUp(1000);
        $('#introMsg_1').fadeOut(1000);
        $('#introMsg_2').fadeOut(1000);
        await pause(1000);
        $(BANNER).css({position: "relative", top: "0px"})
        $(BANNER).animate({top: "300px"}, 1000)
        $(BANNER).animate({height: "0px"},500)
        $(BANNER).animate({width: "0%"}, 500);
        await pause(2000);
        $(BANNER).css("display", "none");
        await pause(1000);
        resolve();
    })
}