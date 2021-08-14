// hamburger menu.
$(".hamburger-menu").on("click", function () {
    $("#header").toggleClass("open");
});

$("#mask").on("click", function () {
    $("#header").removeClass("open");
});
