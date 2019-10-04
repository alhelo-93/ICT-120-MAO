// alert("You are running the " + navigator.appName + " browser.");

document.addEventListener("DOMContentLoaded", init)

function changes() {
  color.classList.add("blue");

}
function normal() {
  color.classList.remove("blue");

}
function police() {
  Font.classList.add("Arial");
}
function policeNormal() {
  Font.classList.remove("Arial")
}
function chb2() {
  chb1.
}
function init() {
  color.addEventListener("click",changes);
  normalise.addEventListener("click",normal);
  Font.addEventListener("mouseover",police);
  Font.addEventListener("mouseleave",policeNormal);
}
