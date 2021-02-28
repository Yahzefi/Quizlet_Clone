//                                      ||   IMPORTS   ||                                      \\

import { Component } from "../Initialization/Component.js";
import { Subcomponent } from "../Initialization/Subcomponent.js";
import { Assistant } from "../Initialization/Assistants.js";

//                                      ||   INSTANTIATIONS   ||                                      \\

// Components (CONTAINERS)

let headerCPT = new Component("div", 'header_container', 'h-container');
let bodyCPT = new Component("div", "page_container", "p-container");
let formCPT = new Component("div", "form_container", "form-container");

// Subcomponents (CHILDREN ELEMENTS)

// HEADER
    let logInModal_SC = new Subcomponent("div", "log_modal", "logModal_container");
    let registerModal_SC = new Subcomponent("div", "reg_modal", "regModal_container")
    let userNavBar_SC = new Subcomponent("nav", "user_nav", "user-nav");
        let userProfile_SC = new Subcomponent("span", "user_profile", "user-profile");
        let profileDropDown_SC = new Subcomponent("div", "user_dropdown", "user-drop");
            let profileOptionOne_SC = new Subcomponent("span", "opt_1", "user-menuSelect");
            let profileOptionTwo_SC = new Subcomponent("span", "opt_2", "user-menuSelect");
            let profileOptionThree_SC = new Subcomponent("span", "opt_3", "user-menuSelect");
        let userLibrary_SC = new Subcomponent("span", "user_library", "user-span");
        let userCreateSet_SC = new Subcomponent("span", "user_newSet", "user-span");
    let logInLinks_SC = new Subcomponent('div', 'logIn_Links', 'log-links');
        let mainHeadTxt_SC = new Subcomponent('h1', 'main_header', 'm_Header');
        let logNav_SC = new Subcomponent('nav', 'logIn_Nav', '');
            let logAnchor_SC = new Subcomponent('a', 'log_A', '');
        let regNav_SC = new Subcomponent('nav', 'register_Nav', '');
            let regAnchor_SC = new Subcomponent('a', 'reg_A', '');
    let banner_SC = new Subcomponent('div', 'banner_graphic', 'ban-graphic');
    let pageNavDiv_SC = new Subcomponent('div', 'page_navigation', 'pg_nav');
        let pageNav_SC = new Subcomponent('nav', 'routing_nav', '');
            let tempNavOne_SC = new Subcomponent('a', 'navOne', '');
            let tempNavTwo_SC = new Subcomponent('a', 'navTwo', '');
            let tempNavThree_SC = new Subcomponent('a', 'navThree', '');
            let tempNavFour_SC = new Subcomponent('a', 'navFour', '');
// BODY
    let modalBox1_SC = new Subcomponent("div", "modalBox_1", "modal-box");
    let modalBox2_SC = new Subcomponent("div", "modalBox_2", "modal-box");
    let home_SC = new Subcomponent("div", "home_container", "home-container");
        let posts_SC = new Subcomponent("div", "post_container", "post-container");
    let ctg_SC = new Subcomponent("div", "category_container", "ctg-container");
// FORM
    let form_SC = new Subcomponent("form", "subscription_form", "sub-form");
        let subMessage_SC = new Subcomponent('p', 'sub_message', 'sub-msg');
        let nameLabel_SC = new Subcomponent('label', 'name_label', 'form-label');
        let nameInput_SC = new Subcomponent("input", "name_input", "txt-inp");
        let emailLabel_SC = new Subcomponent('label', 'email_label', 'form-label');
        let emailInput_SC = new Subcomponent('input', 'email_input', 'txt-inp');
        let submitForm_SC = new Subcomponent("input", "sub_submit", "sub-submit");

//                                      ||   ASSISTANTS   ||                                      \\

    let avatar_Tom = new Assistant("program_assistant", false, "Programming");
    let avatar_Kinsley = new Assistant("math_assistant", false, "Math");
    let avatar_Fredrick = new Assistant("history_assistant", false, "History");
    let avatar_Damien = new Assistant("spanish_assistant", false, "Spanish");

    export const ASSISTANT_LIST = {
        Tom: avatar_Tom,
        Kinsley: avatar_Kinsley,
        Fredrick: avatar_Fredrick,
        Damien: avatar_Damien
    }

//                                      ||   ON INIT (DOM CONSTRUCTION)   ||                                      \\

export function initWebLoad(){
    return new Promise(resolve=>{
// FORM
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
                    $("<br>").appendTo('#' + form_SC.id);
                    $('#' + form_SC.id).append(submitForm_SC.createElement([{attr:"type", content:"submit"},{attr:"value", content:"Subscribe"}]));
        })
// BODY
        bodyCPT.createContainer()
        .then((body)=>{
            $(document.body).prepend(body);
                $(body).append(modalBox1_SC.createElement());
                $(body).append(modalBox2_SC.createElement());
                $(body).append(home_SC.createElement())
                    $('#' + home_SC.id).append("<h2>Recent Updates</h2>");
                        $('#' + home_SC.id + ' h2').css("text-decoration", 'underline');
                    $('#' + home_SC.id).append(posts_SC.createElement());
                $(body).append(ctg_SC.createElement());
                    $('#' + ctg_SC.id).append("<h2>Categories</h2>");
                        $('#' + ctg_SC.id + ' h2').css("text-decoration", 'underline');
        });
// HEADER
        headerCPT.createContainer()
        .then((head)=>{
            $(document.body).prepend(head);
                $(head).append(logInModal_SC.createElement());
                $(head).append(registerModal_SC.createElement());
                $(head).append(userNavBar_SC.createElement());
                    $('#' + userNavBar_SC.id).css("visibility", "hidden");
                    $('#' + userNavBar_SC.id).append(userProfile_SC.createElement([{attr:"", content:"", innerText: "Profile"}]));
                        $('#' + userProfile_SC.id).append(profileDropDown_SC.createElement());
                            $('#' + profileDropDown_SC.id).append(profileOptionOne_SC.createElement([{attr:"", content:"", innerText:"Option 1"}]));

                            $('#' + profileDropDown_SC.id).append(profileOptionTwo_SC.createElement([{attr:"", content:"", innerText:"Settings"}]));

                            $('#' + profileDropDown_SC.id).append(profileOptionThree_SC.createElement([{attr:"", content:"", innerText:"Log Out"}]));
                                $('#' + profileDropDown_SC.id).css("display", "none");
                    $('#' + userNavBar_SC.id).append(userLibrary_SC.createElement([{attr:"", content:"", innerText:"My Library"}]));
                    $('#' + userNavBar_SC.id).append(userCreateSet_SC.createElement([{attr:"", content:"", innerText:"Create New Set"}]));
                $(head).append(logInLinks_SC.createElement());
                    $('#' + logInLinks_SC.id).append(mainHeadTxt_SC.createElement([{attr:"", content:"", innerText:"Welcome to Q-Clone!"}]));
                        $('#' + mainHeadTxt_SC.id).css("font-size", "72px")
                    $('#' + logInLinks_SC.id).append(logNav_SC.createElement());
                        $('#' + logNav_SC.id).append(logAnchor_SC.createElement([{attr:"", content:"", innerText: "LOGIN"}]));
                    $('#' + logInLinks_SC.id).append(regNav_SC.createElement());
                        $('#' + regNav_SC.id).append(regAnchor_SC.createElement([{attr:"", content:"", innerText:"REGISTER"}]));
                $(head).append(banner_SC.createElement());
                $(head).append(pageNavDiv_SC.createElement());
                    $('#' + pageNavDiv_SC.id).append(pageNav_SC.createElement());
                        $('#' + pageNav_SC.id).append(tempNavOne_SC.createElement([{attr:"", content:"", innerText:"Nav One"}]));
                            $("<span>| </span>").prependTo('#' + tempNavOne_SC.id);
                            $("<span> | </span>").appendTo('#' + tempNavOne_SC.id);
                        $('#' + pageNav_SC.id).append(tempNavTwo_SC.createElement([{attr:"", content:"", innerText:"Nav Two"}]));
                            $("<span>| </span>").prependTo('#' + tempNavTwo_SC.id);
                            $("<span> | </span>").appendTo('#' + tempNavTwo_SC.id);
                        $('#' + pageNav_SC.id).append(tempNavThree_SC.createElement([{attr:"", content:"", innerText:"Nav Three"}]));
                            $("<span>| </span>").prependTo('#' + tempNavThree_SC.id);
                            $("<span> |</span>").appendTo('#' + tempNavThree_SC.id);
                        $('#' + pageNav_SC.id).append(tempNavFour_SC.createElement([{attr:"", content:"", innerText:"Nav Three"}]));
                            $("<span>| </span>").prependTo('#' + tempNavFour_SC.id);
                            $("<span> |</span>").appendTo('#' + tempNavFour_SC.id);
        });
        resolve();
    });
};
