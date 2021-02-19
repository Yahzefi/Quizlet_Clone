import { Subcomponent } from "../Initialization/Subcomponent.js";


$(document).ready(()=>{
    fetch("cardSets.json")
    .then((data)=>data.json())
    .then((data)=>{
        data.forEach((val, i)=>{
            console.log(data[i].id)
            let newTableRow_SC = new Subcomponent("tr", "tableDataRow_" + [i+1], 'tab-row');
                let counterData_SC = new Subcomponent("td", "counter_" + [i+1], "tab-data");
                let titleData_SC = new Subcomponent("td", "title_" + [i+1], "tab-data");
                let userData_SC = new Subcomponent("td", "user_" + [i+1], "tab-data");
                let subjectData_SC = new Subcomponent("td", "subject_" + [i+1], "tab-data");
                let setLengthData_SC = new Subcomponent("td", "setLength_" + [i+1], "tab-data");
            
            $('#topSets_table').append(newTableRow_SC.createElement());
                $('#' + newTableRow_SC.id).append(counterData_SC.createElement());
                $('#' + newTableRow_SC.id).append(titleData_SC.createElement());
                $('#' + newTableRow_SC.id).append(userData_SC.createElement());
                $('#' + newTableRow_SC.id).append(subjectData_SC.createElement());
                $('#' + newTableRow_SC.id).append(setLengthData_SC.createElement());

            $('#' + counterData_SC.id).text(data[i].id + 1);
            $('#' + titleData_SC.id).text(data[i].title);
            $('#' + userData_SC.id).text(data[i].user);
            $('#' + subjectData_SC.id).text(data[i].subject);
            $('#' + setLengthData_SC.id).text(data[i].entries);

            $('#' + titleData_SC.id).hover(()=>{
                $('#' + titleData_SC.id).css({
                    color:"blue",
                    cursor:"pointer"
                })
            }, ()=>{
                $('#' + titleData_SC.id).css({
                    color:"",
                    cursor:""
                })
            })

            $('#' + userData_SC.id).hover(()=>{
                $('#' + userData_SC.id).css({
                    color:"blue",
                    cursor:"pointer"
                })
            }, ()=>{
                $('#' + userData_SC.id).css({
                    color:"",
                    cursor:""
                })
            })

            $('#' + subjectData_SC.id).hover(()=>{
                $('#' + subjectData_SC.id).css({
                    color: "blue",
                    cursor:"pointer"
                })
            }, ()=>{
                $('#' + subjectData_SC.id).css({
                    color:"",
                    cursor:""
                })
            })
        })
    })
    .then(()=>{
        console.log("Hello");
    })
})
