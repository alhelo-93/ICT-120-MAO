document.addEventListener("DOMContentLoaded", init);

function init() {
    a1.addEventListener("select", changphoto1);
    a1.addEventListener("mouseout", remove1);

    a2.addEventListener("mouseover", changphoto2);
    a2.addEventListener("mouseout", remove2);

    a3.addEventListener("mouseover", changphoto3);
    a3.addEventListener("mouseout", remove3);

    a4.addEventListener("mouseover", changphoto4);
    a4.addEventListener("mouseout", remove4);

    a5.addEventListener("mouseover", changphoto5);
    a5.addEventListener("mouseout", remove5);

    a6.addEventListener("mouseover", changphoto6);
    a6.addEventListener("mouseout", remove6);

    a7.addEventListener("mouseover", changphoto7);
    a7.addEventListener("mouseout", remove7);


}

function changphoto1() {

    document.formulaire.select.options[
        document.formulaire.select.selectedIndex
        ].value

}
function remove1() {

    img.src="";

}

function changphoto2() {


    img.src="PHOTOS/Bike.png";

}
function remove2() {

    img.src="";

}
function changphoto3() {


    img.src="PHOTOS/ElectricCar.png";

}
function remove3() {

    img.src="";

}
function changphoto4() {


    img.src="PHOTOS/skeptic.png";

}
function remove4() {

    img.src="";

}
function changphoto5() {


    img.src="PHOTOS/Hotspot.png";

}
function remove5() {

    img.src="";

}
function changphoto6() {


    img.src="PHOTOS/No Smoking.png";

}
function remove6() {

    img.src="";

}
function changphoto7() {


    img.src="PHOTOS/Toilet Paper.png";

}
function remove7() {

    img.src="";

}