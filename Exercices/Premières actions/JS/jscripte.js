//alert("Hello! I am an alert box!!");


document.addEventListener("DOMContentLoaded", init);

function init() {
    ex1.addEventListener("click", changecolor);
    ex2.addEventListener("click", reform);
    ex3.addEventListener("mouseover", chfonttoarial);
    ex3.addEventListener("mouseleave", removefontarial);
    chbox1.addEventListener("click", addtext);
    chbox2.addEventListener("click", addtext);
    ex5.addEventListener("click", Destroy);
    nm.addEventListener("keyup", initialisation);


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
function initialisation() {

    const x = " ";

    const long = nm.value.length;                                       //we mauser length of the name
    const space = nm.value.indexOf(x);                                  // search where the space exactly
    const l1 = nm.value.substr(0, 1);                       //now we are going to to take first letter
    const l2 = nm.value.substr(space + 1, 1);               // find space between name and last name
    const l3 = nm.value.substr(long - 1, 1);              // take last letter
    const res3l = l1 + l2 + l3;                                         // concatenate together to make initialisation
    const res2l = l1 + l3;                                               // concatenate together to make initialisation
    const upc3l = res3l.toUpperCase();                                  // all to upper case
    const upc2l = res2l.toUpperCase();

    if ( ) {
        initial.value = upc3l;

    } else {
        initial.value = upc2l ;

    }

    //
}