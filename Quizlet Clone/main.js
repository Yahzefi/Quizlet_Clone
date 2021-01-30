//                                      ||   IMPORTS   ||                                      \\

import { Component, Subcomponent } from "./Classes/Components.js";

//                                      ||   CONSTANTS FOR WEBPAGE DIVISIONS   ||                                      \\

const HEADER = document.getElementById('header_container');
const BODY = document.getElementById('page_container');
const FORM = document.getElementById('form_container');

//                                      ||   INSTANTIATIONS   ||                                      \\

// Components (CONTAINERS)

let headerCPT = new Component(HEADER, 1, true, false);
let bodyCPT = new Component(BODY, 2, false, false);
let formCPT = new Component(FORM, 3, false, true);

// Subcomponents (CHILDREN ELEMENTS)

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
    let homeDiv, postsDiv, categoryDiv;
    let subForm, nameInput;

    headerDiv = headerCPT.cptName;

    bodyDiv = bodyCPT.cptName;
        homeDiv = document.getElementById(data.home);
            postsDiv = document.getElementById(data.posts);
        categoryDiv = document.getElementById(data.categories);

    formDiv = formCPT.cptName;
        subForm = document.getElementById(data.form);
            nameInput = document.getElementById(data.nameInput);

// START CODE HERE

};
