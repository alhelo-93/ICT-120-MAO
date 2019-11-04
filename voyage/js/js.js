// MArwan alhelo
// site de voayge
// 03.11.19
document.addEventListener("DOMContentLoaded", init);

function init() {
    btp.addEventListener("click",cache);
}
function cache(){
    table.classList.remove("tab");
}







// nav bar
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
})



