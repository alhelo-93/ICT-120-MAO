// MArwan alhelo
// site de voayge
// 03.11.19


document.addEventListener("DOMContentLoaded", init);

function init() {

    btp.addEventListener("click", montre);
    btp.addEventListener("click", affichetable);
    addEventListener("load",cache);
    cmdSave.addEventListener("click", adduser);
    cmdback.addEventListener("click", cache);

// bouton por edite
    updatebtn.addEventListener("click", btnedit)
    cmdedit.addEventListener("click", edite)
    cmdrest.addEventListener("click", retour)
// bouton de sauvtage
    cmdstor.addEventListener("click",cmdstore)

// delete
    cmddel.addEventListener('click', killLine)

}

function affichetable(){

    tableadd.classList.remove("tab");
}
function  montre () {

    cmddel.disabled= true
    updatebtn.disabled= true
}

function cache() {
    tableadd.classList.add("tab");
    cmddel.disabled= false
    updatebtn.disabled= false

}
// for edit
function btnedit() {
    cmdedit.classList.remove("d-none")
    del.classList.add("tab")
    btp.classList.add("tab")
    cmdrest.classList.remove("d-none")

}
// back from edit
 function retour() {
     cmdedit.classList.add("d-none")
     del.classList.remove("tab")
     btp.classList.remove("tab")
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

    var checkbox = document.createElement('input')
    td10 = checkbox

    checkbox.type = "button";
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
    alert("votre utlisateur est bien ajouté ")
}
// transfer table to selectable
function edite() {
    table = tblBody.childern
    for(nbline = 0; nbline< tblBody.children.length; nbline++)
    {
        row = tblBody.children[nbline]

      for(nbcol = 0; nbcol< row.children.length; nbcol++)
      {
            cell = row.children[nbcol]
          inp= document.createElement('input')
          inp.type ='text'
          inp.value = cell.innerText;
          cell.innerText = ''

          cell.appendChild(inp)
      }
        cmdedit.classList.add('d-none')
        cmdstor.classList.remove('d-none')
    }
}
// save date
function cmdstore() {
    table = tblBody.childern
    for (nbline = 0; nbline < tblBody.children.length; nbline++) {
        row = tblBody.children[nbline]

        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            cell.innerText = cell.firstChild.value

        }
        cmdedit.classList.remove('d-none')
        cmdstor.classList.add('d-none')
    }
}

function validation() {

    if (txtNum0.value <= 0) {
        alert('non')
        cmdSave.disable = true;

    }


}




// Cette fonction est appelée au click sur un élément

function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
    input= event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
    td = input.parentNode  // td est la cellule dans laquelle le bouton se trouve
    tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
    table = tr.parentNode   // table est la table dans laquelle la ligne se trouve
    table.removeChild(tr)   // On enlève la ligne de la table
}

