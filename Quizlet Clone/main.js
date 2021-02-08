//                                      ||   IMPORTS   ||                                      \\

import { initWebLoad } from "./Initialization/on_Init.js";
import { generateElementList } from "./Initialization/app.elements.js";

import { headerMain } from "./Header/header.js";
import { homeMain } from "./Home/home.js";
import { categoryMain } from "./Categories/categories.js";
import { formMain } from "./Subscription_Form/form.js";


//                                      ||   ON INIT  ||                                      \\

window.addEventListener("DOMContentLoaded", async ()=>{
// Initial DOM Creation
    initWebLoad()
    .then(generateElementList)
    .then((data)=>{
        const APP_ELEMENTS_LIST = data;

        headerMain(APP_ELEMENTS_LIST[0].Header);
        homeMain(APP_ELEMENTS_LIST[1].Body);
        categoryMain(APP_ELEMENTS_LIST[1].Body);
        formMain(APP_ELEMENTS_LIST[2].Form);
    })
});
