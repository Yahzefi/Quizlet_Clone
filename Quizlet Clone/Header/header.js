//                                      ||   IMPORTS   ||                                      \\

import { Subcomponent } from "../Initialization/Subcomponent.js";

//                                      ||   LINKED FUNCTION   ||                                      \\

export function headerMain(data){
    // PASS PARAM INTO SCOPED VARIABLE
    const HEADER_COLLECTION = data;

    // PULL EACH ELEMENT OF COLLECTION AREA
    let headerDiv = HEADER_COLLECTION.container;
        let logModal = HEADER_COLLECTION.children["logModal"];
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

//

    pageNav_A1.textContent = "| Home |"
    pageNav_A2.textContent = "| Top Flashcard Sets |"
    pageNav_A3.textContent = "| Games |"
    pageNav_A4.textContent = "| About Q-Clone |"

    $(bannerDiv).append(bannerIMG_SC.createElement([{attr:"src", content:"https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg"}]));

    $(userProfile).click(()=>$(userDropDown).slideToggle(1000))

    $(log_A).click((e)=>navLink(e, logModal));
    $(reg_A).click((e)=>navLink(e, logModal));

    $(document.body).append(navFrame_SC.createElement());
        $('#' + navFrame_SC.id).css("display", "none");

    $(pageNav_A1).click((e)=>navLink(e))
    $(pageNav_A2).click((e)=>navLink(e))
    $(pageNav_A3).click((e)=>navLink(e))
    $(pageNav_A4).click((e)=>navLink(e))
};

// NAVIGATION REDIRECT

function navLink(e, modal){
    switch(e.target.id){
        case "log_A":
            $(modal).fadeIn(1000);
            break;
        case "reg_A":
            $(modal).fadeIn(1000);
            break;
        case "navOne":
            $(document.body).css("overflow", "");
            $('#page_container').css("display", "");
            $('#form_container').css('display', '');
            $('#nav_frame').css("display", "none");
            $('#banner_graphic').css("display", "");
            $('#logIn_Links').css("display", "");
            $('#user_nav').css("display", "");
            
            break;
        case "navTwo":
            $(document.body).css("overflow", "");
            $('#page_container').css("display", "none");
            $('#form_container').css('display', 'none');
            $('#nav_frame').attr("src", "/Top_Sets/index.topSets.html");
            $('#nav_frame').css("display", "");
            $('#user_nav').slideUp(1000);
            $('#banner_graphic').slideUp(1000);
            $('#logIn_Links').slideUp(1000);
            break;
        case "navThree":
            $(document.body).css("overflow", "hidden");
            $('#page_container').css("display", "none");
            $('#form_container').css('display', 'none');
            $('#nav_frame').attr("src", "/Games/index.games.html");
            $('#nav_frame').css("display", "");
            $('#user_nav').slideUp(1000);
            $('#banner_graphic').slideUp(1000);
            $('#logIn_Links').slideUp(1000);
            break;
        case "navFour":
            $(document.body).css("overflow", "");
            $('#page_container').css("display", "none");
            $('#form_container').css('display', 'none');
            $('#nav_frame').attr("src", "/About/index.about.html");
            $('#nav_frame').css("display", "");
            $('#user_nav').slideUp(1000);
            $('#banner_graphic').slideUp(1000);
            $('#logIn_Links').slideUp(1000);
        case "":
            break;
        default:
            throw new Error("Route Not Found");
    }
}
