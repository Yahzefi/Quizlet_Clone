import { pause } from "../c_Redirect.js"
import { initShowTime } from "./showtime.math.js"

$(document).ready(()=>{
    $('#body_container').css("margin", "15% auto")
})


let animCycle;
$('#calculator_image').hover(function(){
    animCycle = setInterval(async()=>{
        this.style.animationName = "shadowPulse";
        this.style.animationDuration = '0.25s';
        this.style.animationFillMode = 'forwards';
        await pause(250);
        this.style.animationName = "shadowRetract";
        this.style.animationDuration = '1s';
        this.style.animationFillMode = "forwards";
    }, 1250)
}, function(){
    clearInterval(animCycle);
})

$('#calculator_image').click(async function(){
    clearInterval(animCycle);
    $(this).fadeOut(500);
    $('#body_container h2').animate({fontSize: "84px"}, 500)
    await pause(500);
    $(this).remove();
    $('#body_container h2').animate({fontSize: "0px"}, 500)
    await pause(500);
    $('#body_container h2').remove();
    initShowTime();
})
