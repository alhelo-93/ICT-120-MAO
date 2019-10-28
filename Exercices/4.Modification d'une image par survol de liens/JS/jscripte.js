document.addEventListener("DOMContentLoaded", init);

function init() {
    btn.addEventListener("click", form);
}

function form(event) {
    event.preventDefault()

    txt2.value = txt1.value;
    txt1.value="";

}