//author:marwan alhelo
//subject: exam
//date:15.11.2019

document.addEventListener("DOMContentLoaded", init);
function init() {
    addEventListener("load",hideinvlide)
    textareatxt.addEventListener("keyup",checklengthtxt)
    textareatxt.addEventListener("keyup",resttxt)
    textareatxt.addEventListener("keypress", textareaLengthCheck);


}
//hide short and limit txet
function hideinvlide(){

    short.classList.add("hidedisplay");
    resettxt.classList.add("hidedisplay");
}
//if less than 30 carecter show the messge shor text
function checklengthtxt(){

    if(textareatxt.value.length<30){
        short.classList.remove("hidedisplay");

    } else {
        short.classList.add("hidedisplay");
    }

}

//if less than 144carecter show the messge limit text
function resttxt() {
  if(textareatxt.value.length <144){

      resettxt.classList.remove("hidedisplay");
  }else {
      resettxt.classList.remove("hidedisplay");
  }


}

//mesuer text
function textareaLengthCheck() {
    var length = this.value.length;
    var charactersLeft = 143 - length;
    var count = document.getElementById('resettxt');
    count.innerHTML = "Characters left: " + charactersLeft;
}




