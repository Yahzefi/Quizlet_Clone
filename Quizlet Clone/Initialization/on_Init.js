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
        let nameLabel_SC = new Subcomponent('label', 'name_label', 'form-label', false);
        let nameInput_SC = new Subcomponent("input", "name_input", "txt-inp", false);
        let emailLabel_SC = new Subcomponent('label', 'email_label', 'form-label', false);
        let emailInput_SC = new Subcomponent('input', 'email_input', 'txt-inp', false);



export function initWebLoad(){
    return new Promise(resolve=>{
        formCPT.createContainer()
        .then((form)=>{
            $(document.body).prepend(form);
                $(form).append(form_SC.createElement());
                    $('#' + form_SC.id).append(subMessage_SC.createElement([{attr:"", content: "", innerText:"Interested in Learning More?"}]));
                        $("<br>").appendTo('#' + subMessage_SC.id);
                        $("<span>Sign Up For Email Updates!</span>").appendTo('#' + subMessage_SC.id);
                    $('#' + form_SC.id).append(nameLabel_SC.createElement([{attr:"for", content:"nameInput", innerText:"Name:"}]));
                    $('#' + form_SC.id).append(nameInput_SC.createElement([{attr: "name", content: "nameInput"}]));
                    $("<br>").appendTo('#' + form_SC.id);
                    $('#' + form_SC.id).append(emailLabel_SC.createElement([{attr: "for", content:"emailInput", innerText:"Email:"}]));
                    $('#' + form_SC.id).append(emailInput_SC.createElement([{attr:"type", content:"email"}, {attr:"name", content:"emailInput"}]));
        })
        bodyCPT.createContainer()
        .then((body)=>{
            $(document.body).prepend(body);
                $(body).append(home_SC.createElement())
                    $('#' + home_SC.id).append(posts_SC.createElement());
                $(body).append(ctg_SC.createElement());
        });
        headerCPT.createContainer()
        .then((head)=>{
            $(document.body).prepend(head);
                $(head).append(logInLinks_SC.createElement());
                    $('#' + logInLinks_SC.id).append(mainHeadTxt_SC.createElement([{attr:"", content:"", innerText:"Welcome to the Quizlet Clone"}]));
                    $('#' + logInLinks_SC.id).append(logNav_SC.createElement());
                        $('#' + logNav_SC.id).append(logAnchor_SC.createElement([{attr:"href", content:"#", innerText: "LOGIN"}]));
                    $('#' + logInLinks_SC.id).append(regNav_SC.createElement());
                        $('#' + regNav_SC.id).append(regAnchor_SC.createElement([{attr:"href", content:"#", innerText:"REGISTER"}]));
                $(head).append(banner_SC.createElement());
                $(head).append(pageNavDiv_SC.createElement());
                    $('#' + pageNavDiv_SC.id).append(pageNav_SC.createElement());
                        $('#' + pageNav_SC.id).append(tempNavOne_SC.createElement([{attr:"href", content:"#", innerText:"Nav One"}]));
                            $("<span>| </span>").prependTo('#' + tempNavOne_SC.id);
                            $("<span> | </span>").appendTo('#' + tempNavOne_SC.id);
                        $('#' + pageNav_SC.id).append(tempNavTwo_SC.createElement([{attr:"href", content:"#", innerText:"Nav Two"}]));
                            $("<span>| </span>").prependTo('#' + tempNavTwo_SC.id);
                            $("<span> | </span>").appendTo('#' + tempNavTwo_SC.id);
                        $('#' + pageNav_SC.id).append(tempNavThree_SC.createElement([{attr:"href", content:"#", innerText:"Nav Three"}]));
                            $("<span>| </span>").prependTo('#' + tempNavThree_SC.id);
                            $("<span> |</span>").appendTo('#' + tempNavThree_SC.id);
        });
        resolve();
    });
};
