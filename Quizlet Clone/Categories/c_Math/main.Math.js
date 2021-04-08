import { pause } from "../c_Redirect.js"
import { initShowTime } from "./showtime.math.js"

// Starting Intro Logo Animation & Handling

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
    $('#body_container').remove();
    initShowTime();
})

// Help Icon Functionality

$('#assistant_help').on("click", ()=>{
    console.log("help");
})

// Navigational Redirect Function

export function anchorRedirect_Math(selectedAnchor){
    switch(selectedAnchor){
        case "a1":
            console.log("Basics")
            break;
        case "a2":
            console.log("Algebra")
            break;
        case "a3":
            console.log("Geometry")
            break;
        case "a4":
            console.log("Calculus")
            break;
        case "a5":
            console.log("Physics")
            break;
        default:
            throw Error("Error 404: Page Not Found")
    }
}
