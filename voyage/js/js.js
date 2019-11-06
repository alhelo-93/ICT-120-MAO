// MArwan alhelo
// site de voayge
// 03.11.19
document.addEventListener("DOMContentLoaded", init);

function init() {
    btp.addEventListener("click", cache);
    cmdSave.addEventListener("click", adduser);
    cmdback.addEventListener("click", montre);
    del.addEventListener("click",myDelete)
}

function cache() {
    table.classList.remove("tab");
}

function montre() {
    table.classList.add("tab");
}


function adduser() {
    tr = document.createElement('tr')

    th = document.createElement('th')
    td1 = document.createElement('td')
    td2 = document.createElement('td')
    td3 = document.createElement('td')
    td4 = document.createElement('td')
    td5 = document.createElement('td')
    td6 = document.createElement('td')
    td7 = document.createElement('td')
    td8 = document.createElement('td')
    td9 = document.createElement('td')
    td10 = document.createElement('td')

    var checkbox = document.createElement('input')
    td10 = checkbox

    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.id = "chbx";
    checkbox.name = "todo[]";

    th.innerText = txtNum0.value;
    td1.innerText = txtNum1.value;
    td2.innerText = txtNum2.value;
    td3.innerText = txtNum3.value;
    td4.innerText = txtNum4.value;
    td5.innerText = txtNum5.value;
    td6.innerText = txtNum6.value;
    td7.innerText = txtNum7.value;
    td8.innerText = txtNum8.value;
    td9.innerText = txtNum9.value;
    td10.innerText = td10


    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tr.appendChild(td8)
    tr.appendChild(td9)
    tr.appendChild(checkbox)

    tblBody.appendChild(tr)
    alert("votre mwssage est bien ajouté ")
}

function validation() {

   if(txtNum0.value <=0 ) {
       alert('non')
       cmdSave.disable= true;

   }


}


function myDelete() {
        if(chbx.checked == true){
            tr.classList.add("tab")

        }



}


// nav bar
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})



