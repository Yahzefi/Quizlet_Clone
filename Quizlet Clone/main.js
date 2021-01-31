//                                      ||   IMPORTS   ||                                      \\

import { Component, Subcomponent } from "./Classes/Components.js";
import { headerMain } from "./Header/header.js";

//                                      ||   CONSTANTS FOR WEBPAGE DIVISIONS   ||                                      \\

const HEADER = document.getElementById('header_container');
    const LOGIN_CREDS = document.getElementById('logIn_Links');
    const PAGE_NAV = document.getElementById('page_navigation');
const BODY = document.getElementById('page_container');
const FORM = document.getElementById('form_container');

//                                      ||   INSTANTIATIONS   ||                                      \\

// Components (CONTAINERS)

let headerCPT = new Component(HEADER, 1, true, false);
let bodyCPT = new Component(BODY, 2, false, false);
let formCPT = new Component(FORM, 3, false, true);

// Subcomponents (CHILDREN ELEMENTS)

let logInLinks_SubCPT = new Subcomponent(LOGIN_CREDS.tagName, LOGIN_CREDS.id, LOGIN_CREDS.className, false);
let pageNav_SubCPT = new Subcomponent(PAGE_NAV.tagName, PAGE_NAV.id, PAGE_NAV.className, false);
let home_SubCPT = new Subcomponent("div", "home_container", "home-container", false);
    let posts_SubCPT = new Subcomponent("div", "post_container", "post-container", false);
let ctg_SubCPT = new Subcomponent("div", "category_container", "ctg-container", false);
let form_subCPT = new Subcomponent("form", "subscription_form", "sub-form", false);
    let subForm_subCPT = new Subcomponent("input", "name_input", "name-inp", false);

//                                      ||   ON INIT  ||                                      \\

window.addEventListener("DOMContentLoaded", async ()=>{
// Initial DOM Creation
    initWebLayout()
    .then(createSubObj)
    .then((el)=>{initPageFill(el)});
// Other Functionality On Initialization
    headerCPT.createAnimations();
});

// Returns a Promise to Create Subcomponent Elements and Append Them to DOM \\
function initWebLayout(){
    return new Promise(resolve=>{
        bodyCPT.attachTwoSubCPT(
            home_SubCPT.createElement(),
            posts_SubCPT.createElement()
        );
        bodyCPT.attachSubCPT(
            ctg_SubCPT.createElement()
        );
        formCPT.attachTwoSubCPT(
            form_subCPT.createElement(),
            subForm_subCPT.createElement()
        );
        resolve();
    });
};

// Returns an Object Containing ID For All Subcomponent Elements \\
function createSubObj(){
    let passedData = {
        logIn: logInLinks_SubCPT.id,
        pageNav: pageNav_SubCPT.id,
        home: home_SubCPT.id,
            posts: posts_SubCPT.id,
        categories: ctg_SubCPT.id,
        form: form_subCPT.id,
            nameInput: subForm_subCPT.id
    };
    return passedData;
};

// Starting Point of Future Code && Definitions of Variables Pulled From Other Sources \\
function initPageFill(data){
// All Necessary HTML Element Reference Variables
    let headerDiv, bodyDiv, formDiv;
    let logInDiv, pageNavDiv, homeDiv, postsDiv, categoryDiv;
    let subForm, nameInput;

    headerDiv = headerCPT.cptName;
        logInDiv = document.getElementById(data.logIn);
        pageNavDiv = document.getElementById(data.pageNav);

    let headerCollection = [headerDiv, logInDiv, pageNavDiv];

    bodyDiv = bodyCPT.cptName;
        homeDiv = document.getElementById(data.home);
            postsDiv = document.getElementById(data.posts);
        categoryDiv = document.getElementById(data.categories);

    let bodyCollection = [bodyDiv, homeDiv, postsDiv, categoryDiv];

    formDiv = formCPT.cptName;
        subForm = document.getElementById(data.form);
            nameInput = document.getElementById(data.nameInput);

    let formCollection = [formDiv, subForm, nameInput];

// START CODE HERE
    headerMain(headerCollection);
};
