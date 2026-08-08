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
// COMBINED PLAYER DATABASE
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