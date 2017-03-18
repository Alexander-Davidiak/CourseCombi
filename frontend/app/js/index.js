
function setUniversity (u){
    document.getElementById("university").innerHTML = "<h1>" + u + "</h1>";
}

function addTimeValue (e) {
    let index = document.getElementById(e.target.id).innerHTML.indexOf('<input type="button"');
    document.getElementById(e.target.id).innerHTML = document.getElementById(e.target.id).innerHTML.substring(0, index); 
    document.getElementById(e.target.id).innerHTML+= "<input type='number' name=''" +
    " value='' id='numb' max='23' min='0'>:<input type='number' name='' value='' id='numb' max='23' min='0'><br>"+
    " <input type='button' id='" + e.target.id + "' onclick='addTimeValue(event)' value='+'><br>";
}

