import { pause } from "../c_Redirect.js"
import { initShowTime } from "./showtime.hist.js"

$('#primary_container').css("top", "0px")
$(document).ready(()=>{$('#primary_container').fadeIn(500)})

// Starting Intro Logo Animation & Handling
$('#history_startBook').hover(function(){
    this.style.animationName = "shadowPulse";
    this.style.animationDuration = "1.5s";
    this.style.animationIterationCount = 'infinite';
}, function(){
    this.style.animation = "";
})

$('#history_startBook').click(async function(){
    $(this).fadeOut(500);
    $('#body_container h2').animate({fontSize: "84px"}, 500)
    await pause(500);
    $(this).remove();
    $('#body_container h2').animate({fontSize: "0px"}, 500)
    await pause(500);
    $('#body_container h2').remove();
    $('#body_container').remove();
    initShowTime();
})

// Navigational Redirect Function

export function anchorRedirect_History(selectedAnchor){
    switch(selectedAnchor){
        case "a1":
            alert("North America")
            break;
        case "a2":
            alert("South America")
            break;
        case "a3":
            alert("Africa")
            break;
        case "a4":
            alert("Australia")
            break;
        case "a5":
            alert("Europe")
            break;
        default:
            throw Error("Error 404: Page Not Found")
    }
}
