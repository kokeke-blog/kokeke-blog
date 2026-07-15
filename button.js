const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY <= 10) {
        topBtn.classList.remove("show");
    } else {
        topBtn.classList.add("show");
    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});