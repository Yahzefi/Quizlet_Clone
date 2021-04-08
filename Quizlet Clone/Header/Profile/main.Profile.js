// This is the js file for the profile page that is only accessible once the user logs in.
// currently, the only way to log in is through an overly simplistic authorization check for a user of "Admin"
// with a password of "pword"


$('#home_span').click(()=>{
    window.history.back();
})

$('#settings_span').click(()=>console.log("You clicked the \"Settings\" span"))

$('#rec_act').click(()=>$('#content_section h2').text("Recent Activity"))
$('#sub_set').click(()=>$('#content_section h2').text("Submitted Sets"))
$('#fol_set').click(()=>$('#content_section h2').text("Followed Sets"))
$('#course_subs').click(()=>$('#content_section h2').text("Course Subscriptions"))
$('#over_stats').click(()=>$('#content_section h2').text("Overall Statistics"))
