// NAVIGATION REDIRECT

export function navLink(e){
    switch(e.target.id){
//  LOGIN
        case "log_A":
            $("#log_modal").fadeIn(1000);
            break;
// REGISTER
        case "reg_A":
            $('#reg_modal').fadeIn(1000);
            break;
// MY LIBRARY
        case "user_library":
            displayNav("");
            break;
// CREATE NEW SET
        case "user_newSet":
            displayNav("");
            break;
// HOME
        case "navOne":
            $(document.body).css("overflow", "");
            $('#page_container').slideDown(1250);
            $('#form_container').slideDown(1250);
            $('#nav_frame').slideUp(1000);
            $('#banner_graphic').slideDown(1250);
            if(document.getElementById("user_nav").style.visibility === "hidden"){
                $('#logIn_Links').slideDown(1250);
            } else {
                $('#logIn_Links').css("display", "none");
            }
            $('#user_nav').slideDown(1250);
            break;
// TOP FLASHCARD SETS
        case "navTwo":
            displayNav("/Top_Sets/index.topSets.html");
            break;
// GAMES
        case "navThree":
            displayNav("/Games/index.games.html");
            $(document.body).css("overflow", "hidden");
            break;
// ABOUT PAGE
        case "navFour":
            displayNav("/About/index.about.html");
            break;
// CLICKS OUTSIDE ELEMENT
        case "":
            break;
// ERROR HANDLER
        default:
            throw new Error("Route Not Found");
    }
}

function displayNav(src){
    $(document.body).css("overflow", "");
    $('#page_container').slideUp(1000);
    $('#form_container').slideUp(1000);
    $('#nav_frame').attr("src", src);
    $('#nav_frame').css("display", "");
    $('#user_nav').slideUp(1000);
    $('#banner_graphic').slideUp(1000);
    $('#logIn_Links').slideUp(1000);
}
