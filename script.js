// =================================
// MOBILE MENU
// =================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Tutup menu setelah link dipilih

document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// =================================
// COUNTDOWN
// =================================

// Tournament:
// 13 Agustus 2026
// 15:00 WIB
// WIB = UTC+7

const tournamentDate =
    new Date("2026-08-13T15:00:00+07:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = tournamentDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }


    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));


    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            /
            1000
        );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);