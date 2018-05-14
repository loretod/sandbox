$(document).ready(function(){
    var team = ["sam", "tommy", "less", "sue", "henry", "august", "rohan", "millie", "jess", "harper"]
    $("#classList").append(team.toString());
    
    //identify needed number of groups
    $('#submit').click(function(){
        //var groupNumber = $(#'groupNumber').val();
        console.log("you need" + 2 + "groups");
        $('#groupNumberNeeded').append(groupNumber.toString());
        return groupNumber;
    });
    
    //pick a captain
    var captains =[];
    var groups = 2
    var j
    for(j=0;j<groups;j++){
        var captain = team[Math.floor(Math.random()*team.length)];
        captains.push(captain);
         //remove captain from team
        var captainIndex = team.indexOf(captain);
        console.log(captainIndex)
        var removeCaptain = team.splice(captainIndex,1);
        console.log("your captains are:" + captains.toString());
    };
    
   // fix here- how to make button click cycle through array
    $("#pickCaptain").click(function(){
        $("#team-captain").append(captains[0]);
        captains.pop();
        });
    
   
    console.log(team); $('#teamLeft').append(team.toString());
    
    //decide number of names to pick
    var groupsNeed = 2;
    var picksAmount = team.length/ groupsNeed;
    console.log("each captain needs to pick " + picksAmount + " players");
    $('#picksAmount').append(picksAmount);
    
    //create cards
    $('#pickNameCard').hide();
   var i;
   for(i=0; i<team.length-1; i++){
       $('#pickNameCard').show();
       $('#pickNameCard').clone().appendTo('#pickNameContainer');
       
    // create icon array
    //replace icon on each card
    // cycle through team array for back of card
    }
});