import { pause } from "../c_Redirect.js"
import { initShowTime } from "./showtime.hist.js"

$('#primary_container').css("top", "0px")
$(document).ready(()=>{$('#primary_container').fadeIn(500)})

// $('#history_startBook').hover(function(){
//     $(this).animate({width: "300px", height: "400px"}, 500);
//     bookPulse = setInterval(()=>{
//         $('#history_startBook').animate({opacity: "0"},600)
//         $('#history_startBook').animate({opacity: "1"},600)
//     }, 1200)
// }, function(){
//     clearInterval(bookPulse);
//     $(this).animate({width: "225px", height: "300px"}, 500);
// })

// $('#history_startBook').click(async function(){
//     await pause(250);
//     $(this).animate({width: "500px", height:"550px"}, 750)
//     $(this).animate({width: "0px", height: "0px"}, 500)
//     $(this).animate({opacity: "0"}, 250)
//     await pause(2000)
//     $(this).remove();
//     $('#start_message').animate({fontSize: "128px"}, 500)
//     $('#start_message').animate({fontSize: "0px"}, 500)
//     await pause(1000);
//     $('#start_message').remove();
//     await pause(250)
//     initShowTime();
// })

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
