import { Component, Subcomponent } from "../Classes/Components.js";

export function formMain(data) {
// TRANSFER PARAMETER DATA ARRAY
    let formArr = data;
    console.log("form");

// SPLIT PARAMATER ARRAY
    let formDiv, formElement, nameInput;
    formDiv = accessArray("div", formArr);
    formElement = accessArray("form", formArr);
    nameInput = accessArray("nameInput", formArr);


// COMPONENTS
    let formCPT = new Component(formDiv, '', false, false);

// SUBCOMPONENTS
    let nameLabel = new Subcomponent('label', 'name_label', 'form-label', false);
    let emailLabel = new Subcomponent('label', 'email_label', 'form-label', false);

    let emailInput = new Subcomponent('input', 'email_input', 'txt-inp', false);


// CODE GOES HERE
    // JS CODE FOR INSERTED DOM ELEMENT BEFORE AN ALREADY PRESENT ELEMENT
    // formElement.insertBefore(nameLabel.createElement());
    
    // JQUERY CODE FOR THE ABOVE FUNCTIONALITY
    $(nameInput).before(nameLabel.createElement(true, [{reqAttr:"for", reqInfo:"nameInput", innerTxt:"Name:"}]));
    $("<br>").appendTo(formElement);
    $(formElement).append(emailLabel.createElement(true, [{reqAttr:"for", reqInfo:"email-label", innerTxt:"Email:"}]));
    $(formElement).append(emailInput.createElement(true, [{reqAttr:"type", reqInfo:"email"}, {reqAttr:"name", reqInfo:"email-label"}]));
}

function accessArray(tgt, formArr){
    switch(tgt){
        case "div":
            return formArr[0];
        case "form":
            return formArr[1];
        case "nameInput":
            return formArr[2];
        default:
            console.log("Error");
    }
}
