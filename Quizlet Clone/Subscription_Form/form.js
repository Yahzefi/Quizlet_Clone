import { Component, Subcomponent } from "../Classes/Components.js";

export function formMain(data) {
// TRANSFER PARAMETER DATA ARRAY
    let formArr = data;
// SPLIT PARAMATER ARRAY
    let formDiv, formElement, nameInput;
    formDiv = accessArray(0, formArr);
    formElement = accessArray(1, formArr);
    nameInput = accessArray(2, formArr);
// COMPONENTS
    let formCPT = new Component(formDiv, '', false, false);
// SUBCOMPONENTS
    let nameLabel = new Subcomponent('label', 'name_label', '', false);


// CODE GOES HERE
    formElement.insertBefore(nameLabel.createElement("for", ["nameInput", "Name:"]), nameInput);
}

function accessArray(tgt, formArr){
    switch(tgt){
        case 0:
            return formArr[0];
        case 1:
            return formArr[1];
        case 2:
            return formArr[2];
        default:
            console.log("Error");
    }
}
