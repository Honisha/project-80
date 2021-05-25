document.getElementById("sort_button").style.display="none";
var GuestName = document.getElementById("name1").value;
name_of_people.push();

name_of_people.sort();

function serching(){
    var s = document.getElementById("s1");
    var found = 0;
    var j;
    for (j = 0; j < name_of_people.length; j++) {
        if(s==name_of_people[j]){
            found=found+1
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
    console.log("found name"+found+"time/s")
}