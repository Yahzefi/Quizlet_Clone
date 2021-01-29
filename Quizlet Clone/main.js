//                                      ||   IMPORTS   ||                                      \\
import { Component } from "./classes.js";


//                                      ||   CONSTANTS FOR WEBPAGE DIVISIONS   ||                                      \\
const HEADER = document.getElementById('header_container');
const BODY = document.getElementById('page_container');
    const HOME = document.getElementById('body_background');
        const H_POSTS = document.getElementById('load_message');
    const CATEGORIES = document.getElementById('category_side');
const SUB_FORM = document.getElementById('update_form');


//                                      ||   CLASSES   ||                                      \\
const HEADER_CPT = new Component({Main: {text: "", isActive: true}, Alt: ""})
console.log(HEADER_CPT.cptName);


//                                      ||      ||                                      \\
// CODE HERE
