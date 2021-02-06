//                                      ||   IMPORTS   ||                                      \\

import { Component } from "../Initialization/Component.js";
import { Subcomponent } from "../Initialization/Subcomponent.js";

//                                      ||   LINKED FUNCTION   ||                                      \\

export function headerMain(data){
    let header_Collection = data;
    console.log(header_Collection);

    $('#log_A').click((e)=>navLink(e));
    $('#reg_A').click((e)=>navLink(e));

    $('#navOne').click((e)=>navLink(e))
    $('#navTwo').click((e)=>navLink(e))
    $('#navThree').click((e)=>navLink(e))
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
