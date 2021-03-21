import { pause } from "../c_Redirect.js"
import { initShowTime } from "../c_Spanish/showtime.span.js"


$('#c_tortilla').click(async function(){
    $('#body_container h4').fadeOut(500);
    $('#body_container h1').fadeOut(500);
    $('#body_container h2').fadeOut(500);
    await pause(500)
    $('#f_head').fadeOut(500);
    await pause(1000);
    $(this).animate({width: "300px", height: "300px"}, 500)
    $(this).animate({width: "0px", height: "0px"}, 1000)
    await pause(1500);
    $('#c_head').remove();
    $(this).remove();
    initShowTime();
})

$('#f_tortilla').click(async function(){
    $('#body_container h4').fadeOut(500);
    await pause(750)
    $(this).animate({right: "1500px"}, 1000)
    await pause(1000);
    $(this).remove();
    initShowTime();
})
