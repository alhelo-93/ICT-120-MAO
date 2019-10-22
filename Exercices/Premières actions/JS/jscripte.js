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
    nm.addEventListener("keyup",initialisation);
    addEventListener("load",marques);
    btn1.addEventListener("click",action1);
    btn2.addEventListener("click",action2);
    btn3.addEventListener("click",action3);
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
    const l1 = nm.value.substr(0, 1);                                              //now we are going to to take first letter
    const long = nm.value.length;                                                                //we mauser length of the name
    const space = nm.value.indexOf(x);                                                           // search where the space exactly
    const l2 = nm.value.substr(space + 1, 1);                                      // find space between name and last name
    const l3 = nm.value.substr(long - 1, 1);                                       // take last letter
    const res1 = l1 + l2 + l3;                                                                   // concatenate together to make initialisation
    const upc1 = res1.toUpperCase();                                                             // concatenate together to make initialisation
    initial.value = upc1;                                                                        // all to upper case

 }
// all action for buttons
function marques() {
    btn1.disabled = false;
    btn2.disabled = true;
    btn3.disabled = true;
    btn3.style.display="none";
}
function action1() {
    btn1.disabled = true;
    btn2.disabled = false;
    btn3.disabled = true;
    btn3.style.display="inline";
    img.src="PHOTOS/marks.png";
}
function action2() {
    btn1.style.display="none";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = false;
    img.src="PHOTOS/set.png";
}
function action3() {
    btn1.disabled = true;
    btn1.style.display="none";
    btn2.disabled = true;
    btn2.style.display="none";
    btn3.disabled = true;
    img.src="PHOTOS/go.png";
    setTimeout(restall, 3 * 1000);
}
// function to rest by default all the settings
function restall() {
    btn1.disabled = false;
    btn2.disabled = true;
    btn1.style.display="inline"
    btn2.style.display="inline"
    btn3.style.display="none"
    img.src="PHOTOS/empty.png";
}