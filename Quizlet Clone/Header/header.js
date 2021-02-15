//                                      ||   IMPORTS   ||                                      \\

import { Subcomponent } from "../Initialization/Subcomponent.js";

//                                      ||   LINKED FUNCTION   ||                                      \\

export function headerMain(data){
    // PASS PARAM INTO SCOPED VARIABLE
    const HEADER_COLLECTION = data;

    // PULL EACH ELEMENT OF COLLECTION AREA
    let headerDiv = HEADER_COLLECTION.container;
        let logModal = HEADER_COLLECTION.children["logModal"];
        let regModal = HEADER_COLLECTION.children["regModal"];
        let userNavBar = HEADER_COLLECTION.children["userNavBar"];
            let userProfile = HEADER_COLLECTION.children["userNavBar_Children"].userProfile;
                let userDropDown = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown"];
                    let profileOptionOne = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown_Children"].profileOptionOne;
                    let profileOptionTwo = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown_Children"].profileOptionTwo;
                    let profileOptionThree = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown_Children"].profileOptionThree;
            let userLibrary = HEADER_COLLECTION.children["userNavBar_Children"].userLibrary;
            let userCreateSet = HEADER_COLLECTION.children["userNavBar_Children"].userCreateSet;
        let credDiv = HEADER_COLLECTION.children["credentialsDiv"];
            let mainHeading = HEADER_COLLECTION.children["credDiv_Children"].mainHeading;
            let logNav = HEADER_COLLECTION.children["credDiv_Children"].logIn_Nav;
                let log_A = HEADER_COLLECTION.children["credDiv_Children"].logInAnchors["logAnchor"];
            let regNav = HEADER_COLLECTION.children["credDiv_Children"].register_Nav;
                let reg_A = HEADER_COLLECTION.children["credDiv_Children"].registerAnchors["regAnchor"];
        let bannerDiv = HEADER_COLLECTION.children["banner"];
        let pageNavDiv = HEADER_COLLECTION.children["pageNavDiv"];
            let pageNav = HEADER_COLLECTION.children["navDiv_Children"].pageNav;
                let pageNav_A1 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A1"];
                let pageNav_A2 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A2"];
                let pageNav_A3 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A3"];
                let pageNav_A4 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A4"];

//                                      ||      START NEW CODE HERE     ||                                      \\

// SUBCOMPONENTS (FOR NEW ELEMENTS OUTSIDE OF INITIAL TEMPLATE)

    let bannerIMG_SC = new Subcomponent("img", "banner_img", "ban-img");
    let navFrame_SC = new Subcomponent("iframe", "nav_frame", "nav-frame");

    // LOGIN MODAL 
    let logModalDiv_SC = new Subcomponent("div", "logModal_div", "log-div");
        let logModalContent_SC = new Subcomponent("div", "logModal_content", "log-content");
            let logModalClose_SC = new Subcomponent("span", "log_close", "modal-close");
            let logContentHeader_SC = new Subcomponent("h4", "log_header", "log-head");
            let logContentForm_SC = new Subcomponent("form", "log_form", "log-form");
                let logFormUsernameLabel_SC = new Subcomponent("label", "username_label", "log-label");
                let logFormUsernameInput_SC = new Subcomponent("input", "username_input", "log-inp");
                let logFormPasswordLabel_SC = new Subcomponent("label", "password_label", "log-label");
                let logFormPasswordInput_SC = new Subcomponent("input", "password_input", "log-inp");
            let logRegisterPrompt_SC = new Subcomponent("p", "register_prompt", "reg-prompt");

    // REGISTRY MODAL
    let regModalDiv_SC = new Subcomponent("div", "regModal_div", "reg-div");
        let regModalContent_SC = new Subcomponent("div", "regModal_content", "reg-content");
            let regModalClose_SC = new Subcomponent("span", "reg_close", "modal-close");
            let regContentHeader_SC = new Subcomponent("h4", "reg_header", "reg-head");
            let regContentForm_SC = new Subcomponent("form", "reg_form", "reg-form");
                let regFormUsernameLabel_SC = new Subcomponent("label", "regUser_label", "reg-label");
                let regFormUsernameInput_SC = new Subcomponent("input", "regUser_input", "reg-inp");
                let regFormPasswordLabel_SC = new Subcomponent("label", "regPass_label", "reg-label");
                let regFormPasswordInput_SC = new Subcomponent("input", "regPass_input", "reg-inp");
                let regFormSubmit_SC = new Subcomponent("input", "register_submit", "reg-submit");

//  LOGIN MODAL BUILD

    $(logModal).append(logModalDiv_SC.createElement());
        $('#' + logModalDiv_SC.id).append(logModalContent_SC.createElement());
            $('#' + logModalContent_SC.id).append(logModalClose_SC.createElement());
                $('#' + logModalClose_SC.id).html("&xotime;");
                    $('#' + logModalClose_SC.id).click(()=>$(logModal).css("display", "none"));
            $("<br>").appendTo("#" + logModalContent_SC.id);
            $('#' + logModalContent_SC.id).append(logContentHeader_SC.createElement([{attr:"",content:"",innerText:"Want to Start Learning?  Great!  This Is Where It All Starts!"}]))
            $("<br>").appendTo('#' + logModalContent_SC.id);
            $('#' + logModalContent_SC.id).append(logContentForm_SC.createElement());
                $('#' + logContentForm_SC.id).append(logFormUsernameLabel_SC.createElement([{attr:"for",content:"userInput",innerText:"Username: "}]));
                $('#' + logContentForm_SC.id).append(logFormUsernameInput_SC.createElement([{attr:"name",content:"userInput"}]));
                $("<br>").appendTo('#' + logContentForm_SC.id);
                $('#' + logContentForm_SC.id).append(logFormPasswordLabel_SC.createElement([{attr:"for",content:"passInput",innerText:"Password: "}]));
                $('#' + logContentForm_SC.id).append(logFormPasswordInput_SC.createElement([{attr:"name",content:"passInput"}]));
            $("<br>").appendTo('#' + logModalContent_SC.id);
            $('#' + logModalContent_SC.id).append(logRegisterPrompt_SC.createElement([{attr:"",content:"",innerText:"Don't have an account?  That's okay! Click to "}]));
                $("<span>Register</span>").appendTo('#' + logRegisterPrompt_SC.id);

// REGISTRY MODAL BUILD

    $(regModal).append(regModalDiv_SC.createElement());
        $('#' + regModalDiv_SC.id).append(regModalContent_SC.createElement());
            $('#' + regModalContent_SC.id).append(regModalClose_SC.createElement());
                $('#' + regModalClose_SC.id).html("&xotime;");
                    $('#' + regModalClose_SC.id).click(()=>$(regModal).css("display", "none"));
            $('#' + regModalContent_SC.id).append(regContentHeader_SC.createElement([{attr:"",content:"",innerText:"REGISTER"}]))
            $('#' + regModalContent_SC.id).append(regContentForm_SC.createElement());
                $('#' + regContentForm_SC.id).append(regFormUsernameLabel_SC.createElement([{attr:"for",content:"regUser",innerText:"Username: "}]));
                $('#' + regContentForm_SC.id).append(regFormUsernameInput_SC.createElement([{attr:"name",content:"regUser"}]));
                $("<br>").appendTo("#" + regContentForm_SC.id);
                $('#' + regContentForm_SC.id).append(regFormPasswordLabel_SC.createElement([{attr:"for",content:"regPass",innerText:"Password: "}]));
                $('#' + regContentForm_SC.id).append(regFormPasswordInput_SC.createElement([{attr:"name",content:"regPass"}]));
                $("<br>").appendTo("#" + regContentForm_SC.id);
                $('#' + regContentForm_SC.id).append(regFormSubmit_SC.createElement([{attr:"type", content: "submit"},{attr:"value", content:"Submit"}]));


// CHANGE NAV TEXT
    pageNav_A1.textContent = "| Home |"
    pageNav_A2.textContent = "| Top Flashcard Sets |"
    pageNav_A3.textContent = "| Games |"
    pageNav_A4.textContent = "| About Q-Clone |"

// SET BANNER ART SRC

    $(bannerDiv).append(bannerIMG_SC.createElement([{attr:"src", content:"https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg"}]));

// APPEND IFRAME FOR IMPLEMENTATION OF EXTERNAL HTML FILES

    $(document.body).append(navFrame_SC.createElement());
        $('#' + navFrame_SC.id).css("display", "none");

// ATTACH CLICK EVENTS TO HEADER NAVS

    $(userProfile).click(()=>$(userDropDown).slideToggle(1000))
    $(userLibrary).click((e)=>navLink(e));
    $(userCreateSet).click((e)=>navLink(e));

    $(log_A).click((e)=>navLink(e));
    $(reg_A).click((e)=>navLink(e));



    $(pageNav_A1).click((e)=>navLink(e))
    $(pageNav_A2).click((e)=>navLink(e))
    $(pageNav_A3).click((e)=>navLink(e))
    $(pageNav_A4).click((e)=>navLink(e))
};

// NAVIGATION REDIRECT

function navLink(e){
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
            $('#banner_graphic').css("display", "");
            $('#logIn_Links').css("display", "");
            $('#user_nav').css("display", "");
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
