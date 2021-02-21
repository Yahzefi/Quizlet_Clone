//                                      ||      IMPORTS     ||                                      \\

import { appendHome } from "./home.subcomponents.js";
import { openMathPage, openCodingPage, openHistoryPage } from "../Categories/c_Redirect.js";

//                                      ||   LINKED FUNCTION   ||                                      \\
export function homeMain(data){
// NEW APPENDAGES TO HOME TEMPLATE
    appendHome(data);
// MODAL POPUP
    $('#more_Info_1 a').click((e)=>showPostModal(e));
    $('#more_Info_2 a').click((e)=>showPostModal(e));

// MODAL CLOSE
    $('#modalCloseOne').click(()=>{$('#modalBox_1').css("display", "");$('#modalDivOne').css("display", "")});
    $('#modalCloseTwo').click(()=>{$('#modalBox_2').css("display", "");$('#modalDivTwo').css("display", "")});

// CATEGORY LINKS
    $('#math_category').click(openMathPage)
    $('#coding_category').click(openCodingPage);
    $('#category_section_2 h4').click(openCodingPage);
    $('#history_category').click(openHistoryPage);
}

function showPostModal(ev){
    console.log(ev.target.id);
    switch(ev.target.id){
        case "openModal_1":
            $('#modalBox_1').fadeIn(1000);
            $('#modalDivOne').slideDown(1000);
            break;
        case "openModal_2":
            $('#modalBox_2').fadeIn(1000);
            $('#modalDivTwo').slideDown(1000);
            break;
        default:
            throw new Error("Text Not Found");
    }
}

