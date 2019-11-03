document.addEventListener("DOMContentLoaded", init);


function init() {
    btn.addEventListener("click", validateForm);
    reste.addEventListener("click", rest);
    nm.addEventListener("keyup", niniti);
}
function validateForm() {
    var x = inputname.value;
    var y= inputfirstname.value;
    var z=inputinitial.value;
    var n=anniversaire.value;

    if (x == "" ) {
        alert("Name must be filled out");
        return false;
    }
}
function rest() {
    img.src="http://placehold.it/180 ";
}

function niniti(){
    var x = " ";
    //we meuser length of the name

    var long = nm.value.length;
    //find where is the place exactly

    var espace = nm.value.indexOf(x);
    //now we go slowly to take first letter
    var lettre1 = nm.value.substr(0, 1);
    // find space between name and last name
    var lettre2 = nm.value.substr(espace + 1, 1);
    // take last letter
    var lettre3 = nm.value.substr(long - 1, 1);
    // concatenate together to make initialisation
    var resultat = lettre1 + lettre2 + lettre3;
    // all to upper case
    var upcase = resultat.toUpperCase();
    // put the value in the second box
    inite.value = upcase;
}


function save() {
    
}










function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
