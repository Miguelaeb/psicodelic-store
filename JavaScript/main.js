window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
            document.body.style.display = "block";
        }, 500);
    }, 2000);
});