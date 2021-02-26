import { Subcomponent } from "../Initialization/Subcomponent.js";

export function appendHome(data){
    // PASS PARAM INTO SCOPED VARIABLE
    const HOME_COLLECTION = data;

    // PULL EACH ELEMENT OF COLLECTION AREA
    let homeContainer = HOME_COLLECTION.container;
        let homeDiv = HOME_COLLECTION.children["Home"];
            let postDiv = HOME_COLLECTION.children["home_Children"].posts;
        let categoryDiv = HOME_COLLECTION.children["categories"];
        let modalBox_1 = HOME_COLLECTION.children["modalOne"];
        let modalBox_2 = HOME_COLLECTION.children["modalTwo"];

//                                      ||      START NEW CODE HERE     ||                                      \\

    // SUBCOMPONENTS (FOR NEW ELEMENTS OUTSIDE OF INITIAL TEMPLATE)

    let modalContentDiv_SC_1 = new Subcomponent("div", "modalDivOne", "modal-contentDiv");
        let modalClose_SC_1 = new Subcomponent("span", "modalCloseOne", "modal-close");
        let modalHeader_SC_1 = new Subcomponent("h2", "modalHeaderOne", "modal-header");
        let modalSection_SC_1 = new Subcomponent("section", "modalSectionOne", "modal-section");
            let modalText_SC_1 = new Subcomponent("p", "modalTextOne", "modal-text");
    let modalContentDiv_SC_2 = new Subcomponent("div", "modalDivTwo", "modal-contentDiv");
        let modalClose_SC_2 = new Subcomponent("span", "modalCloseTwo", "modal-close");
        let modalHeader_SC_2 = new Subcomponent("h2", "modalHeaderTwo", "modal-header");
        let modalSection_SC_2 = new Subcomponent("section", "modalSectionTwo", "modal-section");
            let modalText_SC_2 = new Subcomponent("p", "modalTextTwo", "modal-text");

    let catSection_SC_1 = new Subcomponent("section", "category_section_1", "category-sect");
        let catMathIMG_SC = new Subcomponent("img", "math_category", "category-img");
    let catSection_SC_2 = new Subcomponent("section", "category_section_2", "category-sect");
        let catCodingIMG_SC = new Subcomponent("img", "coding_category", "category-img");
    let catSection_SC_3 = new Subcomponent("section", "category_section_3", "category-sect");
        let catHistoryIMG_SC = new Subcomponent("img", "history_category", "category-img");
    let catSection_SC_4 = new Subcomponent("section", "category_section_4", "category-sect");
        let catSpanishIMG_SC = new Subcomponent('img', 'spanish_category', 'category-img');

        let postSection_SC_1 = new Subcomponent("section", "post_section_1", "post-sect");
            let postHeader_SC_1 = new Subcomponent("h4", "postHeaderOne", "post-header");
            let postContent_SC_1 = new Subcomponent("p", "postContentOne", "post-content");
        let postSection_SC_2 = new Subcomponent("section", "post_section_2", "post-sect");
            let postHeader_SC_2 = new Subcomponent("h4", "postHeaderTwo", "post-header");
            let postContent_SC_2 = new Subcomponent("p", "postContentTwo", "post-content");

            let moreInfo_SC_1 = new Subcomponent("nav", "more_Info_1", "more-info");
                let moreAnchor_SC_1 = new Subcomponent("a", "openModal_1", "open-modal");
            let moreInfo_SC_2 = new Subcomponent("nav", "more_Info_2", "more-info");
                let moreAnchor_SC_2 = new Subcomponent("a", "openModal_2", "open-modal");

    // NEW ELEMENT APPENDAGES


    // $(homeDiv).append("");
        $(postDiv).append(postSection_SC_1.createElement());
            $('#' + postSection_SC_1.id).append(postHeader_SC_1.createElement([{attr:"", content:"", innerText: "  Site Initialized"}]));
                $("<span>Ver 1.0.0:</span>").prependTo('#' + postHeader_SC_1.id);
            $('#' + postSection_SC_1.id).append(postContent_SC_1.createElement([{attr:"",content:"",innerText:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sint fuga magnam animi error aspernatur incidunt blanditiis eius, quae non odit cupiditate facere est explicabo saepe repellendus! Dolore, ab iusto."}]));
                $("<p>I created a <i>Quizlet Clone</i>!</p>").prependTo('#' + postContent_SC_1.id);
            $('#' + postSection_SC_1.id).append(moreInfo_SC_1.createElement())
                $('#' + moreInfo_SC_1.id).append(moreAnchor_SC_1.createElement([{attr:"", content:"", innerText:"More..."}]));

        $(postDiv).append(postSection_SC_2.createElement());
            $('#' + postSection_SC_2.id).append(postHeader_SC_2.createElement([{attr:"", content:"", innerText: "  Site Edited"}]));
            $("<span>Ver 1.1.0:</span>").prependTo('#' + postHeader_SC_2.id);
            $('#' + postSection_SC_2.id).append(postContent_SC_2.createElement([{attr:"",content:"",innerText:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sint fuga magnam animi error aspernatur incidunt blanditiis eius, quae non odit cupiditate facere est explicabo saepe repellendus! Dolore, ab iusto."}]));
                $("<p>I edited the <i>Quizlet Clone</i>!</p>").prependTo('#' + postContent_SC_2.id);
            $('#' + postSection_SC_2.id).append(moreInfo_SC_2.createElement())
                $('#' + moreInfo_SC_2.id).append(moreAnchor_SC_2.createElement([{attr:"", content:"", innerText:"More..."}]));


    $(categoryDiv).append(catSection_SC_1.createElement());
        $('#' + catSection_SC_1.id).append(catMathIMG_SC.createElement([{attr:"src", content: "https://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_770743/Image/Technology/Other%20Pictures/math.jpg"}]));
    $(categoryDiv).append(catSection_SC_2.createElement());
        $('#' + catSection_SC_2.id).append(catCodingIMG_SC.createElement([{attr:"src", content:"https://images.ctfassets.net/yr4qj72ki4ky/6G2JeQnM8bsnjgoJBjljCh/f30782e127727ee309ebf87fb59cf446/best-programming-languages-2020-Hero.jpg?q=72"}]))
        $("<h4>Programming</h4>").appendTo('#' + catSection_SC_2.id);
            $('#' + catSection_SC_2.id + ' h4').css({
                "position":"relative",
                "left": "0px",
                "bottom": "72px"
            })
            $('#' + catSection_SC_2.id + ' h4').hover(function(){
                $(this).css("cursor", "pointer");
                $('#' + catCodingIMG_SC.id).css("border", "thin dotted red");
            }, function(){
                $(this).css("cursor", "");
                $('#'+ catCodingIMG_SC.id).css("border", "");
            })
    $(categoryDiv).append(catSection_SC_3.createElement());
        $('#' + catSection_SC_3.id).append(catHistoryIMG_SC.createElement([{attr:"src", content:"https://www.lse.ac.uk/International-History/Images/Banners/whystudyhistory.jpg"}]))
    $(categoryDiv).append(catSection_SC_4.createElement());
            $('#' + catSection_SC_4.id).append(catSpanishIMG_SC.createElement([{attr:"src", content:"https://dp4g669tqdae4.cloudfront.net/content/uploads/2019/09/12161658/Espanol.-Translation-Spanish.-Language-hand-drawn-doodles-and-lettering.-1087621188_7013x4954.jpg"}]))

    $(modalBox_1).append(modalContentDiv_SC_1.createElement());
        $('#' + modalContentDiv_SC_1.id).append(modalClose_SC_1.createElement());
            $('#' + modalClose_SC_1.id).html("&xotime;");
        $('#' + modalContentDiv_SC_1.id).append(modalHeader_SC_1.createElement([{attr:"",content:"",innerText: "Post One"}]));
        $('#' + modalContentDiv_SC_1.id).append(modalSection_SC_1.createElement());
            $('#' + modalSection_SC_1.id).append(modalText_SC_1.createElement());
                $('#' + modalText_SC_1.id).html($('#'+postContent_SC_1.id).html());
    $(modalBox_2).append(modalContentDiv_SC_2.createElement());
        $('#' + modalContentDiv_SC_2.id).append(modalClose_SC_2.createElement());
            $('#' + modalClose_SC_2.id).html("&xotime;");
        $('#' + modalContentDiv_SC_2.id).append(modalHeader_SC_2.createElement([{attr:"",content:"",innerText: "Post Two"}]));
        $('#' + modalContentDiv_SC_2.id).append(modalSection_SC_2.createElement());
            $('#' + modalSection_SC_2.id).append(modalText_SC_2.createElement());
            $('#' + modalText_SC_2.id).html($('#'+postContent_SC_2.id).html());
}
