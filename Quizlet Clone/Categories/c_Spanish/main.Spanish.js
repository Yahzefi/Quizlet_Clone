import { pause } from "../c_Redirect.js"
import { initShowTime } from "../c_Spanish/showtime.span.js"

// WEIRD BUG WITH BODY CONTAINER PUTTING MARGIN I DIDN'T SPECIFY

$('#c_tortilla').click(async function(){
    $('#body_container_s h4').fadeOut(500);
    $('#body_container_s h1').fadeOut(500);
    $('#body_container_s h2').fadeOut(500);
    await pause(500)
    $('#f_head').fadeOut(500);
    $('#f_tortilla').fadeOut(500);
    await pause(1000);
    $(this).animate({width: "300px", height: "300px"}, 500)
    $(this).animate({width: "0px", height: "0px"}, 1000)
    await pause(1500);
    $('#c_head').remove();
    $(this).remove();
    $('#body_container_s').remove();
    initShowTime();
})

$('#f_tortilla').click(async function(){
    $('#body_container_s h4').fadeOut(500);
    $('#body_container_s h1').fadeOut(500);
    $('#body_container_s h2').fadeOut(500);
    await pause(500)
    $('#c_head').fadeOut(500);
    $('#c_tortilla').fadeOut(500);
    await pause(1000);
    $(this).animate({width: "300px", height: "300px"}, 500)
    $(this).animate({width: "0px", height: "0px"}, 1000)
    await pause(1500);
    $('#f_head').remove();
    $(this).remove();
    $('#body_container_s').remove();
    initShowTime();
})

export function anchorRedirect_Spanish(selectedAnchor){
    switch(selectedAnchor){
        case "a1":
            console.log("Glossary")
            break;
        case "a2":
            console.log("Phrases")
            break;
        case "a3":
            console.log("Courses")
            break;
        case "a4":
            console.log("Culture")
            break;
        case "a5":
            console.log("Tourism")
            break;
        default:
            throw Error("Error 404: Page Not Found")
    }
}
