//                                      ||   IMPORTS   ||                                      \\

import { initWebLoad } from "./Initialization/on_Init.js";
import { headerMain } from "./Header/header.js";
import { homeMain } from "./Home/home.js";
import { formMain } from "./Subscription_Form/form.js";

//                                      ||   IMMUTABLE ELEMENTS   ||                                      \\

const HEADER = document.getElementById('header_container');
    const LOGIN_CREDS = document.getElementById('logIn_Links');
        const MAIN_HEADING = document.getElementById('main_header');
        const LOGIN_NAV = document.getElementById('logIn_Nav');
            const LOG_ANCHOR = document.getElementById('log_A');
        const REGISTER_NAV = document.getElementById('register_Nav');
            const REG_ANCHOR = document.getElementById('reg_A');
    const BANNER = document.getElementById('banner_graphic');
    const PAGENAV_DIV = document.getElementById('page_navigation');
        const PAGE_NAV = document.getElementById('routing_nav');
            const PAGENAV_A1 = document.getElementById('navOne');
            const PAGENAV_A2 = document.getElementById('navTwo');
            const PAGENAV_A3 = document.getElementById('navThree');

const BODY = document.getElementById('page_container');
    const HOME = document.getElementById('home_container');
        const POSTS = document.getElementById('post_container');
    const CATEGORIES = document.getElementById('category_container');

const FORM = document.getElementById('form_container');
    const SUB_MSG = document.getElementById('sub_message');
    const NAME_INP = document.getElementById('name_input');

//                                      ||   EXPORTABLE OBJECTS  ||                                      \\

const APP_ELEMENTS_LIST = [
    {
        Header:
        {
            container: HEADER,
            children: 
            {
                credentialsDiv: LOGIN_CREDS, 
                credDiv_Children:
                {
                    mainHeading: MAIN_HEADING,
                    logIn_Nav: LOGIN_NAV, 
                    logInAnchors:
                    {
                        logAnchor: LOG_ANCHOR
                    },
                    register_Nav: REGISTER_NAV,
                    registerAnchors:
                    {
                        regAnchor: REG_ANCHOR
                    }
                },
                banner: BANNER,
                pageNavDiv: PAGENAV_DIV,
                navDiv_Children:
                {
                    pageNav: PAGE_NAV,
                    nav_Children:
                    {
                        pageNav_A1: PAGENAV_A1,
                        pageNav_A2: PAGENAV_A2,
                        pageNav_A3: PAGENAV_A3
                    }
                }
            }
        }
    },
    {
        Body: 
        {
            container: BODY,
            children:
            {
                home: HOME,
                home_Children:
                {
                    posts: POSTS
                },
                categories: CATEGORIES
            }
        }
    },
    {
        Form:
        {
            container: FORM,
            children:
            {
                subMessage: SUB_MSG,
                nameInput: NAME_INP
            }
        }
    }
];

//                                      ||   ON INIT  ||                                      \\

document.getElementById('routing_nav').addEventListener('click', e=>navLink(e));
document.getElementById('logIn_Nav').addEventListener('click', e=>navLink(e));
document.getElementById('register_Nav').addEventListener('click', e=>navLink(e));

window.addEventListener("DOMContentLoaded", async ()=>{
// Initial DOM Creation
    initWebLoad();
    // .then(containSC)
    // .then((el)=>{initPageFill(el)});
// Other Functionality On Initialization
    headerCPT.createAnimations();
    bodyCPT.createAnimations();
    formCPT.createAnimations();
});



// // Returns an Object Containing ID For All Subcomponent Elements \\
// function containSC(){
//     let passedData = {
//         logIn: logInLinks_SC.id,
//         pageNav: pageNavDiv_SC.id,
//         home: home_SC.id,
//             posts: posts_SC.id,
//         categories: ctg_SC.id,
//         form: form_SC.id,
//             nameInput: nameInput_SC.id
//     };
//     return passedData;
// };

// Starting Point of Future Code && Definitions of Variables Pulled From Other Sources \\
// function initPageFill(data){
// // All Necessary HTML Element Reference Variables
//     let headerDiv, bodyDiv, formDiv;
//     let logInDiv, pageNavDiv, homeDiv, postsDiv, categoryDiv;
//     let subForm, nameInput;

//     headerDiv = headerCPT.cptTagName;
//         logInDiv = document.getElementById(data.logIn);
//         pageNavDiv = document.getElementById(data.pageNav);

//     let headerCollection = [headerDiv, logInDiv, pageNavDiv];

//     bodyDiv = bodyCPT.cptTagName;
//         homeDiv = document.getElementById(data.home);
//             postsDiv = document.getElementById(data.posts);
//         categoryDiv = document.getElementById(data.categories);

//     let bodyCollection = [bodyDiv, homeDiv, postsDiv, categoryDiv];

//     formDiv = formCPT.cptTagName;
//         subForm = document.getElementById(data.form);
//             nameInput = document.getElementById(data.nameInput);

//     let formCollection = [formDiv, subForm, nameInput];

// // START CODE HERE
//     headerMain(headerCollection);
//     homeMain(bodyCollection);
//     formMain(formCollection);
// };

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
            console.log("Nav One");
            break;
        case "navTwo":
            console.log("Nav Two");
            break;
        case "navThree":
            console.log("Nav Three");
            break;
        case "logIn_Nav":
            break;
        case "register_Nav":
            break;
        case "routing_nav":
            break;
        default:
            throw new Error("Route Not Found");
    }
}
