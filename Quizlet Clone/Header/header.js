//                                      ||   IMPORTS   ||                                      \\

import { Subcomponent } from "../Initialization/Subcomponent.js";

//                                      ||   LINKED FUNCTION   ||                                      \\

export function headerMain(data){
    // PASS PARAM INTO SCOPED VARIABLE
    const HEADER_COLLECTION = data;

    // PULL EACH ELEMENT OF COLLECTION AREA
    let headerDiv = HEADER_COLLECTION.container;
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

//                                      ||      START NEW CODE HERE     ||                                      \\

// SUBCOMPONENTS (FOR NEW ELEMENTS OUTSIDE OF INITIAL TEMPLATE)

    let bannerIMG_SC = new Subcomponent("img", "banner_img", "ban-img");

//

    pageNav_A1.textContent = "| Top Flashcard Sets |"
    pageNav_A2.textContent = "| Games |"
    pageNav_A3.textContent = "| About Q-Clone |"

    $(bannerDiv).append(bannerIMG_SC.createElement([{attr:"src", content:"https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg"}]));

    $(log_A).click((e)=>navLink(e));
    $(reg_A).click((e)=>navLink(e));

    $(pageNav_A1).click((e)=>navLink(e))
    $(pageNav_A2).click((e)=>navLink(e))
    $(pageNav_A3).click((e)=>navLink(e))
};

// NAVIGATION REDIRECT

function navLink(e){
    switch(e.target.id){
        case "log_A":
            console.log("log in");
            break;
        case "reg_A":
            console.log("register");
            break;
        case "navOne":
            // navOne["href"]="test.html";
            console.log("Nav One");
            break;
        case "navTwo":
            console.log("Nav Two");
            break;
        case "navThree":
            console.log("Nav Three");
            break;
        case "":
            break;
        default:
            throw new Error("Route Not Found");
    }
}
