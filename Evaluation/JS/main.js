//author:marwan alhelo
//subject: exam
//date:15.11.2019




document.addEventListener("DOMContentLoaded", init);
function init() {
   addEventListener("load",hideinvlide)
    nameu.addEventListener("keyup",checkname)
    lastnameu.addEventListener("keyup",checklastname)
    pswu.addEventListener("keyup",checkpasword)
    pswconfiremu.addEventListener("keyup",checkmatch)
    formfiled.addEventListener("keyup",activaitebtnsend)

}
function hideinvlide(){
    invalidname.classList.add("hidedisplay");
    invalidlastname.classList.add("hidedisplay");
    invalidpsw.classList.add("hidedisplay");
    invalidematch.classList.add("hidedisplay");
    ptnsend.disabled= true
}
// check name length
function checkname(){

   if(nameu.value.length<3){
       invalidname.classList.remove("hidedisplay");

   } else {
       invalidname.classList.add("hidedisplay");
   }

}
// check lastname length
function checklastname(){

    if(lastnameu.value.length<3){
        invalidlastname.classList.remove("hidedisplay");

    } else {
        invalidlastname.classList.add("hidedisplay");
    }

}
// checkpassword length
function checkpasword(){

    if(pswu.value.length<6){
        invalidpsw.classList.remove("hidedisplay");

    } else {
        invalidpsw.classList.add("hidedisplay");
    }

}
// checkpassword match
function checkmatch(){

    if(pswu.value == pswconfiremu.value){
        invalidematch.classList.add("hidedisplay");

    } else {
        invalidematch.classList.remove("hidedisplay");
    }

}
// active ptn sent when all filed is correct
 function activaitebtnsend() {
    var x = ''
     if(nameu.value != x || lastnameu.value != x || pswu.value != x || pswu.value != pswconfiremu.value ){
         ptnsend.disabled= false
     }
 }
