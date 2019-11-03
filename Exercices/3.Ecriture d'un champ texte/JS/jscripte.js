document.addEventListener("DOMContentLoaded", init);
  

function form(event) {
    event.preventDefault()

    txt2.value = txt1.value;
    txt1.value="";

}