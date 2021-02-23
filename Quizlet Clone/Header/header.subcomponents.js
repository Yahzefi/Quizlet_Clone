import { Subcomponent } from "../Initialization/Subcomponent.js";

export function appendHeader(data){
    // PASS PARAM INTO SCOPED VARIABLE
    const HEADER_COLLECTION = data;
    // PULL EACH ELEMENT OF COLLECTION AREA
    let headerDiv = HEADER_COLLECTION.container;
        let logModal = HEADER_COLLECTION.children["logModal"];
        let regModal = HEADER_COLLECTION.children["regModal"];
        let userNavBar = HEADER_COLLECTION.children["userNavBar"];
            let userProfile = HEADER_COLLECTION.children["userNavBar_Children"].userProfile;
                let userDropDown = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown"];
                    let profileOptionOne = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown_Children"].profileOptionOne;
                    let profileOptionTwo = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown_Children"].profileOptionTwo;
                    let profileOptionThree = HEADER_COLLECTION.children["userNavBar_Children"].userProfile_Children["userDropDown_Children"].profileOptionThree;
            let userLibrary = HEADER_COLLECTION.children["userNavBar_Children"].userLibrary;
            let userCreateSet = HEADER_COLLECTION.children["userNavBar_Children"].userCreateSet;
        let credDiv = HEADER_COLLECTION.children["credentialsDiv"];
            let mainHeading = HEADER_COLLECTION.children["credDiv_Children"].mainHeading;
            let logNav = HEADER_COLLECTION.children["credDiv_Children"].logIn_Nav;
                let log_A = HEADER_COLLECTION.children["credDiv_Children"].logInAnchors["logAnchor"];
            let regNav = HEADER_COLLECTION.children["credDiv_Children"].register_Nav;
                let reg_A = HEADER_COLLECTION.children["credDiv_Children"].registerAnchors["regAnchor"];
        let bannerDiv = HEADER_COLLECTION.children["banner"];
        let pageNavDiv = HEADER_COLLECTION.children["pageNavDiv"];
            let pageNav = HEADER_COLLECTION.children["navDiv_Children"].pageNav;
                let pageNav_A1 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A1"];
                let pageNav_A2 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A2"];
                let pageNav_A3 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A3"];
                let pageNav_A4 = HEADER_COLLECTION.children["navDiv_Children"].nav_Children["pageNav_A4"];

// SUBCOMPONENTS (FOR NEW ELEMENTS OUTSIDE OF INITIAL TEMPLATE)

let bannerIMG_SC = new Subcomponent("img", "banner_img", "ban-img");
let navFrame_SC = new Subcomponent("iframe", "nav_frame", "nav-frame");

// LOGIN MODAL 
let logModalDiv_SC = new Subcomponent("div", "logModal_div", "log-div");
    let logModalContent_SC = new Subcomponent("div", "logModal_content", "log-content");
        let logModalClose_SC = new Subcomponent("span", "log_close", "modal-close");
        let logContentHeader_SC = new Subcomponent("h4", "log_header", "log-head");
        let logContentForm_SC = new Subcomponent("form", "log_form", "log-form");
            let logFormUsernameLabel_SC = new Subcomponent("label", "username_label", "log-label");
            let logFormUsernameInput_SC = new Subcomponent("input", "username_input", "log-inp");
            let logFormPasswordLabel_SC = new Subcomponent("label", "password_label", "log-label");
            let logFormPasswordInput_SC = new Subcomponent("input", "password_input", "log-inp");
            let logFormSubmit_SC = new Subcomponent("input", "log_submit", "log-submit");
        let logRegisterPrompt_SC = new Subcomponent("p", "register_prompt", "reg-prompt");

// REGISTRY MODAL
let regModalDiv_SC = new Subcomponent("div", "regModal_div", "reg-div");
    let regModalContent_SC = new Subcomponent("div", "regModal_content", "reg-content");
        let regModalClose_SC = new Subcomponent("span", "reg_close", "modal-close");
        let regContentHeader_SC = new Subcomponent("h4", "reg_header", "reg-head");
        let regContentForm_SC = new Subcomponent("form", "reg_form", "reg-form");
            let regFormFullNameLabel_SC = new Subcomponent("label", "fullName_label", "reg-label");
            let regFormFullNameInput_SC = new Subcomponent("input", "fullName_input", "reg-inp");
            let regFormBirthdateLabel_SC = new Subcomponent("label", "birthDate_label", "reg-label");
            let regFormBirthdateInput_SC = new Subcomponent("input", "birthDate_input", "reg-inp");
            let regFormUsernameLabel_SC = new Subcomponent("label", "regUser_label", "reg-label");
            let regFormUsernameInput_SC = new Subcomponent("input", "regUser_input", "reg-inp");
            let regFormPasswordLabel_SC = new Subcomponent("label", "regPass_label", "reg-label");
            let regFormPasswordInput_SC = new Subcomponent("input", "regPass_input", "reg-inp");
            let regFormSubmit_SC = new Subcomponent("input", "register_submit", "reg-submit");

//  LOGIN MODAL BUILD

$(logModal).append(logModalDiv_SC.createElement());
    $('#' + logModalDiv_SC.id).append(logModalContent_SC.createElement());
        $('#' + logModalContent_SC.id).append(logModalClose_SC.createElement());
            $('#' + logModalClose_SC.id).html("&xotime;");
        $("<br>").appendTo("#" + logModalContent_SC.id);
        $('#' + logModalContent_SC.id).append(logContentHeader_SC.createElement([{attr:"",content:"",innerText:"Want to Start Learning?  Great!  This Is Where It All Starts!"}]))
        $("<br>").appendTo('#' + logModalContent_SC.id);
        $('#' + logModalContent_SC.id).append(logContentForm_SC.createElement());
            $('#' + logContentForm_SC.id).append(logFormUsernameLabel_SC.createElement([{attr:"for",content:"userInput",innerText:"Username: "}]));
            $('#' + logContentForm_SC.id).append(logFormUsernameInput_SC.createElement([{attr:"name",content:"userInput"}, {attr: "required"}]));
            $("<br>").appendTo('#' + logContentForm_SC.id);
            $('#' + logContentForm_SC.id).append(logFormPasswordLabel_SC.createElement([{attr:"for",content:"passInput",innerText:"Password: "}]));
            $('#' + logContentForm_SC.id).append(logFormPasswordInput_SC.createElement([{attr:"type", content:"password"},{attr:"name",content:"passInput"}, {attr: "required"}]));
            $("<br>").appendTo("#" + logContentForm_SC.id);
            $('#' + logContentForm_SC.id).append(logFormSubmit_SC.createElement([{attr:"type", content:"submit"}, {attr:"value", content:"Log In"}, {attr: "disabled"}]));
        $("<br>").appendTo('#' + logModalContent_SC.id);
        $('#' + logModalContent_SC.id).append(logRegisterPrompt_SC.createElement([{attr:"",content:"",innerText:"Don't have an account?  That's okay! Click to "}]));
            $("<span>Register</span>").appendTo('#' + logRegisterPrompt_SC.id);

// REGISTRY MODAL BUILD

$(regModal).append(regModalDiv_SC.createElement());
    $('#' + regModalDiv_SC.id).append(regModalContent_SC.createElement());
        $('#' + regModalContent_SC.id).append(regModalClose_SC.createElement());
            $('#' + regModalClose_SC.id).html("&xotime;");
        $('#' + regModalContent_SC.id).append(regContentHeader_SC.createElement([{attr:"",content:"",innerText:"REGISTER"}]))
        $('#' + regModalContent_SC.id).append(regContentForm_SC.createElement());
            $('#' + regContentForm_SC.id).append(regFormFullNameLabel_SC.createElement([{attr:"for", content:"fullName", innerText:"Full Name: "}]));
            $('#' + regContentForm_SC.id).append(regFormFullNameInput_SC.createElement([{attr:"name", content:"fullName"}]));
            $('#' + regContentForm_SC.id).append(regFormBirthdateLabel_SC.createElement([{attr:"for", content:"userBirthdate", innerText:"DOB: "}]));
            $('#' + regContentForm_SC.id).append(regFormBirthdateInput_SC.createElement([{attr:"name", content:"userBirthdate"},{attr:"type", content:"date"}]));
            $('#' + regContentForm_SC.id).append(regFormUsernameLabel_SC.createElement([{attr:"for",content:"regUser",innerText:"Username: "}]));
            $('#' + regContentForm_SC.id).append(regFormUsernameInput_SC.createElement([{attr:"name",content:"regUser"}]));
            $('#' + regContentForm_SC.id).append(regFormPasswordLabel_SC.createElement([{attr:"for",content:"regPass",innerText:"Create Password: "}]));
            $('#' + regContentForm_SC.id).append(regFormPasswordInput_SC.createElement([{attr:"type", content:"password"},{attr:"name",content:"regPass"}]));
            $('#' + regContentForm_SC.id).append(regFormSubmit_SC.createElement([{attr:"type", content: "submit"},{attr:"value", content:"Submit"}]));

    // SET BANNER ART SRC

    $(bannerDiv).append(bannerIMG_SC.createElement([{attr:"src", content:"/Images/banner_img.jpg"}]));

// APPEND IFRAME FOR IMPLEMENTATION OF EXTERNAL HTML FILES

    $(document.body).append(navFrame_SC.createElement());
        $('#' + navFrame_SC.id).css("display", "none");
}
