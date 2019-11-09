// MArwan alhelo
// site de voayge
// 03.11.19


document.addEventListener("DOMContentLoaded", init);

function init() {

    btnadduser.addEventListener("click", montre);
    btnadduser.addEventListener("click", affichetable);

    addEventListener("load", cache);

    cmdSave.addEventListener("click", valitation);
    cmdback.addEventListener("click", cache);

    btnupdate.addEventListener("click", btnedit);// bouton por edite
    cmdedit.addEventListener("click", edite);

    cmdrest.addEventListener("click", retour);
    cmdrest.removeEventListener("click", edite);


    cmdstor.addEventListener("click", cmdstore);// bouton de sauvtage

    Numid.addEventListener('keyup', test)// vérfication champs
    Numage.addEventListener('keyup', test1)

    txtNom.addEventListener("keyup", initiale);// initiale


}

function affichetable() {

    tableadd.classList.remove("tab");
}

function montre() {

    btnupdate.classList.add("tab")

    //cmdSave.classList.add("d-none")
}

function cache() {
    // class on css to hide
    tableadd.classList.add("tab");
    btnupdate.classList.remove("tab")

}

// for edit manipulate
function btnedit() {
    cmdedit.classList.remove("d-none")
    btnadduser.classList.add("tab")
    cmdrest.classList.remove("d-none")

}

// back from edit
function retour() {
    btnadduser.classList.remove("tab")
    cmdedit.classList.add("d-none")
    btnupdate.classList.remove("tab")
    cmdrest.classList.add("d-none")
}


// add user

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
    div = document.createElement('div')


    th.innerText = Numid.value;
    td1.innerText = txtNom.value;
    td2.innerText = Numage.value;
    td3.innerText = txtclasse.value;
    td4.innerText = selectoption.value;
    td5.innerText = Numphone.value;
    td6.innerText = txtadresse.value;
    td7.innerText = txtnatioalie.value;

    td8.innerText = txtrole.value;
    td9.innerText = txtinitial.value;
    div.innerText = "Supprimer";
    div.className = "btn btn-danger"
    div.addEventListener("click", killLine)


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
    tr.appendChild(td10)
    td10.appendChild(div)

    tblBody.appendChild(tr)
    alert("votre utlisateur est bien ajouté ")
}

// transfer table to selectable
function edite() {
    table = tblBody.childern
    for (nbline = 0; nbline < tblBody.children.length; nbline++) {
        row = tblBody.children[nbline]

        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            inp = document.createElement('input')
            inp.type = 'text'
            inp.value = cell.innerText;
            cell.innerText = ''

            cell.appendChild(inp)
        }
        cmdedit.classList.add('d-none');
        cmdstor.classList.remove('d-none');
        cmdrest.classList.add('d-none');



    }
}

// save update
function cmdstore() {
    table = tblBody.children
    for (nbline = 0; nbline < tblBody.children.length; nbline++) {
        row = tblBody.children[nbline]

        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            cell.innerText = cell.firstChild.value

        }

        cmdedit.classList.remove('d-none');
        cmdstor.classList.add('d-none');
        cmdrest.classList.remove('d-none');



    }
}


// Cette fonction est appelée au click sur un élément

function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
    input = event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
    td = input.parentNode  // td est la cellule dans laquelle le bouton se trouve
    tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
    table = tr.parentNode   // table est la table dans laquelle la ligne se trouve
    table.removeChild(tr)   // On enlève la ligne de la table
}

function initiale() {

    var x = " ";
    //we meuser length of the name
    var long = txtNom.value.length;
    //find where is the place exactly
    var espace = txtNom.value.indexOf(x);
    //now we go slowly to take first letter
    var lettre1 = txtNom.value.substr(0, 1);
    // find space between name and last name
    var lettre2 = txtNom.value.substr(espace + 1, 1);
    // take last letter
    var lettre3 = txtNom.value.substr(long - 1, 1);
    // concatenate together to make initialisation
    var resultat = lettre1 + lettre2 + lettre3;
    // all to upper case
    var upcase = resultat.toUpperCase();
    // put the value in the second box
    txtinitial.value = upcase;
}

// validation les champs

function valitation() {
    var chmp1 = Numid.value.length
    var chmp2 = txtNom.value.length


    if (chmp1 == '' || chmp1 == null && chmp2 == '' || chmp2 == null) {

        txtNom.classList.add('invalid')
        alert("remplissez votre doc")


    } else {
        cmdSave.addEventListener("click", adduser);

    }
}

function test() {
    if (Nomid.value == '') {
        Nomid.value = 1
    }
}
function test1() {

    if(Nomid.value == ''){
        Numage.value = 15
    }
}