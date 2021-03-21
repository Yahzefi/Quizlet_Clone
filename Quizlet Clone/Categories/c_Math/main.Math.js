import { pause } from "../c_Redirect.js"
import { initShowTime } from "./showtime.math.js"

$(document).ready(()=>{
    $('#body_container').css("margin", "15% auto")
})

$('#calculator_image').hover(function(){
    this.style.animationName = "shadowPulse";
    this.style.animationDuration = "1.5s";
    this.style.animationIterationCount = 'infinite';
}, function(){
    this.style.animation = "";
})

$('#calculator_image').click(async function(){
    $(this).fadeOut(500);
    $('#body_container h2').animate({fontSize: "84px"}, 500)
    await pause(500);
    $(this).remove();
    $('#body_container h2').animate({fontSize: "0px"}, 500)
    await pause(500);
    $('#body_container h2').remove();
    initShowTime();
})
