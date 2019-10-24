document.addEventListener("DOMContentLoaded", init);

function init() {
    btn.addEventListener("click", form);
}

function form() {
   var checkempty= text.value;
    if(checkempty=== ""){
        alert("invalide remplissez le champ SVP");

    }else
    alert(checkempty);
}