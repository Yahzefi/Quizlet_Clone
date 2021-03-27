//                                      ||   IMPORTS   ||                                      \\

import { appendHeader } from "./header.subcomponents.js";
import { checkPassword, checkValidity } from "./verification.js";
import { navLink } from "./navigation.js";

//                                      ||   LINKED FUNCTION   ||                                      \\

export function headerMain(data){
// APPENDENGES TO HEADER TEMPLATE
    appendHeader(data);

// CHANGE NAV TEXT
    document.getElementById("navOne").textContent = "| Home |"
    document.getElementById("navTwo").textContent = "| Top Flashcard Sets |"
    document.getElementById("navThree").textContent = "| Games |"
    document.getElementById("navFour").textContent = "| About Q-Clone |"

// ATTACH CLICK EVENTS TO HEADER NAVS

    $('#user_profile').click(()=>{console.log("hello");$('#user_dropdown').slideToggle(1000)})
        $('#opt_1').click(()=>window.location.assign("/Header/Profile/index.Profile.html"));
        $('#opt_2').click(()=>{})
        $('#opt_3').click(()=>location.reload());
    $('#user_library').click((e)=>navLink(e));
    $('#user_newSet').click((e)=>navLink(e));

    $('#log_A').click((e)=>navLink(e));
    $('#reg_A').click((e)=>navLink(e));

    $('#navOne').click((e)=>navLink(e))
    $('#navTwo').click((e)=>navLink(e))
    $('#navThree').click((e)=>navLink(e))
    $('#navFour').click((e)=>navLink(e))

// CLICK EVENTS FOR MODAL CLOSE

    $('#log_close').click(()=>{
        $('#log_modal').css("display", "none");
        $('#username_input').val("");
        $('#password_input').val("");
    });
    $('#reg_close').click(()=>{
        $('#reg_modal').css("display", "none");
        $('#fullName_input').val("");
        $('#birthDate_input').val("");
        $('#regUser_input').val("");
        $('#regPass_input').val("");
    });

// FILLED FORM CHECK \\
    // USERNAME FIELD CHECK
    $('#username_input').keyup((e)=>checkValidity(e))
    // PASSWORD FIELD CHECK
    $('#password_input').keyup((e)=>checkValidity(e))

// LOGIN PASSWORD VALIDATION
    $("#log_submit").click((e)=>{
        e.preventDefault();
        checkPassword($('#username_input').val(), $('#password_input').val());
    })

// REGISTER PROMPT CLICK EVENT
    $('#register_prompt span').click(()=>{
        $('#log_modal').fadeOut(1000);
        $('#reg_modal').fadeIn(1000);
    });

// REGISTRY INFORMATION SUBMISSION
    $('#register_submit').click((e)=>{
        e.preventDefault();
        registryInfoArr.push(
        {
            fullName: $('#fullName_input').val(),
            DOB: $('#birthDate_input').val(),
            username: $('#regUser_input').val(),
            password: $('#regPass_input').val()
        }
    );
        console.log(registryInfoArr);
    })
};

let registryInfoArr = [];
