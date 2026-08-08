// =================================
// ADMIN PANEL
// V1.3 PROTOTYPE
// =================================


// =================================
// REGISTERED DATA
// =================================

const STORAGE_KEY =
    "ninepool_registered_participants";


const defaultParticipants = [
    "AKEN",
    "LAROSA",
    "YOSIA"
];


function getRegisteredParticipants() {

    const saved =
        localStorage.getItem(STORAGE_KEY);


    if (!saved) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(defaultParticipants)
        );

        return [...defaultParticipants];

    }


    try {

        return JSON.parse(saved);

    } catch (error) {

        return [...defaultParticipants];

    }

}


function saveRegisteredParticipants(list) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(list)
    );

}



// =================================
// ADMIN ELEMENTS
// =================================

const adminSearch =
    document.getElementById("adminSearch");


const adminPlayerList =
    document.getElementById("adminPlayerList");


const adminEmpty =
    document.getElementById("adminEmpty");


const registeredCount =
    document.getElementById("registeredCount");


const availableCount =
    document.getElementById("availableCount");


const databaseCount =
    document.getElementById("databaseCount");



let adminFilter = "ALL";


// =================================
// DISPLAY
// =================================

function displayAdminPlayers() {


    const registered =
        getRegisteredParticipants();


    const searchText =
        adminSearch.value
        .toUpperCase()
        .trim();


    const filtered =
        players.filter(function(player) {


            const matchName =
                player.name.includes(searchText);


            const matchHC =
                adminFilter === "ALL"
                ||
                player.handicap === adminFilter;


            return matchName && matchHC;

        });


    adminPlayerList.innerHTML = "";


    databaseCount.innerHTML =
        players.length;


    registeredCount.innerHTML =
        registered.length;


    availableCount.innerHTML =
        Math.max(
            64 - registered.length,
            0
        );


    if (filtered.length === 0) {

        adminEmpty.style.display = "block";

        return;

    }


    adminEmpty.style.display = "none";


    filtered.forEach(
        function(player, index) {


            const isRegistered =
                registered.includes(player.name);


            const row =
                document.createElement("div");


            row.className =
                "admin-player";


            row.innerHTML = `

                <span class="admin-player-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="admin-player-name">
                    ${player.name}
                </span>

                <span class="admin-player-hc">
                    HC ${player.handicap}
                </span>

                <span class="admin-status">

                    ${
                        isRegistered

                        ?

                        `
                        <button
                            class="remove-button"
                            data-player="${player.name}"
                        >
                            REMOVE
                        </button>
                        `

                        :

                        `
                        <button
                            class="register-button"
                            data-player="${player.name}"
                        >
                            REGISTER
                        </button>
                        `

                    }

                </span>

            `;


            adminPlayerList.appendChild(row);

        }
    );


    attachPlayerButtons();

}



// =================================
// REGISTER / REMOVE
// =================================

function attachPlayerButtons() {


    document
        .querySelectorAll(".register-button")
        .forEach(function(button) {


            button.addEventListener(
                "click",
                function() {


                    const playerName =
                        button.dataset.player;


                    const registered =
                        getRegisteredParticipants();


                    if (
                        !registered.includes(
                            playerName
                        )
                    ) {


                        if (
                            registered.length >= 64
                        ) {

                            alert(
                                "Peserta sudah mencapai batas maksimal 64."
                            );

                            return;

                        }


                        registered.push(
                            playerName
                        );


                        saveRegisteredParticipants(
                            registered
                        );


                        displayAdminPlayers();

                    }

                }
            );

        });


    document
        .querySelectorAll(".remove-button")
        .forEach(function(button) {


            button.addEventListener(
                "click",
                function() {


                    const playerName =
                        button.dataset.player;


                    const registered =
                        getRegisteredParticipants();


                    const updated =
                        registered.filter(
                            function(name) {

                                return name !== playerName;

                            }
                        );


                    saveRegisteredParticipants(
                        updated
                    );


                    displayAdminPlayers();

                }
            );

        });

}



// =================================
// SEARCH
// =================================

adminSearch.addEventListener(
    "input",
    displayAdminPlayers
);



// =================================
// FILTER
// =================================

document
    .querySelectorAll(".admin-filter-button")
    .forEach(function(button) {


        button.addEventListener(
            "click",
            function() {


                document
                    .querySelectorAll(
                        ".admin-filter-button"
                    )
                    .forEach(function(item) {

                        item.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                adminFilter =
                    button.dataset.filter;


                displayAdminPlayers();

            }
        );

    });



// =================================
// INITIALIZE
// =================================

displayAdminPlayers();