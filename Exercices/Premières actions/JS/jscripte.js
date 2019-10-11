//alert("Hello! I am an alert box!!");


document.addEventListener("DOMContentLoaded", init);

function init() {
    ex1.addEventListener("click", changecolor);
    ex2.addEventListener("click", reform);
    ex3.addEventListener("mouseover", chfonttoarial);
    ex3.addEventListener("mouseleave", removefontarial);
    chbox1.addEventListener("click", addtext)
    chbox2.addEventListener("click", addtext)
    ex5.addEventListener("click", Destroy)
    btn.addEventListener("click", initialsation);


}

//change the color and text decoration the first exercise 1
function changecolor() {
    ex1.classList.add("chcolor");

}

//reform back the first exercise by removing the color and decoration
function reform() {
    ex1.classList.remove("chcolor");
}

//chang the font to arial when curses goes on the test
function chfonttoarial() {
    ex3.classList.add("chfont");
}

//reform back to the normal font
function removefontarial() {
    ex3.classList.remove("chfont");
}

//checkbox for big YES
function addtext() {
    if (chbox1.checked === true && chbox2.checked === true) {
        // one method for write BIG YES BY JS ONLY
        /*
        var content = "YES";
        var size = content.fontsize(10);
        ex4.innerHTML = size;
        ex4.classList.add("bigyes");
        */

        // another method to write big yes only By CCS Class
        ex4.innerHTML = null;
        ex4.classList.add("bigyes");
    } else {
        ex4.classList.remove("bigyes");

    }

}

// Remove a tag from anther IN HTML
function Destroy() {

    Delete.classList.add("DEL");
}

// initialisation NAME/Last name
function initialsation() {
    var long = nm.value.length;
    var espace = nm.indexOf(" ");
    var lettre1 = nm.substr(0,1);
    var lettre2 = nm.substr(espace + 1, 1);
    var lettre3 = nm.substr(long - 1, 1);
    var resultat = lettre1 + lettre2 + lettre3;
    initi.console.log(resultat);

}