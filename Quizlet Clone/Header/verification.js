export function checkPassword(user, pw){
    if(user === "Admin"){
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
            $('#opt_1').text(user + "'s Profile");
        } else {
            alert("Password Incorrect");
            $('#password_input').css({
                border: "0.5px solid red",
                boxShadow: "0px 0px 4px 0.5px red"
            })
        }
    } else {
        alert("User Not Found");
        $('#username_input').css({
            border: "0.5px solid red",
            boxShadow: "0px 0px 4px 0.5px red"
        })
    }
}

export function checkValidity(ev){
    if(ev.keyCode == 9 || ev.keyCode == 13 || ev.keyCode == 32){
        return;
    } else {
        if(ev.target.id === "username_input"){
            if($('#username_input').val() === ""){
                $('#username_input').css({
                    border: "0.5px solid red",
                    boxShadow: "0px 0px 4px 0.5px red"
                })
            } else {
                $('#username_input').css({
                    border: "",
                    boxShadow: ""
                })
            }
            if($('#username_input').val() !== "" && $('#password_input').val() !== ""){
                document.getElementById('log_submit').disabled = false;
            } else {
                document.getElementById('log_submit').disabled = true;
            }
        } else if(ev.target.id === "password_input"){
            if($('#password_input').val() === ""){
                $('#password_input').css({
                    border: "0.5px solid red",
                    boxShadow: "0px 0px 4px 0.5px red"
                })
            } else {
                $('#password_input').css({
                    border: "",
                    boxShadow: ""
                })
            }
            if($('#username_input').val() !== "" && $('#password_input').val() !== ""){
                document.getElementById('log_submit').disabled = false;
            } else {
                document.getElementById('log_submit').disabled = true;
            }
        }
    }
}
