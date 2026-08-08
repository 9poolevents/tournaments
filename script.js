// =================================
// MOBILE MENU
// =================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});



// =================================
// COUNTDOWN
// =================================

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
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );


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



// =================================
// 9-POOL PLAYER DATABASE
// =================================

// HC 3A

const players3A = [

    "AKEN",
    "CHAD",
    "ONEZ",
    "TOREZ",
    "ALFIN SIDEMPUAN"

];


// HC 3B

const players3B = [

    "AGUS NETRAL",
    "ARIS HULU",
    "ALEX",
    "PANDI",
    "LAROSA",
    "NOYAN",
    "NATHAN",
    "KHENNY",
    "PAK BUDI",
    "AMIRUL",
    "LAHI",
    "YASOKHI",
    "ARFAN",
    "SOLI LAOLI",
    "LAURENSIUS",
    "SOLIS",
    "GIDEON",
    "IKLAS",
    "JONATHAN",
    "GUSU",
    "PAK SUM",
    "PIAN",
    "NELSON",
    "ALDI JULMAN",
    "YOSIA",
    "SILABAN",
    "TAUFIK",
    "PANDU",
    "RIO HAREFA",
    "APRISON",
    "OM ANTOK",
    "JESSICA",
    "KELIN",
    "ALDION",
    "ARFAN",
    "SALSA",
    "KO ASEN",
    "FAHRUL",
    "MARKUS HULU",
    "ALFIN TEL",
    "CERIA",
    "BANG TONGEN",
    "AMOS SIBARANI",
    "GABE",
    "WILLIAM",
    "APPO",
    "EZA",
    "CHARLES",
    "CG",
    "CAKRA",
    "IWAN",
    "PAK ARI",
    "JUL",
    "MARYANTO",
    "NOVERIUS",
    "PAMAN KANCIL",
    "YUDHA",
    "MAHARANI",
    "HABIBI",
    "DILZY"

];


// =================================
// CREATE PLAYER OBJECTS
// =================================

const players = [

    ...players3A.map(function(name) {

        return {
            name: name,
            handicap: "3A"
        };

    }),


    ...players3B.map(function(name) {

        return {
            name: name,
            handicap: "3B"
        };

    })

];


// =================================
// PLAYER DISPLAY
// =================================

const playersGrid =
    document.getElementById("playersGrid");

const playerSearch =
    document.getElementById("playerSearch");

const playerCount =
    document.getElementById("playerCount");

const noPlayer =
    document.getElementById("noPlayer");

let currentFilter = "ALL";


function displayPlayers() {

    const searchText =
        playerSearch.value
        .toUpperCase()
        .trim();


    const filteredPlayers =
        players.filter(function(player) {


            const matchName =
                player.name.includes(searchText);


            const matchHC =
                currentFilter === "ALL"
                ||
                player.handicap === currentFilter;


            return matchName && matchHC;

        });


    playersGrid.innerHTML = "";


    playerCount.innerHTML =
        filteredPlayers.length;


    if (filteredPlayers.length === 0) {

        noPlayer.style.display = "block";

        return;

    }


    noPlayer.style.display = "none";


    filteredPlayers.forEach(function(player, index) {


        const card =
            document.createElement("div");


        card.className =
            "player-card";


        card.innerHTML = `

            <span class="player-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="player-hc">
                HC ${player.handicap}
            </span>

            <span class="player-name">
                ${player.name}
            </span>

            <span class="player-status">
                9-POOL PLAYER DATABASE
            </span>

        `;


        playersGrid.appendChild(card);

    });

}



// =================================
// SEARCH
// =================================

if (playerSearch) {

    playerSearch.addEventListener(
        "input",
        displayPlayers
    );

}



// =================================
// FILTER
// =================================

document
    .querySelectorAll(".filter-button")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(".filter-button")
                    .forEach(function(item) {

                        item.classList.remove("active");

                    });


                button.classList.add("active");


                currentFilter =
                    button.dataset.filter;


                displayPlayers();

            }
        );

    });


// =================================
// INITIAL DISPLAY
// =================================

if (
    playersGrid &&
    playerSearch &&
    playerCount &&
    noPlayer
) {

    displayPlayers();

}
// =================================
// REGISTERED PARTICIPANTS
// V1.2
// =================================

const registeredParticipants = [
    "AKEN",
    "LAROSA",
    "YOSIA"
];
// =================================
// DISPLAY REGISTERED PARTICIPANTS
// =================================

const participantsGrid =
    document.getElementById("participantsGrid");

const participantCount =
    document.getElementById("participantCount");

const noParticipant =
    document.getElementById("noParticipant");


function displayParticipants() {

    participantsGrid.innerHTML = "";


    participantCount.innerHTML =
        registeredParticipants.length;


    if (registeredParticipants.length === 0) {

        noParticipant.style.display = "block";

        return;

    }


    noParticipant.style.display = "none";


    registeredParticipants.forEach(
        function(playerName, index) {


            const player =
                players.find(
                    function(item) {

                        return item.name === playerName;

                    }
                );


            if (!player) {

                return;

            }


            const card =
                document.createElement("div");


            card.className =
                "participant-card";


            card.innerHTML = `

                <span class="participant-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="participant-hc">
                    HC ${player.handicap}
                </span>

                <span class="participant-name">
                    ${player.name}
                </span>

                <span class="participant-status">
                    ✓ REGISTERED
                </span>

            `;


            participantsGrid.appendChild(card);

        }
    );

}


if (
    participantsGrid &&
    participantCount &&
    noParticipant
) {

    displayParticipants();

}