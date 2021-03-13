import { pause } from "../c_Redirect.js"


$('#c_tortilla').click(async function(){
    $('#body_container h4').fadeOut(500);
    await pause(750)
    $(this).animate({left: "1500px"}, 1000)
    await pause(1000);
    $(this).remove();
})

$('#f_tortilla').click(async function(){
    $('#body_container h4').fadeOut(500);
    await pause(750)
    $(this).animate({right: "1500px"}, 1000)
    await pause(1000);
    $(this).remove();
    initShowTime();
})
