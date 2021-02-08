//                                      ||      IMPORTS     ||                                      \\

import { Subcomponent } from "../Initialization/Subcomponent.js";

//                                      ||   LINKED FUNCTION   ||                                      \\
export function homeMain(data){
    // PASS PARAM INTO SCOPED VARIABLE
    const HOME_COLLECTION = data;

    // PULL EACH ELEMENT OF COLLECTION AREA
    let homeContainer = HOME_COLLECTION.container;
        let homeDiv = HOME_COLLECTION.children["Home"];
            let postDiv = HOME_COLLECTION.children["home_Children"].posts;
        let categoryDiv = HOME_COLLECTION.children["categories"];

//                                      ||      START NEW CODE HERE     ||                                      \\

    // SUBCOMPONENTS (FOR NEW ELEMENTS OUTSIDE OF INITIAL TEMPLATE)
    let catSection_SC_1 = new Subcomponent("section", "category_section_1", "category-sect");
    let catSection_SC_2 = new Subcomponent("section", "category_section_2", "category-sect");
    let catSection_SC_3 = new Subcomponent("section", "category_section_3", "category-sect");

        let postSection_SC_1 = new Subcomponent("section", "post_section_1", "post-sect");
        let postSection_SC_2 = new Subcomponent("section", "post_section_2", "post-sect");
            let moreInfo_SC_1 = new Subcomponent("nav", "more_Info_1", "more-info");
                let moreAnchor_SC_1 = new Subcomponent("a", "modal_1");
            let moreInfo_SC_2 = new Subcomponent("nav", "more_Info_2", "more-info");
                let moreAnchor_SC_2 = new Subcomponent("a", "modal_2");

    // NEW ELEMENT APPENDAGES

    $(postDiv).append(postSection_SC_1.createElement());
        $('#' + postSection_SC_1.id).append("<h4><span>Ver. 1.0.0: </span>Site Initialized</h4>");
            $('#' + postSection_SC_1.id + " h4").css({"color": "lightgrey"});
            $('#' + postSection_SC_1.id + " span").css({"color": "gold", "opacity": "0.75"});
        $('#' + postSection_SC_1.id).append("<p>I've created a <i>Quizlet Clone</i>!</p>");
        $('#' + postSection_SC_1.id).append("<p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sint fuga magnam animi error aspernatur incidunt blanditiis eius, quae non odit cupiditate facere est explicabo saepe repellendus! Dolore, ab iusto.</p>");
            $('#' + postSection_SC_1.id + ' p').css("text-align", "left");
        $('#' + postSection_SC_1.id).append(moreInfo_SC_1.createElement())
            $('#' + moreInfo_SC_1.id).append(moreAnchor_SC_1.createElement([{attr:"href", content:"#", innerText:"More..."}]));

    $(postDiv).append(postSection_SC_2.createElement());
        $('#' + postSection_SC_2.id).append("<h4><span>Ver. 1.1.0: </span>Site Edited</h4>");
            $('#' + postSection_SC_2.id + " h4").css({"color": "lightgrey"});
            $('#' + postSection_SC_2.id + " span").css({"color": "gold", "opacity": "0.75"});
        $('#' + postSection_SC_2.id).append("<p>I've edited a <i>Quizlet Clone</i>!</p>");
        $('#' + postSection_SC_2.id).append("<p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sint fuga magnam animi error aspernatur incidunt blanditiis eius, quae non odit cupiditate facere est explicabo saepe repellendus! Dolore, ab iusto.</p>");
            $('#' + postSection_SC_2.id + ' p').css("text-align", "left");
            $('#' + postSection_SC_2.id).append(moreInfo_SC_2.createElement())
                $('#' + moreInfo_SC_2.id).append(moreAnchor_SC_2.createElement([{attr:"href", content:"#", innerText:"More..."}]));

    $(categoryDiv).append(catSection_SC_1.createElement());
        $("<p>Hello From Section One!</p>").appendTo('#' + catSection_SC_1.id);
    $(categoryDiv).append(catSection_SC_2.createElement());
        $("<p>Hello From Section Two!</p>").appendTo('#' + catSection_SC_2.id);
    $(categoryDiv).append(catSection_SC_3.createElement());
        $("<p>Hello From Section Three!</p>").appendTo('#' + catSection_SC_3.id);

// MODAL POPUP

    $('#' + moreInfo_SC_1.id + ' a').click((e)=>showPostModal(e));
    $('#' + moreInfo_SC_2.id + ' a').click((e)=>showPostModal(e));
}

function showPostModal(ev){
    console.log(ev.target.id);
    switch(ev.target.id){
        case "modal_1":
            break;
        case "modal_2":
            break;
        default:
            throw new Error("Text Not Found");
    }
}
