//                                      ||   IMPORTS   ||                                      \\
import { Component, Subcomponent } from "./classes.js";

//                                      ||   CONSTANTS FOR WEBPAGE DIVISIONS   ||                                      \\
const HEADER = document.getElementById('header_container');
const BODY = document.getElementById('page_container');
    const HOME = document.getElementById('body_background');
        const H_POSTS = document.getElementById('load_message');
    const CATEGORIES = document.getElementById('category_side');
const FORM = document.getElementById('form_container');
    const SUB_FORM = document.getElementById('subscription_form');

//                                      ||   INSTANTIATIONS   ||                                      \\

// Components (CONTAINERS)
let headerCPT = new Component(HEADER, 1, false, false);
let bodyCPT = new Component(BODY, 2, false, false);
let formCPT = new Component(FORM, 3, false, true);

// Subcomponents (CHILDREN ELEMENTS)
let home_SubCPT = new Subcomponent("div", "home_container", "home-container", false);
    let posts_SubCPT = new Subcomponent("div", "post_container", "post-container", false);
let ctg_SubCPT = new Subcomponent("div", "category_container", "ctg-container", false);
let form_subCPT = new Subcomponent("form", "subscription_form", "sub-form", false);
    let subForm_subCPT = new Subcomponent("input", "", "", false);

//                                      ||   DOM MANIPULATIONS   ||                                      \\
formCPT.attachTwoSubCPT(
    form_subCPT.createElement(), 
    subForm_subCPT.createElement()
);

