//                                      ||   IMPORTS   ||                                      \\

import { Component } from "../Initialization/Component.js";
import { Subcomponent } from "../Initialization/Subcomponent.js";

//                                      ||   INSTANTIATIONS   ||                                      \\

// Components (CONTAINERS)

let headerCPT = new Component("div", 'header_container', 'h-container', false, false);
let bodyCPT = new Component("div", "page_container", "p-container", false, false);
let formCPT = new Component("div", "form_container", "form-container", false, false);

// Subcomponents (CHILDREN ELEMENTS)

// HEADER
    let logInLinks_SC = new Subcomponent('div', 'logIn_Links', 'log-links', false);
        let mainHeadTxt_SC = new Subcomponent('h1', 'main_header', 'm_Header', false);
        let logNav_SC = new Subcomponent('nav', 'logIn_Nav', '', false);
            let logAnchor_SC = new Subcomponent('a', 'log_A', '', false);
        let regNav_SC = new Subcomponent('nav', 'register_Nav', '', false);
            let regAnchor_SC = new Subcomponent('a', 'reg_A', '', false);
    let banner_SC = new Subcomponent('div', 'banner_graphic', 'ban-graphic', false);
    let pageNavDiv_SC = new Subcomponent('div', 'page_navigation', 'pg_nav', false);
        let pageNav_SC = new Subcomponent('nav', 'routing_nav', '', false);
            let tempNavOne_SC = new Subcomponent('a', 'navOne', '', false);
            let tempNavTwo_SC = new Subcomponent('a', 'navTwo', '', false);
            let tempNavThree_SC = new Subcomponent('a', 'navThree', '', false);
// BODY
    let home_SC = new Subcomponent("div", "home_container", "home-container", false);
        let posts_SC = new Subcomponent("div", "post_container", "post-container", false);
    let ctg_SC = new Subcomponent("div", "category_container", "ctg-container", false);
// FORM
    let form_SC = new Subcomponent("form", "subscription_form", "sub-form", false);
        let subMessage_SC = new Subcomponent('p', 'sub_message', 'sub-msg', false);
        let nameInput_SC = new Subcomponent("input", "name_input", "txt-inp", false);



export function initWebLoad(){
    return new Promise(resolve=>{

        resolve();
    });
};