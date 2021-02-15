export function generateElementList(){
    const HEADER = document.getElementById('header_container');
        const LOGIN_MODAL = document.getElementById("log_modal");
        const REGISTER_MODAL = document.getElementById("reg_modal");
        const USER_NAVBAR = document.getElementById("user_nav");
            const USER_PROFILE = document.getElementById("user_profile");
                const USER_DROPDOWN = document.getElementById("user_dropdown");
                    const PROFILE_OPTION_ONE = document.getElementById("opt_1");
                    const PROFILE_OPTION_TWO = document.getElementById("opt_2");
                    const PROFILE_OPTION_THREE = document.getElementById("opt_3");
            const USER_LIBRARY = document.getElementById("user_library");
            const USER_NEW_SET = document.getElementById("user_newSet");
        const LOGIN_CREDS = document.getElementById('logIn_Links');
            const MAIN_HEADING = document.getElementById('main_header');
            const LOGIN_NAV = document.getElementById('logIn_Nav');
                const LOG_ANCHOR = document.getElementById('log_A');
            const REGISTER_NAV = document.getElementById('register_Nav');
                const REG_ANCHOR = document.getElementById('reg_A');
        const BANNER = document.getElementById('banner_graphic');
        const PAGENAV_DIV = document.getElementById('page_navigation');
            const PAGE_NAV = document.getElementById('routing_nav');
                const PAGENAV_A1 = document.getElementById('navOne');
                const PAGENAV_A2 = document.getElementById('navTwo');
                const PAGENAV_A3 = document.getElementById('navThree');
                const PAGENAV_A4 = document.getElementById('navFour');

const BODY = document.getElementById('page_container');
    const MODAL_ONE = document.getElementById('modalBox_1');
    const MODAL_TWO = document.getElementById('modalBox_2');
    const HOME = document.getElementById('home_container');
        const POSTS = document.getElementById('post_container');
    const CATEGORIES = document.getElementById('category_container');

const FORM_CONTAINER = document.getElementById('form_container');
    const FORM = document.getElementById('subscription_form');
        const SUB_MSG = document.getElementById('sub_message');
        const NAME_LABEL = document.getElementById('name_label');
        const NAME_INP = document.getElementById('name_input');
        const EMAIL_LABEL = document.getElementById('email_label');
        const EMAIL_INPUT = document.getElementById('email_input');
        const FORM_SUBMIT = document.getElementById('sub_submit');



    const APP_ELEMENTS_LIST = [
        {
            Header:
            {
                container: HEADER,
                children: 
                {
                    logModal: LOGIN_MODAL,
                    regModal: REGISTER_MODAL,
                    userNavBar: USER_NAVBAR,
                    userNavBar_Children: 
                    {
                        userProfile: USER_PROFILE,
                        userProfile_Children:
                        {
                            userDropDown: USER_DROPDOWN,
                            userDropDown_Children: 
                            {
                                profileOptionOne: PROFILE_OPTION_ONE,
                                profileOptionTwo: PROFILE_OPTION_TWO,
                                profileOptionThree: PROFILE_OPTION_THREE
                            }
                        },
                        userLibrary: USER_LIBRARY,
                        userCreateSet: USER_NEW_SET
                    },
                    credentialsDiv: LOGIN_CREDS, 
                    credDiv_Children:
                    {
                        mainHeading: MAIN_HEADING,
                        logIn_Nav: LOGIN_NAV, 
                        logInAnchors:
                        {
                            logAnchor: LOG_ANCHOR
                        },
                        register_Nav: REGISTER_NAV,
                        registerAnchors:
                        {
                            regAnchor: REG_ANCHOR
                        }
                    },
                    banner: BANNER,
                    pageNavDiv: PAGENAV_DIV,
                    navDiv_Children:
                    {
                        pageNav: PAGE_NAV,
                        nav_Children:
                        {
                            pageNav_A1: PAGENAV_A1,
                            pageNav_A2: PAGENAV_A2,
                            pageNav_A3: PAGENAV_A3,
                            pageNav_A4: PAGENAV_A4
                        }
                    }
                }
            }
        },
        {
            Body: 
            {
                container: BODY,
                children:
                {
                    modalOne: MODAL_ONE,
                    modalTwo: MODAL_TWO,
                    home: HOME,
                    home_Children:
                    {
                        posts: POSTS
                    },
                    categories: CATEGORIES
                }
            }
        },
        {
            Form:
            {
                container: FORM_CONTAINER,
                children:
                {
                    form: FORM,
                    form_Children:
                    {
                        subMessage: SUB_MSG,
                        nameLabel: NAME_LABEL,
                        nameInput: NAME_INP,
                        emailLabel: EMAIL_LABEL,
                        emailInput: EMAIL_INPUT,
                        formSubmit: FORM_SUBMIT
                    }
                }
            }
        }
    ];

    return APP_ELEMENTS_LIST;
}
