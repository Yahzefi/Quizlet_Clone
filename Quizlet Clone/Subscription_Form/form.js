import { Component } from "../Initialization/Component.js";
import { Subcomponent } from "../Initialization/Subcomponent.js";

export function formMain(data) {
// TRANSFER PARAMETER DATA ARRAY
    let form_Collection = data;
    console.log(form_Collection);

// SPLIT PARAMATER ARRAY
    let formDiv, formElement, nameLabel, nameInput, emailLabel, emailInput;
    formDiv = accessArray("div", form_Collection);
        formElement = accessArray("form", form_Collection);
            nameLabel = accessArray("nameLabel", form_Collection);
            nameInput = accessArray("nameInput", form_Collection);
            emailLabel = accessArray("emailLabel", form_Collection);
            emailInput = accessArray("emailInput", form_Collection);
}

function accessArray(tgt, form_Collection){
    switch(tgt){
        case "div":
            return form_Collection["container"];
        case "form":
            return form_Collection["children"].form;
        case "nameLabel":
            return form_Collection["children"].formChildren["nameLabel"];
        case "nameInput":
            return form_Collection["children"].formChildren["nameInput"];
        case "emailLabel":
            return form_Collection["children"].formChildren["emailLabel"];
        case "emailInput":
            return form_Collection["children"].formChildren["emailInput"];
        default:
            console.log("Error");
    }
}
