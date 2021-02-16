export function checkPassword(user, pw){
    if(user === "admin"){
        if(pw === "pw123"){
            $('.user-nav').css("overflow", "hidden")
            $('#logIn_Links').slideUp(1000);
            $('#username_input').val("");
            $('#password_input').val("");
            $('#logModal_content').animate({top: "200px"}, 500);
            setTimeout(()=>{$('#logModal_content').animate({top: "-500px"}, 1000)}, 500);
            setTimeout(()=>{$('#log_modal').fadeOut(500)}, 1500);
            setTimeout(()=>{
                $(".user-nav").css("visibility", "");
                $(".user-nav").css("border", "thin solid cyan");
                $(".user-nav").css("width", "0%").animate({width: "50%"}, 1000, ()=>{$('#user_nav').css("overflow", "")});
            }, 2000)
                
        } else {
            alert("Password Incorrect");
        }
    } else {
        alert("User Not Found");
    }
}