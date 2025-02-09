document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const body = document.body;

    const bgImage = new Image();
    bgImage.src = "background.jpg";

    bgImage.onload = function () {
        body.classList.add("loaded");
        preloader.classList.add("hidden");

        setTimeout(() => {
            document.body.style.backdropFilter = "none";
            document.body.style.background = `url('background.jpg') no-repeat center center/cover`;
        }, 500);
    };
});
