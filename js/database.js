

/*

Nedan finns databasen.

Notera att nycklarna i objekten har skrivits med citationstecken. Det går också bra.


OBS 1
Innehållet i databasen är skapad programmatiskt och kan innehålla gramatiska
fel i namnen och lite annat konstigt. Exempel:
a) "Derecho Aplicadas" är grammatiskt fel på spanska.
b) Toulouse kan ha fler universitet än Paris, som ju är en mycket större stad.
   Konstigheter som dessa behöver du inte bry er om.

Om du dock hittar data som verkligen inte alls fungerar så får du hemskt gärna
höra av dig till oss så ska vi kolla på det. Ett exempel på data som inte fungerar
skulle kunna vara negativa värden av antalet studenter i ett program.

OBS 2
Det finns nyckar i objekten i PROGRAMMES som inte används i detta projekt.
De kan ignoreras.

*/

const COUNTRIES = [
    {
        "id": 0,
        "name": "Spanien",
        "imagesNormal": [
            "spain_normal_1.jpg",
            "spain_normal_2.jpg",
            "spain_normal_3.jpg",
            "spain_normal_4.jpg",
            "spain_normal_5.jpg",
            "spain_normal_6.jpg"
        ],
    },
    {
        "id": 1,
        "name": "Frankrike",
        "imagesNormal": [
            "france_normal_1.jpg",
            "france_normal_2.jpg",
            "france_normal_3.jpg",
            "france_normal_4.jpg",
            "france_normal_5.jpg",
            "france_normal_6.jpg"
        ],
    },
    {
        "id": 2,
        "name": "Australien",
        "imagesNormal": [
            "australia_normal_1.jpg",
            "australia_normal_2.jpg"
        ],
    },
    {
        "id": 3,
        "name": "Storbritanien",
        "imagesNormal": [
            "united_kingdom_normal_1.jpg",
            "united_kingdom_normal_2.jpg",
            "united_kingdom_normal_3.jpg",
            "united_kingdom_normal_4.jpg",
            "united_kingdom_normal_5.jpg",
            "united_kingdom_normal_6.jpg"
        ],
    },
    {
        "id": 4,
        "name": "Sverige",
        "imagesNormal": [
            "sweden_normal_1.jpg",
            "sweden_normal_2.jpg",
            "sweden_normal_3.jpg",
            "sweden_normal_4.jpg",
            "sweden_normal_5.jpg",
            "sweden_normal_6.jpg"
        ],
    },
    {
        "id": 8,
        "name": "Chile",
        "imagesNormal": [
            "chile_normal_1.jpg",
            "chile_normal_2.jpg",
            "chile_normal_3.jpg",
            "chile_normal_4.jpg"
        ],
    },
    {
        "id": 5,
        "name": "Mexico",
        "imagesNormal": [
            "mexico_normal_1.jpg",
            "mexico_normal_2.jpg",
            "mexico_normal_3.jpg",
            "mexico_normal_4.jpg",
            "mexico_normal_5.jpg",
            "mexico_normal_6.jpg"
        ],
    },
    {
        "id": 6,
        "name": "USA",
        "imagesNormal": [
            "usa_normal_1.jpg",
            "usa_normal_2.jpg",
            "usa_normal_3.jpg",
            "usa_normal_4.jpg"
        ],
    },
    {
        "id": 7,
        "name": "Argentina",
        "imagesNormal": [
            "argentina_normal_1.jpg",
            "argentina_normal_2.jpg",
            "argentina_normal_3.jpg",
            "argentina_normal_4.jpg"
        ],
    }
];
const CITIES = [
    {
        "id": 0,
        "name": "Madrid",
        "countryID": 0,
        "sun": 305,
        "imagesNormal": [
            "madrid_normal_1.jpg",
            "madrid_normal_2.jpg",
            "madrid_normal_3.jpg",
            "madrid_normal_4.jpg"
        ],
    },
    {
        "id": 1,
        "name": "Sevilla",
        "countryID": 0,
        "sun": 310,
        "imagesNormal": [
            "sevilla_normal_1.jpg",
            "sevilla_normal_2.jpg",
            "sevilla_normal_3.jpg",
            "sevilla_normal_4.jpg"
        ],
    },
    {
        "id": 2,
        "name": "Salamanca",
        "countryID": 0,
        "sun": 280,
        "imagesNormal": [
            "salamanca_normal_1.jpg",
            "salamanca_normal_2.jpg",
            "salamanca_normal_3.jpg",
            "salamanca_normal_4.jpg"
        ],
    },
    {
        "id": 3,
        "name": "Paris",
        "countryID": 1,
        "sun": 222,
        "imagesNormal": [
            "paris_normal_1.jpg",
            "paris_normal_2.jpg",
            "paris_normal_3.jpg",
            "paris_normal_4.jpg"
        ],
    },
    {
        "id": 4,
        "name": "Lyon",
        "countryID": 1,
        "sun": 220,
        "imagesNormal": [
            "lyon_normal_1.jpg",
            "lyon_normal_2.jpg",
            "lyon_normal_3.jpg",
            "lyon_normal_4.jpg"
        ],
    },
    {
        "id": 5,
        "name": "Toulouse",
        "countryID": 1,
        "sun": 287,
        "imagesNormal": [
            "toulouse_normal_1.jpg",
            "toulouse_normal_2.jpg",
            "toulouse_normal_3.jpg",
            "toulouse_normal_4.jpg"
        ],
    },
    {
        "id": 6,
        "name": "Nice",
        "countryID": 1,
        "sun": 312,
        "imagesNormal": [
            "nice_normal_1.jpg",
            "nice_normal_2.jpg"
        ],
    },
    {
        "id": 7,
        "name": "Melbourne",
        "countryID": 2,
        "sun": 270,
        "imagesNormal": [
            "melbourne_normal_1.jpg",
            "melbourne_normal_2.jpg"
        ],
    },
    {
        "id": 8,
        "name": "Sidney",
        "countryID": 2,
        "sun": 310,
        "imagesNormal": [
            "sidney_normal_1.jpg",
            "sidney_normal_2.jpg",
            "sidney_normal_3.jpg",
            "sidney_normal_4.jpg"
        ],
    },
    {
        "id": 9,
        "name": "Canberra",
        "countryID": 2,
        "sun": 290,
        "imagesNormal": [
            "canberra_normal_1.jpg",
            "canberra_normal_2.jpg"
        ],
    },
    {
        "id": 10,
        "name": "London",
        "countryID": 3,
        "sun": 150,
        "imagesNormal": [
            "london_normal_1.jpg",
            "london_normal_2.jpg",
            "london_normal_3.jpg",
            "london_normal_4.jpg"
        ],
    },
    {
        "id": 11,
        "name": "Manchester",
        "countryID": 3,
        "sun": 120,
        "imagesNormal": [
            "manchester_normal_1.jpg",
            "manchester_normal_2.jpg",
            "manchester_normal_3.jpg",
            "manchester_normal_4.jpg"
        ],
    },
    {
        "id": 12,
        "name": "York",
        "countryID": 3,
        "sun": 140,
        "imagesNormal": [
            "york_normal_1.jpg",
            "york_normal_2.jpg"
        ],
    },
    {
        "id": 13,
        "name": "Sheffield",
        "countryID": 3,
        "sun": 150,
        "imagesNormal": [
            "sheffield_normal_1.jpg",
            "sheffield_normal_2.jpg",
            "sheffield_normal_3.jpg",
            "sheffield_normal_4.jpg"
        ],
    },
    {
        "id": 14,
        "name": "Bath",
        "countryID": 3,
        "sun": 100,
        "imagesNormal": [
            "bath_normal_1.jpg",
            "bath_normal_2.jpg"
        ],
    },
    {
        "id": 15,
        "name": "Edinburgh",
        "countryID": 3,
        "sun": 50,
        "imagesNormal": [
            "edinburgh_normal_1.jpg",
            "edinburgh_normal_2.jpg"
        ],
    },
    {
        "id": 16,
        "name": "Malmo",
        "countryID": 4,
        "sun": 150,
        "imagesNormal": [
            "malmo_normal_1.jpg",
            "malmo_normal_2.jpg"
        ],
    },
    {
        "id": 17,
        "name": "Stockholm",
        "countryID": 4,
        "sun": 150,
        "imagesNormal": [
            "stockholm_normal_1.jpg",
            "stockholm_normal_2.jpg",
            "stockholm_normal_3.jpg",
            "stockholm_normal_4.jpg"
        ],
    },
    {
        "id": 18,
        "name": "Uppsala",
        "countryID": 4,
        "sun": 120,
        "imagesNormal": [
            "uppsala_normal_1.jpg",
            "uppsala_normal_2.jpg",
            "uppsala_normal_3.jpg",
            "uppsala_normal_4.jpg"
        ],
    },
    {
        "id": 19,
        "name": "Lund",
        "countryID": 4,
        "sun": 150,
        "imagesNormal": [
            "lund_normal_1.jpg",
            "lund_normal_2.jpg"
        ],
    },
    {
        "id": 20,
        "name": "Santiago",
        "countryID": 8,
        "sun": 290,
        "imagesNormal": [
            "santiago_normal_1.jpg",
            "santiago_normal_2.jpg"
        ],
    },
    {
        "id": 21,
        "name": "Valparaiso",
        "countryID": 8,
        "sun": 300,
        "imagesNormal": [
            "valparaiso_normal_1.jpg",
            "valparaiso_normal_2.jpg"
        ],
    },
    {
        "id": 22,
        "name": "Guadalajara",
        "countryID": 5,
        "sun": 260,
        "imagesNormal": [
            "guadalajara_normal_1.jpg",
            "guadalajara_normal_2.jpg"
        ],
    },
    {
        "id": 23,
        "name": "Mexico City",
        "countryID": 5,
        "sun": 304,
        "imagesNormal": [
            "mexico_city_normal_1.jpg",
            "mexico_city_normal_2.jpg"
        ],
    },
    {
        "id": 24,
        "name": "Oaxaca",
        "countryID": 5,
        "sun": 300,
        "imagesNormal": [
            "oaxaca_normal_1.jpg",
            "oaxaca_normal_2.jpg"
        ],
    },
    {
        "id": 25,
        "name": "Boston",
        "countryID": 6,
        "sun": 140,
        "imagesNormal": [
            "boston_normal_1.jpg",
            "boston_normal_2.jpg"
        ],
    },
    {
        "id": 26,
        "name": "San Francisco",
        "countryID": 6,
        "sun": 160,
        "imagesNormal": [
            "san_francisco_normal_1.jpg",
            "san_francisco_normal_2.jpg"
        ],
    },
    {
        "id": 27,
        "name": "Washington",
        "countryID": 6,
        "sun": 203,
        "imagesNormal": [
            "washington_normal_1.jpg",
            "washington_normal_2.jpg"
        ],
    },
    {
        "id": 28,
        "name": "New York",
        "countryID": 6,
        "sun": 135,
        "imagesNormal": [
            "new_york_normal_1.jpg",
            "new_york_normal_2.jpg"
        ],
    },
    {
        "id": 29,
        "name": "Buffalo",
        "countryID": 6,
        "sun": 250,
        "imagesNormal": [
            "buffalo_normal_1.jpg",
            "buffalo_normal_2.jpg"
        ],
    },
    {
        "id": 30,
        "name": "Atlanta",
        "countryID": 6,
        "sun": 150,
        "imagesNormal": [
            "atlanta_normal_1.jpg",
            "atlanta_normal_2.jpg"
        ],
    },
    {
        "id": 31,
        "name": "Buenos Aires",
        "countryID": 7,
        "sun": 205,
        "imagesNormal": [
            "buenos_aires_normal_1.jpg",
            "buenos_aires_normal_2.jpg"
        ],
    },
    {
        "id": 32,
        "name": "Cordoba",
        "countryID": 7,
        "sun": 320,
        "imagesNormal": [
            "cordoba_normal_1.jpg",
            "cordoba_normal_2.jpg"
        ],
    }
];
const UNIVERSITIES = [
    {
        "id": 0,
        "name": "Academia Universitaria de Madrid",
        "cityID": 0
    },
    {
        "id": 1,
        "name": "Universidad de Madrid",
        "cityID": 0
    },
    {
        "id": 2,
        "name": "Polit\u00e9cnica de Madrid",
        "cityID": 0
    },
    {
        "id": 3,
        "name": "Escuela de Estudios Superiores de Sevilla",
        "cityID": 1
    },
    {
        "id": 4,
        "name": "Universidad de Salamanca",
        "cityID": 2
    },
    {
        "id": 5,
        "name": "Polit\u00e9cnica de Salamanca",
        "cityID": 2
    },
    {
        "id": 6,
        "name": "Universit\u00e9 de Paris",
        "cityID": 3
    },
    {
        "id": 7,
        "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Paris",
        "cityID": 3
    },
    {
        "id": 8,
        "name": "L'Acad\u00e9mie de Paris",
        "cityID": 3
    },
    {
        "id": 9,
        "name": "Universit\u00e9 de Lyon",
        "cityID": 4
    },
    {
        "id": 10,
        "name": "L'Acad\u00e9mie de Lyon",
        "cityID": 4
    },
    {
        "id": 11,
        "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Toulouse",
        "cityID": 5
    },
    {
        "id": 12,
        "name": "Universit\u00e9 de Toulouse",
        "cityID": 5
    },
    {
        "id": 13,
        "name": "L'Acad\u00e9mie de Toulouse",
        "cityID": 5
    },
    {
        "id": 14,
        "name": "L'Acad\u00e9mie de Nice",
        "cityID": 6
    },
    {
        "id": 15,
        "name": "Universit\u00e9 de Nice",
        "cityID": 6
    },
    {
        "id": 16,
        "name": "Melbourne University",
        "cityID": 7
    },
    {
        "id": 17,
        "name": "University of Melbourne",
        "cityID": 7
    },
    {
        "id": 18,
        "name": "University of Sidney",
        "cityID": 8
    },
    {
        "id": 19,
        "name": "Sidney School for Advanced Studies",
        "cityID": 8
    },
    {
        "id": 20,
        "name": "Sidney Polytechnic University",
        "cityID": 8
    },
    {
        "id": 21,
        "name": "Canberra Polytechnic University",
        "cityID": 9
    },
    {
        "id": 22,
        "name": "University of Canberra",
        "cityID": 9
    },
    {
        "id": 23,
        "name": "Canberra University",
        "cityID": 9
    },
    {
        "id": 24,
        "name": "London University",
        "cityID": 10
    },
    {
        "id": 25,
        "name": "London School for Advanced Studies",
        "cityID": 10
    },
    {
        "id": 26,
        "name": "University of London",
        "cityID": 10
    },
    {
        "id": 27,
        "name": "University of Manchester",
        "cityID": 11
    },
    {
        "id": 28,
        "name": "Manchester School for Advanced Studies",
        "cityID": 11
    },
    {
        "id": 29,
        "name": "University of York",
        "cityID": 12
    },
    {
        "id": 30,
        "name": "Sheffield Polytechnic University",
        "cityID": 13
    },
    {
        "id": 31,
        "name": "Sheffield School for Advanced Studies",
        "cityID": 13
    },
    {
        "id": 32,
        "name": "University of Sheffield",
        "cityID": 13
    },
    {
        "id": 33,
        "name": "University of Bath",
        "cityID": 14
    },
    {
        "id": 34,
        "name": "Bath School for Advanced Studies",
        "cityID": 14
    },
    {
        "id": 35,
        "name": "University of Edinborough",
        "cityID": 15
    },
    {
        "id": 36,
        "name": "H\u00f6gskolan i Malmo",
        "cityID": 16
    },
    {
        "id": 37,
        "name": "Malmo Akademi",
        "cityID": 16
    },
    {
        "id": 38,
        "name": "H\u00f6gskolan i Stockholm",
        "cityID": 17
    },
    {
        "id": 39,
        "name": "Stockholm Akademi",
        "cityID": 17
    },
    {
        "id": 40,
        "name": "H\u00f6gskolan i Uppsala",
        "cityID": 18
    },
    {
        "id": 41,
        "name": "Uppsala Akademi",
        "cityID": 18
    },
    {
        "id": 42,
        "name": "H\u00f6gskolan i Lund",
        "cityID": 19
    },
    {
        "id": 43,
        "name": "Universidad de Santiago",
        "cityID": 20
    },
    {
        "id": 44,
        "name": "Escuela de Estudios Superiores de Santiago",
        "cityID": 20
    },
    {
        "id": 45,
        "name": "Polit\u00e9cnica de Valparaiso",
        "cityID": 21
    },
    {
        "id": 46,
        "name": "Escuela de Estudios Superiores de Guadalajara",
        "cityID": 22
    },
    {
        "id": 47,
        "name": "Escuela de Estudios Superiores de Mexico DF",
        "cityID": 23
    },
    {
        "id": 48,
        "name": "Escuela de Estudios Superiores de Oaxaca",
        "cityID": 24
    },
    {
        "id": 49,
        "name": "Boston University",
        "cityID": 25
    },
    {
        "id": 50,
        "name": "University of Boston",
        "cityID": 25
    },
    {
        "id": 51,
        "name": "San Francisco University",
        "cityID": 26
    },
    {
        "id": 52,
        "name": "San Francisco Polytechnic University",
        "cityID": 26
    },
    {
        "id": 53,
        "name": "University of Washington",
        "cityID": 27
    },
    {
        "id": 54,
        "name": "Washington School for Advanced Studies",
        "cityID": 27
    },
    {
        "id": 55,
        "name": "Washington Polytechnic University",
        "cityID": 27
    },
    {
        "id": 56,
        "name": "New York University",
        "cityID": 28
    },
    {
        "id": 57,
        "name": "University of New York",
        "cityID": 28
    },
    {
        "id": 58,
        "name": "Buffalo Polytechnic University",
        "cityID": 29
    },
    {
        "id": 59,
        "name": "University of Buffalo",
        "cityID": 29
    },
    {
        "id": 60,
        "name": "University of Atlanta",
        "cityID": 30
    },
    {
        "id": 61,
        "name": "Atlanta University",
        "cityID": 30
    },
    {
        "id": 62,
        "name": "Universidad de Buenos Aires",
        "cityID": 31
    },
    {
        "id": 63,
        "name": "Academia Universitaria de Cordoba",
        "cityID": 32
    },
    {
        "id": 64,
        "name": "Polit\u00e9cnica de Cordoba",
        "cityID": 32
    },
    {
        "id": 65,
        "name": "Escuela de Estudios Superiores de Cordoba",
        "cityID": 32
    }
];
const PROGRAMMES = [
    {
        "id": 0,
        "entryGrades": [
            6.78,
            6.67,
            6.55,
            6.31,
            6.22
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            62,
            58,
            56,
            54,
            53
        ],
        "universityID": 0
    },
    {
        "id": 1,
        "entryGrades": [
            8.22,
            8.41,
            8.49,
            8.64,
            8.77
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 25,
        "name": "Matem\u00e1ticas e historia",
        "subjectID": 0,
        "successRate": [
            41,
            41,
            43,
            46,
            48
        ],
        "universityID": 0
    },
    {
        "id": 2,
        "entryGrades": [
            7.8,
            7.86,
            7.91,
            8.09,
            8.16
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 16,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            40,
            45,
            41,
            38,
            44
        ],
        "universityID": 0
    },
    {
        "id": 3,
        "entryGrades": [
            6,
            5.98,
            5.89,
            5.88,
            5.81
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 20,
        "name": "Sociolog\u00eda aplicadas",
        "subjectID": 4,
        "successRate": [
            70,
            70,
            65,
            64,
            63
        ],
        "universityID": 0
    },
    {
        "id": 4,
        "entryGrades": [
            6.71,
            7.17,
            7.04,
            6.81,
            6.89
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 15,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            40,
            44,
            46,
            53
        ],
        "universityID": 0
    },
    {
        "id": 5,
        "entryGrades": [
            5.48,
            5.53,
            5.56,
            5.93,
            6.01
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 33,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            64,
            59,
            56,
            56,
            52
        ],
        "universityID": 1
    },
    {
        "id": 6,
        "entryGrades": [
            8.18,
            8.42,
            8.29,
            8.52,
            8.39
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 26,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            42,
            46,
            52,
            55,
            61
        ],
        "universityID": 1
    },
    {
        "id": 7,
        "entryGrades": [
            8.71,
            8.38,
            8.35,
            8.03,
            7.98
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 16,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            65,
            63,
            63,
            59,
            53
        ],
        "universityID": 1
    },
    {
        "id": 8,
        "entryGrades": [
            5.85,
            5.76,
            5.68,
            5.57,
            5.43
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 35,
        "name": "Sociolog\u00eda y sostenibilidad",
        "subjectID": 4,
        "successRate": [
            58,
            57,
            57,
            63,
            57
        ],
        "universityID": 1
    },
    {
        "id": 9,
        "entryGrades": [
            7.07,
            6.99,
            6.83,
            6.64,
            6.63
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 33,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            58,
            56,
            55,
            53,
            51
        ],
        "universityID": 1
    },
    {
        "id": 10,
        "entryGrades": [
            7.61,
            7.31,
            7.2,
            7.08,
            6.89
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 17,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            41,
            37,
            45,
            44,
            46
        ],
        "universityID": 1
    },
    {
        "id": 11,
        "entryGrades": [
            6.98,
            7.27,
            7.3,
            7.54,
            7.68
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 20,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            71,
            69,
            69,
            66,
            65
        ],
        "universityID": 1
    },
    {
        "id": 12,
        "entryGrades": [
            6.19,
            6.38,
            6.46,
            6.37,
            5.86
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 16,
        "name": "Estudios superiores de Ontología",
        "subjectID": 6,
        "successRate": [
            67,
            61,
            70,
            73,
            70
        ],
        "universityID": 1
    },
    {
        "id": 13,
        "entryGrades": [
            6.25,
            6.13,
            5.95,
            5.9,
            5.86
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 17,
        "name": "Dise\u00f1o y sociedad",
        "subjectID": 6,
        "successRate": [
            49,
            46,
            44,
            42,
            41
        ],
        "universityID": 1
    },
    {
        "id": 14,
        "entryGrades": [
            7.64,
            7.69,
            7.87,
            8.02,
            8.02
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 18,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            41,
            43,
            44,
            47,
            47
        ],
        "universityID": 1
    },
    {
        "id": 15,
        "entryGrades": [
            6.38,
            6.23,
            6.19,
            6.16,
            6.14
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 27,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            64,
            70,
            68,
            64,
            67
        ],
        "universityID": 1
    },
    {
        "id": 16,
        "entryGrades": [
            6.25,
            5.95,
            5.9,
            5.73,
            5.56
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 27,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            49,
            45,
            47,
            44,
            46
        ],
        "universityID": 2
    },
    {
        "id": 17,
        "entryGrades": [
            7.18,
            7.6,
            7.83,
            7.92,
            8.06
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 26,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            39,
            41,
            47,
            49,
            53
        ],
        "universityID": 2
    },
    {
        "id": 18,
        "entryGrades": [
            6.39,
            6.69,
            6.7,
            6.73,
            6.93
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 31,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            51,
            56,
            53,
            53,
            53
        ],
        "universityID": 2
    },
    {
        "id": 19,
        "entryGrades": [
            7.04,
            6.66,
            7.37,
            7.42,
            6.93
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 27,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            53,
            47,
            48,
            46,
            43
        ],
        "universityID": 2
    },
    {
        "id": 20,
        "entryGrades": [
            5.87,
            5.66,
            6.09,
            5.87,
            6.05
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 30,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            65,
            66,
            67,
            68,
            72
        ],
        "universityID": 2
    },
    {
        "id": 21,
        "entryGrades": [
            6.19,
            5.99,
            6.51,
            6.49,
            6.57
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 22,
        "name": "Sociolog\u00eda en el siglo XXI",
        "subjectID": 4,
        "successRate": [
            47,
            52,
            54,
            53,
            53
        ],
        "universityID": 3
    },
    {
        "id": 22,
        "entryGrades": [
            6.15,
            6.16,
            6.2,
            6.25,
            6.38
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 30,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            69,
            64,
            70,
            76,
            62
        ],
        "universityID": 3
    },
    {
        "id": 23,
        "entryGrades": [
            8.34,
            8.38,
            8.43,
            8.47,
            8.25
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 22,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            67,
            68,
            65,
            68,
            72
        ],
        "universityID": 3
    },
    {
        "id": 24,
        "entryGrades": [
            8.02,
            7.66,
            7.64,
            8.09,
            8.46
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 22,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            71,
            67,
            67,
            65,
            64
        ],
        "universityID": 3
    },
    {
        "id": 25,
        "entryGrades": [
            7.31,
            7.21,
            7.16,
            7.08,
            7.04
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 33,
        "name": "Ingenier\u00eda en el siglo XXI",
        "subjectID": 1,
        "successRate": [
            43,
            40,
            40,
            39,
            36
        ],
        "universityID": 4
    },
    {
        "id": 26,
        "entryGrades": [
            6.1,
            6.08,
            5.91,
            5.77,
            5.68
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 30,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            64,
            65,
            62,
            66,
            62
        ],
        "universityID": 4
    },
    {
        "id": 27,
        "entryGrades": [
            7.14,
            7.02,
            6.83,
            6.79,
            6.75
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 20,
        "name": "Dise\u00f1o en el siglo XXI",
        "subjectID": 6,
        "successRate": [
            48,
            46,
            42,
            41,
            36
        ],
        "universityID": 4
    },
    {
        "id": 28,
        "entryGrades": [
            6.08,
            5.92,
            6.01,
            6.29,
            6.18
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            61,
            59,
            66,
            56,
            58
        ],
        "universityID": 4
    },
    {
        "id": 29,
        "entryGrades": [
            7.9,
            8.27,
            8.35,
            8.38,
            8.51
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 15,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            58,
            55,
            54,
            50,
            49
        ],
        "universityID": 4
    },
    {
        "id": 30,
        "entryGrades": [
            6.11,
            6.05,
            5.95,
            6.18,
            6
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 35,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            63,
            59,
            59,
            60,
            67
        ],
        "universityID": 4
    },
    {
        "id": 31,
        "entryGrades": [
            6.52,
            6.51,
            6.45,
            6.3,
            6.28
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 35,
        "name": "Filosofía Oriental Aplicada",
        "subjectID": 5,
        "successRate": [
            50,
            56,
            57,
            59,
            64
        ],
        "universityID": 4
    },
    {
        "id": 32,
        "entryGrades": [
            6.31,
            6.5,
            6.7,
            6.79,
            6.91
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 14,
        "name": "Dise\u00f1o e historia",
        "subjectID": 6,
        "successRate": [
            47,
            43,
            42,
            41,
            40
        ],
        "universityID": 4
    },
    {
        "id": 33,
        "entryGrades": [
            8.06,
            8.03,
            7.96,
            7.86,
            7.79
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 26,
        "name": "Ingenier\u00eda y sociedad",
        "subjectID": 1,
        "successRate": [
            53,
            54,
            58,
            59,
            65
        ],
        "universityID": 4
    },
    {
        "id": 34,
        "entryGrades": [
            7.61,
            7.62,
            7.58,
            7.77,
            7.78
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            54,
            54,
            56,
            59,
            60
        ],
        "universityID": 4
    },
    {
        "id": 35,
        "entryGrades": [
            5.81,
            5.6,
            5.46,
            5.78,
            6.21
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 30,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            51,
            52,
            55,
            46,
            53
        ],
        "universityID": 4
    },
    {
        "id": 36,
        "entryGrades": [
            7.64,
            7.84,
            7.94,
            7.97,
            7.28
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 33,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            75,
            73,
            68,
            66,
            64
        ],
        "universityID": 5
    },
    {
        "id": 37,
        "entryGrades": [
            7.25,
            7.12,
            7.08,
            7.06,
            6.71
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 23,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            64,
            64,
            64,
            60,
            59
        ],
        "universityID": 5
    },
    {
        "id": 38,
        "entryGrades": [
            8.17,
            8.3,
            7.97,
            8.01,
            8.13
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 21,
        "name": "Dise\u00f1o e historia",
        "subjectID": 6,
        "successRate": [
            55,
            58,
            59,
            61,
            68
        ],
        "universityID": 5
    },
    {
        "id": 39,
        "entryGrades": [
            7.02,
            6.72,
            6.67,
            6.56,
            6.26
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 23,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            69,
            63,
            60,
            55,
            54
        ],
        "universityID": 5
    },
    {
        "id": 40,
        "entryGrades": [
            6.36,
            6.49,
            6.58,
            6.28,
            6.2
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            38,
            42,
            42,
            44,
            46
        ],
        "universityID": 5
    },
    {
        "id": 41,
        "entryGrades": [
            7.22,
            7,
            7.32,
            7.17,
            7.54
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 20,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            61,
            61,
            66,
            67,
            71
        ],
        "universityID": 5
    },
    {
        "id": 42,
        "entryGrades": [
            7.43,
            7.18,
            7.41,
            7.51,
            7.49
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            63,
            65,
            66,
            62,
            66
        ],
        "universityID": 5
    },
    {
        "id": 43,
        "entryGrades": [
            6.14,
            6.13,
            6.03,
            5.88,
            5.8
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            46,
            53,
            37,
            51,
            53
        ],
        "universityID": 5
    },
    {
        "id": 44,
        "entryGrades": [
            6.77,
            6.7,
            6.65,
            6.55,
            6.38
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            64,
            65,
            68,
            71,
            72
        ],
        "universityID": 5
    },
    {
        "id": 45,
        "entryGrades": [
            6.03,
            5.96,
            5.8,
            5.8,
            5.67
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            64,
            59,
            59,
            58,
            56
        ],
        "universityID": 5
    },
    {
        "id": 46,
        "entryGrades": [
            7.23,
            7.33,
            7.34,
            7.34,
            7.25
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 14,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            59,
            57,
            55,
            60,
            53
        ],
        "universityID": 5
    },
    {
        "id": 47,
        "entryGrades": [
            8.24,
            8.13,
            8.07,
            8,
            7.69
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 14,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            54,
            57,
            54,
            58,
            61
        ],
        "universityID": 5
    },
    {
        "id": 48,
        "entryGrades": [
            6.77,
            6.48,
            6.46,
            6.49,
            6.48
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 35,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            72,
            70,
            69,
            68,
            67
        ],
        "universityID": 6
    },
    {
        "id": 49,
        "entryGrades": [
            6.85,
            6.98,
            6.96,
            6.7,
            6.65
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 12,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            53,
            49,
            49,
            49,
            46
        ],
        "universityID": 6
    },
    {
        "id": 50,
        "entryGrades": [
            8.22,
            8.34,
            8.41,
            8.59,
            8.63
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 32,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            56,
            53,
            52,
            50,
            45
        ],
        "universityID": 6
    },
    {
        "id": 51,
        "entryGrades": [
            7.39,
            7.59,
            7.75,
            7.87,
            7.97
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 32,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            58,
            59,
            60,
            64,
            65
        ],
        "universityID": 6
    },
    {
        "id": 52,
        "entryGrades": [
            8.55,
            8.34,
            8.14,
            8.07,
            7.77
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Advanced Studies in Antropology",
        "subjectID": 4,
        "successRate": [
            56,
            52,
            50,
            63,
            52
        ],
        "universityID": 6
    },
    {
        "id": 53,
        "entryGrades": [
            7.29,
            7.33,
            7.34,
            7.3,
            7.28
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 24,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            66,
            67,
            67,
            67,
            68
        ],
        "universityID": 7
    },
    {
        "id": 54,
        "entryGrades": [
            7.07,
            7.3,
            7.33,
            7.4,
            7.5
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 35,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            73,
            63,
            68,
            72
        ],
        "universityID": 7
    },
    {
        "id": 55,
        "entryGrades": [
            5.98,
            5.65,
            6.1,
            5.93,
            6.22
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Human Nature and Ideas",
        "subjectID": 5,
        "successRate": [
            59,
            60,
            62,
            62,
            66
        ],
        "universityID": 7
    },
    {
        "id": 56,
        "entryGrades": [
            6.93,
            6.94,
            7.04,
            7.23,
            7.28
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            63,
            65,
            67,
            68,
            70
        ],
        "universityID": 7
    },
    {
        "id": 57,
        "entryGrades": [
            6.47,
            6.41,
            6.41,
            6.34,
            6.26
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 35,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            54,
            54,
            50,
            47,
            47
        ],
        "universityID": 7
    },
    {
        "id": 58,
        "entryGrades": [
            8.01,
            8.06,
            8.22,
            8.24,
            8.28
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 16,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            78,
            72,
            68,
            65,
            65
        ],
        "universityID": 7
    },
    {
        "id": 59,
        "entryGrades": [
            6,
            6.05,
            6.22,
            6.39,
            6.42
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 25,
        "name": "Design et la France",
        "subjectID": 6,
        "successRate": [
            63,
            56,
            54,
            53,
            49
        ],
        "universityID": 7
    },
    {
        "id": 60,
        "entryGrades": [
            7.74,
            7.57,
            7.56,
            7.53,
            7.45
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Applied Sociological Analysis",
        "subjectID": 4,
        "successRate": [
            53,
            55,
            58,
            59,
            61
        ],
        "universityID": 7
    },
    {
        "id": 61,
        "entryGrades": [
            7.72,
            7.77,
            7.9,
            7.92,
            8.01
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 19,
        "name": "\u00c9tudes avanc\u00e9s en Medicine",
        "subjectID": 3,
        "successRate": [
            39,
            40,
            43,
            44,
            45
        ],
        "universityID": 7
    },
    {
        "id": 62,
        "entryGrades": [
            8.14,
            8.52,
            8.22,
            7.84,
            8.07
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 28,
        "name": "\u00c9tudes avanc\u00e9s en Medicine",
        "subjectID": 3,
        "successRate": [
            50,
            52,
            56,
            59,
            60
        ],
        "universityID": 8
    },
    {
        "id": 63,
        "entryGrades": [
            7.23,
            7.22,
            6.92,
            6.61,
            6.54
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 30,
        "name": "Medicine et la France",
        "subjectID": 3,
        "successRate": [
            53,
            56,
            47,
            59,
            50
        ],
        "universityID": 8
    },
    {
        "id": 64,
        "entryGrades": [
            5.33,
            5.72,
            5.92,
            6.11,
            6.15
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            56,
            55,
            58,
            56,
            49
        ],
        "universityID": 8
    },
    {
        "id": 65,
        "entryGrades": [
            6.3,
            6.51,
            6.31,
            6.41,
            6.3
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 29,
        "name": "Design et durabilit\u00e9",
        "subjectID": 6,
        "successRate": [
            69,
            65,
            62,
            62,
            58
        ],
        "universityID": 8
    },
    {
        "id": 66,
        "entryGrades": [
            6.4,
            6.47,
            6.54,
            6.66,
            6.79
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 12,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            62,
            61,
            60,
            56,
            53
        ],
        "universityID": 8
    },
    {
        "id": 67,
        "entryGrades": [
            7.09,
            7.02,
            6.92,
            6.86,
            6.79
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 23,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            67,
            66,
            65,
            59,
            58
        ],
        "universityID": 9
    },
    {
        "id": 68,
        "entryGrades": [
            5.6,
            5.7,
            5.7,
            5.8,
            5.9
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 27,
        "name": "Medicine et societ\u00e9",
        "subjectID": 3,
        "successRate": [
            58,
            58,
            56,
            55,
            54
        ],
        "universityID": 9
    },
    {
        "id": 69,
        "entryGrades": [
            6.61,
            6.5,
            6.36,
            6.33,
            6.2
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 16,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            51,
            53,
            49,
            52,
            46
        ],
        "universityID": 9
    },
    {
        "id": 70,
        "entryGrades": [
            7.42,
            7.43,
            7.51,
            7.64,
            7.86
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 35,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            62,
            64,
            64,
            65,
            67
        ],
        "universityID": 9
    },
    {
        "id": 71,
        "entryGrades": [
            7.06,
            6.84,
            7.43,
            6.83,
            6.8
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 28,
        "name": "Ing\u00e9nierie et societ\u00e9",
        "subjectID": 1,
        "successRate": [
            40,
            46,
            51,
            52,
            55
        ],
        "universityID": 9
    },
    {
        "id": 72,
        "entryGrades": [
            6.93,
            6.83,
            6.77,
            6.58,
            6.55
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 22,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            68,
            67,
            63,
            57,
            56
        ],
        "universityID": 9
    },
    {
        "id": 73,
        "entryGrades": [
            6.35,
            6.29,
            6.16,
            6.03,
            5.8
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 32,
        "name": "\u00c9tudes avanc\u00e9s en Filosofie",
        "subjectID": 5,
        "successRate": [
            52,
            53,
            56,
            59,
            60
        ],
        "universityID": 9
    },
    {
        "id": 74,
        "entryGrades": [
            6.49,
            6.52,
            6.78,
            7.1,
            7.18
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 32,
        "name": "Design et Histoire",
        "subjectID": 6,
        "successRate": [
            66,
            70,
            73,
            70,
            65
        ],
        "universityID": 9
    },
    {
        "id": 75,
        "entryGrades": [
            7.82,
            7.79,
            7.77,
            7.7,
            7.52
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 19,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            50,
            51,
            55,
            56,
            63
        ],
        "universityID": 9
    },
    {
        "id": 76,
        "entryGrades": [
            5.83,
            5.99,
            6.02,
            6.29,
            6.29
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 13,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            39,
            39,
            46,
            46,
            55
        ],
        "universityID": 9
    },
    {
        "id": 77,
        "entryGrades": [
            8.15,
            7.99,
            7.82,
            7.81,
            7.79
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 17,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            67,
            61,
            59,
            58,
            56
        ],
        "universityID": 9
    },
    {
        "id": 78,
        "entryGrades": [
            6.27,
            6.2,
            6.61,
            6.61,
            5.96
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 32,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            62,
            66,
            67,
            72,
            73
        ],
        "universityID": 10
    },
    {
        "id": 79,
        "entryGrades": [
            7.8,
            7.69,
            7.67,
            7.58,
            7.57
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 30,
        "name": "Droit et durabilit\u00e9",
        "subjectID": 2,
        "successRate": [
            66,
            66,
            63,
            57,
            52
        ],
        "universityID": 10
    },
    {
        "id": 80,
        "entryGrades": [
            6.88,
            7.18,
            7.29,
            7.31,
            7.38
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 26,
        "name": "Mathematics in Society",
        "subjectID": 0,
        "successRate": [
            49,
            48,
            46,
            46,
            45
        ],
        "universityID": 10
    },
    {
        "id": 81,
        "entryGrades": [
            6.91,
            7.11,
            7.32,
            7.5,
            7.57
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            42,
            38,
            41,
            34,
            46
        ],
        "universityID": 10
    },
    {
        "id": 82,
        "entryGrades": [
            6.57,
            6.87,
            7.14,
            7.22,
            7.22
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 26,
        "name": "Design appliqu\u00e9s",
        "subjectID": 6,
        "successRate": [
            50,
            56,
            45,
            53,
            56
        ],
        "universityID": 10
    },
    {
        "id": 83,
        "entryGrades": [
            5.39,
            5.4,
            5.57,
            5.8,
            5.81
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 12,
        "name": "Design et r\u00e9alit\u00e9 virtuelle",
        "subjectID": 6,
        "successRate": [
            54,
            52,
            49,
            48,
            47
        ],
        "universityID": 10
    },
    {
        "id": 84,
        "entryGrades": [
            5.94,
            5.95,
            5.98,
            6.07,
            6.16
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 23,
        "name": "\u00c9tudes avanc\u00e9s en Ing\u00e9nierie",
        "subjectID": 1,
        "successRate": [
            53,
            51,
            55,
            56,
            60
        ],
        "universityID": 10
    },
    {
        "id": 85,
        "entryGrades": [
            7.85,
            7.77,
            7.77,
            7.72,
            7.63
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 12,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            50,
            52,
            56,
            56,
            61
        ],
        "universityID": 10
    },
    {
        "id": 86,
        "entryGrades": [
            7.12,
            7.02,
            6.98,
            6.69,
            6.61
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 30,
        "name": "\u00c9tudes avanc\u00e9s en Filosofie",
        "subjectID": 5,
        "successRate": [
            55,
            55,
            61,
            61,
            62
        ],
        "universityID": 10
    },
    {
        "id": 87,
        "entryGrades": [
            7.76,
            7.66,
            7.63,
            7.89,
            7.66
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 34,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            71,
            66,
            66,
            62,
            60
        ],
        "universityID": 10
    },
    {
        "id": 88,
        "entryGrades": [
            6.02,
            5.95,
            5.8,
            5.76,
            5.75
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            55,
            57,
            57,
            58,
            58
        ],
        "universityID": 10
    },
    {
        "id": 89,
        "entryGrades": [
            6.43,
            6.19,
            6.07,
            6.01,
            6
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 26,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            74,
            59,
            70,
            70
        ],
        "universityID": 11
    },
    {
        "id": 90,
        "entryGrades": [
            8.33,
            8.32,
            8.24,
            8.23,
            8.12
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 29,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            53,
            48,
            48,
            56,
            55
        ],
        "universityID": 11
    },
    {
        "id": 91,
        "entryGrades": [
            7.25,
            7.38,
            7.44,
            7.59,
            7.41
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 25,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            66,
            66,
            69,
            69,
            71
        ],
        "universityID": 11
    },
    {
        "id": 92,
        "entryGrades": [
            7.86,
            7.78,
            7.69,
            7.61,
            7.5
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 17,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            54,
            55,
            51,
            59,
            57
        ],
        "universityID": 11
    },
    {
        "id": 93,
        "entryGrades": [
            7.62,
            7.48,
            7.4,
            7.39,
            7.34
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 12,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            60,
            61,
            64,
            70,
            71
        ],
        "universityID": 11
    },
    {
        "id": 94,
        "entryGrades": [
            8.45,
            8.41,
            8.35,
            8.26,
            8.14
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 16,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            45,
            47,
            41,
            48,
            44
        ],
        "universityID": 11
    },
    {
        "id": 95,
        "entryGrades": [
            8.44,
            8.08,
            8.6,
            8.39,
            8.39
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 35,
        "name": "Droit appliqu\u00e9s",
        "subjectID": 2,
        "successRate": [
            66,
            60,
            60,
            55,
            54
        ],
        "universityID": 11
    },
    {
        "id": 96,
        "entryGrades": [
            7.52,
            7.6,
            7.65,
            7.83,
            8.12
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Applied Anatomy",
        "subjectID": 3,
        "successRate": [
            37,
            39,
            41,
            42,
            46
        ],
        "universityID": 11
    },
    {
        "id": 97,
        "entryGrades": [
            7.54,
            7.54,
            7.61,
            7.71,
            7.84
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 34,
        "name": "\u00c9tudes avanc\u00e9s en Medicine",
        "subjectID": 3,
        "successRate": [
            43,
            45,
            48,
            49,
            51
        ],
        "universityID": 11
    },
    {
        "id": 98,
        "entryGrades": [
            8.02,
            8.23,
            8.38,
            8.4,
            8.43
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 21,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            52,
            46,
            44,
            41,
            40
        ],
        "universityID": 11
    },
    {
        "id": 99,
        "entryGrades": [
            7.71,
            7.68,
            7.56,
            7.51,
            7.48
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            67,
            66,
            61,
            55,
            51
        ],
        "universityID": 12
    },
    {
        "id": 100,
        "entryGrades": [
            8.37,
            8.2,
            8.67,
            8.25,
            8.31
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 29,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            32,
            38,
            38,
            40,
            42
        ],
        "universityID": 12
    },
    {
        "id": 101,
        "entryGrades": [
            8.03,
            8.07,
            8.15,
            8.23,
            8.3
        ],
        "exchangeStudents": 6,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 33,
        "name": "Medicine et la France",
        "subjectID": 3,
        "successRate": [
            65,
            64,
            58,
            56,
            51
        ],
        "universityID": 12
    },
    {
        "id": 102,
        "entryGrades": [
            7.45,
            7.25,
            7.25,
            7.17,
            7.01
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            49,
            46,
            44,
            44,
            42
        ],
        "universityID": 12
    },
    {
        "id": 103,
        "entryGrades": [
            7.91,
            7.9,
            7.84,
            7.65,
            7.54
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 17,
        "name": "\u00c9tudes avanc\u00e9s en Ing\u00e9nierie",
        "subjectID": 1,
        "successRate": [
            67,
            60,
            62,
            74,
            66
        ],
        "universityID": 12
    },
    {
        "id": 104,
        "entryGrades": [
            6.04,
            6.27,
            6.38,
            6.41,
            6.69
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 34,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            51,
            54,
            49,
            54,
            49
        ],
        "universityID": 12
    },
    {
        "id": 105,
        "entryGrades": [
            7.18,
            7.17,
            6.97,
            6.88,
            6.73
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 24,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            47,
            40,
            44,
            46,
            51
        ],
        "universityID": 12
    },
    {
        "id": 106,
        "entryGrades": [
            7.98,
            7.9,
            7.86,
            7.6,
            7.44
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 27,
        "name": "\u00c9tudes avanc\u00e9s de T\u00e9chnologie",
        "subjectID": 1,
        "successRate": [
            41,
            42,
            45,
            48,
            50
        ],
        "universityID": 12
    },
    {
        "id": 107,
        "entryGrades": [
            8.52,
            8.51,
            8.5,
            8.42,
            8.12
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 25,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            56,
            53,
            50,
            46,
            45
        ],
        "universityID": 12
    },
    {
        "id": 108,
        "entryGrades": [
            5.42,
            5.45,
            5.52,
            5.61,
            5.77
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 25,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            60,
            64,
            66,
            61,
            63
        ],
        "universityID": 12
    },
    {
        "id": 109,
        "entryGrades": [
            7.09,
            7.04,
            7.01,
            6.83,
            6.59
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 18,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            61,
            56,
            53,
            52,
            51
        ],
        "universityID": 12
    },
    {
        "id": 110,
        "entryGrades": [
            6.65,
            6.68,
            6.69,
            6.53,
            6.9
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 22,
        "name": "Design et la France",
        "subjectID": 6,
        "successRate": [
            46,
            44,
            40,
            37,
            36
        ],
        "universityID": 12
    },
    {
        "id": 111,
        "entryGrades": [
            8.4,
            8.43,
            8.41,
            8.34,
            8.23
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 24,
        "name": "\u00c9tudes avanc\u00e9s en Mat\u00e9matiques",
        "subjectID": 0,
        "successRate": [
            61,
            66,
            55,
            55,
            64
        ],
        "universityID": 13
    },
    {
        "id": 112,
        "entryGrades": [
            7.23,
            7.41,
            7.41,
            7.42,
            7.62
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 30,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            53,
            58,
            50,
            54,
            52
        ],
        "universityID": 13
    },
    {
        "id": 113,
        "entryGrades": [
            7.51,
            7.5,
            7.46,
            7.35,
            7.32
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 18,
        "name": "Filosofie et durabilit\u00e9",
        "subjectID": 5,
        "successRate": [
            70,
            64,
            63,
            59,
            58
        ],
        "universityID": 13
    },
    {
        "id": 114,
        "entryGrades": [
            6.01,
            5.88,
            5.82,
            5.78,
            5.61
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 14,
        "name": "Filosofie appliqu\u00e9s",
        "subjectID": 5,
        "successRate": [
            42,
            35,
            37,
            40,
            47
        ],
        "universityID": 13
    },
    {
        "id": 115,
        "entryGrades": [
            7.19,
            7.02,
            7.09,
            7.48,
            7.31
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 12,
        "name": "Droit et Histoire",
        "subjectID": 2,
        "successRate": [
            43,
            41,
            41,
            40,
            35
        ],
        "universityID": 13
    },
    {
        "id": 116,
        "entryGrades": [
            6.65,
            6.57,
            6.35,
            6.01,
            5.94
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 20,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            58,
            57,
            52,
            52,
            50
        ],
        "universityID": 13
    },
    {
        "id": 117,
        "entryGrades": [
            6.05,
            6.4,
            5.81,
            6.4,
            5.73
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 18,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            38,
            40,
            43,
            48,
            48
        ],
        "universityID": 13
    },
    {
        "id": 118,
        "entryGrades": [
            7.19,
            6.94,
            7.33,
            7.4,
            7.21
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 27,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            68,
            62,
            62,
            56,
            54
        ],
        "universityID": 13
    },
    {
        "id": 119,
        "entryGrades": [
            7.33,
            7.67,
            7.26,
            7.33,
            7.49
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 33,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            42,
            43,
            47,
            48,
            55
        ],
        "universityID": 14
    },
    {
        "id": 120,
        "entryGrades": [
            6.09,
            6.26,
            6.03,
            6.14,
            6.02
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 30,
        "name": "Droit et Histoire",
        "subjectID": 2,
        "successRate": [
            66,
            71,
            63,
            64,
            61
        ],
        "universityID": 14
    },
    {
        "id": 121,
        "entryGrades": [
            5.84,
            5.81,
            5.78,
            5.83,
            5.87
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 13,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            47,
            53,
            53,
            53,
            54
        ],
        "universityID": 14
    },
    {
        "id": 122,
        "entryGrades": [
            6.2,
            6.01,
            6.35,
            6.09,
            6.34
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 1,
        "localStudents": 29,
        "name": "Medicine et Histoire",
        "subjectID": 3,
        "successRate": [
            56,
            52,
            51,
            47,
            46
        ],
        "universityID": 14
    },
    {
        "id": 123,
        "entryGrades": [
            6.98,
            6.98,
            7.14,
            7.2,
            7.38
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 32,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            63,
            64,
            64,
            65,
            65
        ],
        "universityID": 14
    },
    {
        "id": 124,
        "entryGrades": [
            6.04,
            5.81,
            5.78,
            5.53,
            5.52
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            43,
            41,
            45,
            38,
            36
        ],
        "universityID": 15
    },
    {
        "id": 125,
        "entryGrades": [
            7.86,
            7.63,
            8.12,
            7.55,
            7.52
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            44,
            48,
            53,
            54,
            55
        ],
        "universityID": 15
    },
    {
        "id": 126,
        "entryGrades": [
            6.74,
            6.57,
            6.87,
            6.58,
            6.84
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            63,
            59,
            57,
            54,
            52
        ],
        "universityID": 15
    },
    {
        "id": 127,
        "entryGrades": [
            6.08,
            5.91,
            5.79,
            5.8,
            5.97
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 34,
        "name": "Mathematics and Virtual Reality",
        "subjectID": 0,
        "successRate": [
            65,
            63,
            59,
            55,
            52
        ],
        "universityID": 15
    },
    {
        "id": 128,
        "entryGrades": [
            6.73,
            6.75,
            6.71,
            6.68,
            6.41
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 26,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            55,
            53,
            48,
            45,
            41
        ],
        "universityID": 15
    },
    {
        "id": 129,
        "entryGrades": [
            7.18,
            7.11,
            7.16,
            7.11,
            7.1
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 28,
        "name": "Filosofie et Histoire",
        "subjectID": 5,
        "successRate": [
            63,
            61,
            60,
            58,
            55
        ],
        "universityID": 15
    },
    {
        "id": 130,
        "entryGrades": [
            7.03,
            7.46,
            6.72,
            7.01,
            7.1
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 16,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            66,
            69,
            69,
            70,
            77
        ],
        "universityID": 15
    },
    {
        "id": 131,
        "entryGrades": [
            8.21,
            8.16,
            7.93,
            7.9,
            7.89
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 16,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            44,
            43,
            40,
            39,
            39
        ],
        "universityID": 15
    },
    {
        "id": 132,
        "entryGrades": [
            7.97,
            8.06,
            8.1,
            8.12,
            8.27
        ],
        "exchangeStudents": 5,
        "languageID": 2,
        "levelID": 3,
        "localStudents": 28,
        "name": "Mat\u00e9matiques et durabilit\u00e9",
        "subjectID": 0,
        "successRate": [
            54,
            52,
            46,
            45,
            42
        ],
        "universityID": 15
    },
    {
        "id": 133,
        "entryGrades": [
            7.61,
            7.65,
            7.78,
            7.81,
            8.02
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            45,
            41,
            40,
            35,
            34
        ],
        "universityID": 15
    },
    {
        "id": 134,
        "entryGrades": [
            7.55,
            7.29,
            7.19,
            7.22,
            7.11
        ],
        "exchangeStudents": 4,
        "languageID": 2,
        "levelID": 2,
        "localStudents": 15,
        "name": "Sociologie et Histoire",
        "subjectID": 4,
        "successRate": [
            44,
            46,
            50,
            52,
            52
        ],
        "universityID": 15
    },
    {
        "id": 135,
        "entryGrades": [
            7.41,
            7.41,
            7.4,
            6.97,
            6.96
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            62,
            67,
            57,
            60,
            64
        ],
        "universityID": 16
    },
    {
        "id": 136,
        "entryGrades": [
            6.36,
            6.5,
            6.54,
            6.6,
            6.82
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 21,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            41,
            37,
            36,
            42,
            45
        ],
        "universityID": 16
    },
    {
        "id": 137,
        "entryGrades": [
            7.7,
            7.64,
            7.69,
            7.85,
            7.58
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 25,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            53,
            54,
            53,
            51,
            48
        ],
        "universityID": 16
    },
    {
        "id": 138,
        "entryGrades": [
            6.76,
            6.86,
            6.93,
            6.95,
            6.98
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 25,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            34,
            34,
            35,
            40,
            46
        ],
        "universityID": 16
    },
    {
        "id": 139,
        "entryGrades": [
            7.82,
            7.75,
            7.68,
            7.63,
            7.49
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 34,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            43,
            48,
            46,
            51,
            44
        ],
        "universityID": 16
    },
    {
        "id": 140,
        "entryGrades": [
            7.19,
            7.04,
            7.03,
            6.87,
            6.86
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 19,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            40,
            48,
            32,
            47,
            32
        ],
        "universityID": 16
    },
    {
        "id": 141,
        "entryGrades": [
            7.59,
            7.66,
            7.78,
            7.85,
            7.91
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 25,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            67,
            58,
            57,
            52,
            50
        ],
        "universityID": 16
    },
    {
        "id": 142,
        "entryGrades": [
            6.5,
            6.6,
            6.32,
            6.3,
            6.44
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            65,
            63,
            62,
            60,
            59
        ],
        "universityID": 16
    },
    {
        "id": 143,
        "entryGrades": [
            7.96,
            7.84,
            7.81,
            7.68,
            7.61
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 28,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            48,
            49,
            50,
            54,
            56
        ],
        "universityID": 16
    },
    {
        "id": 144,
        "entryGrades": [
            7.55,
            7.26,
            7.21,
            7.01,
            6.9
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 18,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            73,
            63,
            63,
            61,
            58
        ],
        "universityID": 16
    },
    {
        "id": 145,
        "entryGrades": [
            8.18,
            8.14,
            8.12,
            7.97,
            7.96
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 30,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            52,
            57,
            51,
            48,
            50
        ],
        "universityID": 16
    },
    {
        "id": 146,
        "entryGrades": [
            7.37,
            7.13,
            7.13,
            6.93,
            6.9
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 34,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            54,
            53,
            46,
            45,
            44
        ],
        "universityID": 16
    },
    {
        "id": 147,
        "entryGrades": [
            8.3,
            8.64,
            8.34,
            8.18,
            8.12
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 22,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            67,
            66,
            63,
            61,
            60
        ],
        "universityID": 17
    },
    {
        "id": 148,
        "entryGrades": [
            7.59,
            7.76,
            7.54,
            7.44,
            7.49
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 12,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            62,
            59,
            54,
            54,
            54
        ],
        "universityID": 17
    },
    {
        "id": 149,
        "entryGrades": [
            5.48,
            5.48,
            5.62,
            5.68,
            5.74
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 15,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            39,
            45,
            47,
            50,
            51
        ],
        "universityID": 17
    },
    {
        "id": 150,
        "entryGrades": [
            6.1,
            6.17,
            6.22,
            6.25,
            6.44
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 33,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            66,
            66,
            68,
            69,
            69
        ],
        "universityID": 17
    },
    {
        "id": 151,
        "entryGrades": [
            5.83,
            5.85,
            5.88,
            5.92,
            5.97
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 13,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            58,
            57,
            51,
            49,
            48
        ],
        "universityID": 17
    },
    {
        "id": 152,
        "entryGrades": [
            7.43,
            7.43,
            7.33,
            7.05,
            7.05
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            62,
            59,
            57,
            56,
            53
        ],
        "universityID": 18
    },
    {
        "id": 153,
        "entryGrades": [
            7.78,
            8.02,
            7.51,
            7.92,
            7.97
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 33,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            69,
            69,
            63,
            63,
            62
        ],
        "universityID": 18
    },
    {
        "id": 154,
        "entryGrades": [
            6.28,
            6.2,
            6,
            5.9,
            5.86
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 17,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            67,
            70,
            71,
            67,
            64
        ],
        "universityID": 18
    },
    {
        "id": 155,
        "entryGrades": [
            8.48,
            8.83,
            8.6,
            8.12,
            8.06
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 27,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            50,
            53,
            53,
            45,
            52
        ],
        "universityID": 18
    },
    {
        "id": 156,
        "entryGrades": [
            6.5,
            6.13,
            6.11,
            6.04,
            5.93
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 34,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            52,
            46,
            45,
            44,
            41
        ],
        "universityID": 18
    },
    {
        "id": 157,
        "entryGrades": [
            6.72,
            6.48,
            6.59,
            6.43,
            6.92
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 32,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            59,
            61,
            64,
            65,
            68
        ],
        "universityID": 18
    },
    {
        "id": 158,
        "entryGrades": [
            7.89,
            8.18,
            8.21,
            8.24,
            8.38
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 13,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            62,
            58,
            54,
            52,
            51
        ],
        "universityID": 19
    },
    {
        "id": 159,
        "entryGrades": [
            6.7,
            6.78,
            6.84,
            6.95,
            7.01
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 18,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            55,
            61,
            62,
            64,
            65
        ],
        "universityID": 19
    },
    {
        "id": 160,
        "entryGrades": [
            6,
            6.06,
            6.13,
            6.14,
            6.19
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 15,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            43,
            44,
            44,
            45,
            46
        ],
        "universityID": 19
    },
    {
        "id": 161,
        "entryGrades": [
            6.77,
            6.5,
            6.29,
            6,
            5.9
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            44,
            45,
            45,
            50,
            52
        ],
        "universityID": 19
    },
    {
        "id": 162,
        "entryGrades": [
            7.58,
            7.34,
            7.36,
            7.62,
            7.83
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 16,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            42,
            43,
            49,
            51,
            56
        ],
        "universityID": 19
    },
    {
        "id": 163,
        "entryGrades": [
            7.26,
            7.24,
            7.17,
            7,
            6.9
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 20,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            45,
            44,
            41,
            39,
            36
        ],
        "universityID": 19
    },
    {
        "id": 164,
        "entryGrades": [
            6.06,
            5.88,
            5.87,
            5.68,
            5.65
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Advanced Studies in Anatomy",
        "subjectID": 3,
        "successRate": [
            62,
            63,
            65,
            65,
            66
        ],
        "universityID": 19
    },
    {
        "id": 165,
        "entryGrades": [
            6.47,
            6.69,
            6.22,
            6.14,
            6.3
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 14,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            59,
            61,
            59,
            54,
            65
        ],
        "universityID": 19
    },
    {
        "id": 166,
        "entryGrades": [
            6.89,
            6.92,
            7.05,
            7.07,
            7.23
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            58,
            58,
            62,
            66,
            66
        ],
        "universityID": 19
    },
    {
        "id": 167,
        "entryGrades": [
            8.39,
            8.37,
            8.34,
            8.31,
            8.11
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 18,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            58,
            56,
            54,
            52,
            50
        ],
        "universityID": 19
    },
    {
        "id": 168,
        "entryGrades": [
            8.29,
            8.1,
            8.5,
            8.02,
            8.04
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 31,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            65,
            63,
            61,
            60,
            57
        ],
        "universityID": 19
    },
    {
        "id": 169,
        "entryGrades": [
            6.08,
            6.08,
            5.99,
            5.93,
            5.9
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            53,
            50,
            48,
            45,
            43
        ],
        "universityID": 19
    },
    {
        "id": 170,
        "entryGrades": [
            7.34,
            7.53,
            7.54,
            7.59,
            7.85
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 24,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            56,
            63,
            49,
            57,
            59
        ],
        "universityID": 20
    },
    {
        "id": 171,
        "entryGrades": [
            5.55,
            5.65,
            5.76,
            5.94,
            5.99
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 16,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            59,
            61,
            64,
            65,
            72
        ],
        "universityID": 20
    },
    {
        "id": 172,
        "entryGrades": [
            6.36,
            5.97,
            5.95,
            5.94,
            5.52
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 31,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            62,
            64,
            67,
            58,
            59
        ],
        "universityID": 20
    },
    {
        "id": 173,
        "entryGrades": [
            6.16,
            6.1,
            6.06,
            5.88,
            5.82
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 30,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            74,
            71,
            69,
            69,
            65
        ],
        "universityID": 20
    },
    {
        "id": 174,
        "entryGrades": [
            8.48,
            8.43,
            8.34,
            8.28,
            8.25
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            46,
            49,
            50,
            51,
            55
        ],
        "universityID": 20
    },
    {
        "id": 175,
        "entryGrades": [
            7.43,
            7.54,
            7.58,
            7.6,
            7.71
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            42,
            42,
            42,
            41,
            41
        ],
        "universityID": 20
    },
    {
        "id": 176,
        "entryGrades": [
            7.53,
            7.32,
            7.27,
            7.22,
            7.21
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 35,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            63,
            61,
            60,
            57,
            54
        ],
        "universityID": 20
    },
    {
        "id": 177,
        "entryGrades": [
            7.7,
            7.8,
            8,
            8.05,
            8.13
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            47,
            44,
            41,
            50,
            44
        ],
        "universityID": 20
    },
    {
        "id": 178,
        "entryGrades": [
            8.49,
            8.35,
            8.33,
            8.32,
            8.24
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 23,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            51,
            58,
            60,
            60,
            67
        ],
        "universityID": 21
    },
    {
        "id": 179,
        "entryGrades": [
            6.43,
            6.78,
            6.82,
            6.55,
            6.04
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 28,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            65,
            65,
            61,
            68,
            59
        ],
        "universityID": 21
    },
    {
        "id": 180,
        "entryGrades": [
            8.28,
            8.29,
            8.41,
            8.42,
            8.51
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 35,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            58,
            60,
            63,
            64,
            62
        ],
        "universityID": 21
    },
    {
        "id": 181,
        "entryGrades": [
            7.23,
            7.04,
            7.02,
            6.85,
            6.84
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 23,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            60,
            64,
            54,
            68,
            54
        ],
        "universityID": 21
    },
    {
        "id": 182,
        "entryGrades": [
            5.99,
            6.28,
            6.35,
            6.38,
            6.45
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 16,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            39,
            44,
            46,
            46,
            50
        ],
        "universityID": 21
    },
    {
        "id": 183,
        "entryGrades": [
            6.43,
            6.38,
            6.14,
            6.11,
            6.09
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 34,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            43,
            35,
            51,
            37,
            46
        ],
        "universityID": 21
    },
    {
        "id": 184,
        "entryGrades": [
            6.43,
            6.49,
            6.58,
            6.68,
            6.73
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            35,
            36,
            40,
            44,
            45
        ],
        "universityID": 21
    },
    {
        "id": 185,
        "entryGrades": [
            8.17,
            8.32,
            8.34,
            8.37,
            8.43
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 20,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            51,
            48,
            46,
            44,
            41
        ],
        "universityID": 21
    },
    {
        "id": 186,
        "entryGrades": [
            6.72,
            6.94,
            7.08,
            7.09,
            7.12
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            58,
            57,
            64,
            55,
            52
        ],
        "universityID": 21
    },
    {
        "id": 187,
        "entryGrades": [
            6.16,
            5.9,
            5.75,
            5.89,
            5.83
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Design and Virtual Reality",
        "subjectID": 6,
        "successRate": [
            60,
            65,
            67,
            71,
            75
        ],
        "universityID": 21
    },
    {
        "id": 188,
        "entryGrades": [
            6.91,
            6.82,
            6.72,
            6.7,
            6.7
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 16,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            61,
            63,
            64,
            65,
            67
        ],
        "universityID": 21
    },
    {
        "id": 189,
        "entryGrades": [
            7.33,
            7.34,
            7.49,
            7.42,
            7.21
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 34,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            58,
            57,
            50,
            46,
            45
        ],
        "universityID": 21
    },
    {
        "id": 190,
        "entryGrades": [
            5.94,
            5.73,
            6.03,
            6.06,
            5.99
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            42,
            40,
            36,
            44,
            46
        ],
        "universityID": 22
    },
    {
        "id": 191,
        "entryGrades": [
            7.41,
            7.55,
            7.68,
            7.7,
            7.94
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 24,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            55,
            60,
            51,
            61,
            57
        ],
        "universityID": 22
    },
    {
        "id": 192,
        "entryGrades": [
            7.1,
            6.95,
            6.82,
            6.88,
            7.33
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 17,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            38,
            42,
            46,
            50,
            51
        ],
        "universityID": 22
    },
    {
        "id": 193,
        "entryGrades": [
            8.1,
            8.04,
            7.86,
            7.67,
            7.48
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 19,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            50,
            48,
            43,
            43,
            42
        ],
        "universityID": 22
    },
    {
        "id": 194,
        "entryGrades": [
            6,
            6.07,
            6.23,
            6.35,
            6.39
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 30,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            70,
            65,
            63,
            62,
            57
        ],
        "universityID": 23
    },
    {
        "id": 195,
        "entryGrades": [
            6.7,
            6.56,
            6.61,
            6.55,
            6.87
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 35,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            61,
            54,
            54,
            50,
            48
        ],
        "universityID": 23
    },
    {
        "id": 196,
        "entryGrades": [
            6.12,
            6.13,
            6.21,
            6.34,
            6.45
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            38,
            40,
            40,
            41,
            42
        ],
        "universityID": 23
    },
    {
        "id": 197,
        "entryGrades": [
            7.91,
            7.86,
            7.49,
            7.38,
            7.27
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 31,
        "name": "Calculus in Society",
        "subjectID": 0,
        "successRate": [
            36,
            39,
            40,
            41,
            41
        ],
        "universityID": 23
    },
    {
        "id": 198,
        "entryGrades": [
            6.87,
            6.65,
            6.63,
            6.37,
            6.33
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            54,
            53,
            51,
            48,
            47
        ],
        "universityID": 24
    },
    {
        "id": 199,
        "entryGrades": [
            7.79,
            7.87,
            8.04,
            8.05,
            8.13
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 29,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            49,
            55,
            57,
            59,
            60
        ],
        "universityID": 24
    },
    {
        "id": 200,
        "entryGrades": [
            5.26,
            5.33,
            5.5,
            5.59,
            5.65
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 33,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            51,
            56,
            57,
            59,
            62
        ],
        "universityID": 24
    },
    {
        "id": 201,
        "entryGrades": [
            5.71,
            5.93,
            6.04,
            5.64,
            5.72
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            65,
            65,
            69,
            71,
            73
        ],
        "universityID": 24
    },
    {
        "id": 202,
        "entryGrades": [
            8.27,
            8.1,
            7.98,
            7.8,
            7.79
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 12,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            43,
            45,
            46,
            40,
            41
        ],
        "universityID": 24
    },
    {
        "id": 203,
        "entryGrades": [
            6.46,
            6.54,
            6.69,
            6.53,
            6.42
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 24,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            72,
            71,
            70,
            69,
            68
        ],
        "universityID": 24
    },
    {
        "id": 204,
        "entryGrades": [
            6.7,
            6.87,
            6.87,
            6.95,
            6.98
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 14,
        "name": "Design Primer",
        "subjectID": 6,
        "successRate": [
            66,
            64,
            63,
            60,
            60
        ],
        "universityID": 24
    },
    {
        "id": 205,
        "entryGrades": [
            7.65,
            7.36,
            7.28,
            7.27,
            6.9
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 24,
        "name": "Medicine and Virtual Reality",
        "subjectID": 3,
        "successRate": [
            55,
            55,
            58,
            52,
            54
        ],
        "universityID": 24
    },
    {
        "id": 206,
        "entryGrades": [
            8.09,
            8.06,
            8.29,
            8.05,
            8.26
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 12,
        "name": "Advanced Studies in Physics",
        "subjectID": 1,
        "successRate": [
            60,
            59,
            58,
            56,
            53
        ],
        "universityID": 24
    },
    {
        "id": 207,
        "entryGrades": [
            6.62,
            6.51,
            6.58,
            6.99,
            6.3
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 17,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            45,
            41,
            45,
            47,
            43
        ],
        "universityID": 24
    },
    {
        "id": 208,
        "entryGrades": [
            5.81,
            6.23,
            6.16,
            6.22,
            5.93
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            40,
            41,
            41,
            44,
            46
        ],
        "universityID": 25
    },
    {
        "id": 209,
        "entryGrades": [
            7.06,
            6.76,
            6.62,
            6.32,
            6.26
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            54,
            55,
            60,
            64,
            71
        ],
        "universityID": 25
    },
    {
        "id": 210,
        "entryGrades": [
            6.65,
            6.76,
            6.85,
            6.97,
            7.11
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            58,
            56,
            58,
            56,
            60
        ],
        "universityID": 25
    },
    {
        "id": 211,
        "entryGrades": [
            7.52,
            7.53,
            7.49,
            7.69,
            7.35
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            52,
            48,
            57,
            53,
            54
        ],
        "universityID": 25
    },
    {
        "id": 212,
        "entryGrades": [
            6.89,
            6.76,
            6.7,
            6.69,
            6.55
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            66,
            61,
            70,
            66,
            68
        ],
        "universityID": 25
    },
    {
        "id": 213,
        "entryGrades": [
            6.14,
            6.37,
            6.33,
            6.39,
            6.41
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 34,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            52,
            49,
            48,
            45,
            43
        ],
        "universityID": 25
    },
    {
        "id": 214,
        "entryGrades": [
            8.39,
            8.45,
            8.61,
            8.62,
            8.7
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 30,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            63,
            62,
            61,
            57,
            56
        ],
        "universityID": 25
    },
    {
        "id": 215,
        "entryGrades": [
            8.34,
            8.76,
            8.06,
            8.59,
            8.27
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 30,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            74,
            69,
            68,
            63,
            59
        ],
        "universityID": 26
    },
    {
        "id": 216,
        "entryGrades": [
            8.16,
            7.85,
            7.78,
            7.78,
            7.46
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 34,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            74,
            73,
            68,
            66,
            61
        ],
        "universityID": 26
    },
    {
        "id": 217,
        "entryGrades": [
            7.83,
            7.87,
            7.89,
            7.93,
            8.09
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 24,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            58,
            61,
            54,
            52,
            53
        ],
        "universityID": 26
    },
    {
        "id": 218,
        "entryGrades": [
            7.06,
            7.01,
            6.98,
            6.85,
            6.71
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            57,
            55,
            55,
            54,
            60
        ],
        "universityID": 26
    },
    {
        "id": 219,
        "entryGrades": [
            6.81,
            6.71,
            7.04,
            7.17,
            6.87
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            65,
            65,
            64,
            62,
            66
        ],
        "universityID": 26
    },
    {
        "id": 220,
        "entryGrades": [
            7.85,
            8,
            8.02,
            8.03,
            8.15
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            48,
            51,
            56,
            57,
            58
        ],
        "universityID": 26
    },
    {
        "id": 221,
        "entryGrades": [
            7.26,
            7.33,
            7.6,
            7.54,
            7.13
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Modern Society and Sustainability",
        "subjectID": 4,
        "successRate": [
            57,
            61,
            61,
            64,
            66
        ],
        "universityID": 26
    },
    {
        "id": 222,
        "entryGrades": [
            6.79,
            6.96,
            6.61,
            6.44,
            6.45
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            54,
            54,
            60,
            53,
            59
        ],
        "universityID": 26
    },
    {
        "id": 223,
        "entryGrades": [
            6.93,
            6.8,
            6.8,
            6.78,
            6.53
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 16,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            43,
            46,
            48,
            50,
            53
        ],
        "universityID": 26
    },
    {
        "id": 224,
        "entryGrades": [
            6.85,
            6.84,
            6.76,
            6.63,
            6.6
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 29,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            64,
            62,
            61,
            58,
            54
        ],
        "universityID": 26
    },
    {
        "id": 225,
        "entryGrades": [
            6.62,
            6.68,
            6.92,
            7.25,
            7.34
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            64,
            62,
            58,
            56,
            52
        ],
        "universityID": 26
    },
    {
        "id": 226,
        "entryGrades": [
            6.02,
            6.18,
            6.22,
            6.35,
            6.4
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 25,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            58,
            58,
            52,
            49,
            49
        ],
        "universityID": 26
    },
    {
        "id": 227,
        "entryGrades": [
            7.64,
            7.42,
            7.25,
            7.22,
            7
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 31,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            55,
            58,
            50,
            55,
            51
        ],
        "universityID": 27
    },
    {
        "id": 228,
        "entryGrades": [
            8.09,
            8.22,
            8.23,
            8.26,
            8.46
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 23,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            62,
            69,
            57,
            66,
            68
        ],
        "universityID": 27
    },
    {
        "id": 229,
        "entryGrades": [
            8.67,
            8.6,
            8.53,
            8.5,
            8.48
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            67,
            66,
            66,
            65,
            64
        ],
        "universityID": 27
    },
    {
        "id": 230,
        "entryGrades": [
            5.43,
            5.48,
            5.55,
            5.73,
            5.8
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 22,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            63,
            63,
            66,
            66,
            65
        ],
        "universityID": 27
    },
    {
        "id": 231,
        "entryGrades": [
            6.61,
            6.55,
            6.5,
            6.27,
            6.15
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 14,
        "name": "Philosophy in the 21:st Century",
        "subjectID": 5,
        "successRate": [
            47,
            48,
            51,
            52,
            53
        ],
        "universityID": 27
    },
    {
        "id": 232,
        "entryGrades": [
            6.52,
            6.53,
            6.53,
            6.61,
            6.76
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            59,
            64,
            67,
            65,
            59
        ],
        "universityID": 27
    },
    {
        "id": 233,
        "entryGrades": [
            5.87,
            5.88,
            6.17,
            6.27,
            6.31
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 12,
        "name": "Metaphysics in Society",
        "subjectID": 5,
        "successRate": [
            44,
            48,
            49,
            51,
            54
        ],
        "universityID": 27
    },
    {
        "id": 234,
        "entryGrades": [
            7.06,
            6.88,
            6.87,
            6.84,
            6.73
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 18,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            68,
            65,
            65,
            64,
            63
        ],
        "universityID": 27
    },
    {
        "id": 235,
        "entryGrades": [
            7.22,
            6.91,
            7.33,
            7.3,
            7.35
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            51,
            48,
            45,
            43,
            41
        ],
        "universityID": 27
    },
    {
        "id": 236,
        "entryGrades": [
            5.53,
            5.33,
            5.78,
            5.52,
            5.73
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            65,
            61,
            60,
            59,
            55
        ],
        "universityID": 28
    },
    {
        "id": 237,
        "entryGrades": [
            7.72,
            7.76,
            7.76,
            7.79,
            7.91
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 28,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            62,
            64,
            65,
            66,
            67
        ],
        "universityID": 28
    },
    {
        "id": 238,
        "entryGrades": [
            5.83,
            5.89,
            6.01,
            6.12,
            5.56
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 19,
        "name": "Applied Pathology",
        "subjectID": 3,
        "successRate": [
            64,
            63,
            61,
            64,
            63
        ],
        "universityID": 28
    },
    {
        "id": 239,
        "entryGrades": [
            6.37,
            6.37,
            6.39,
            6.5,
            6.69
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            45,
            45,
            43,
            42,
            37
        ],
        "universityID": 28
    },
    {
        "id": 240,
        "entryGrades": [
            8.31,
            8.28,
            8.25,
            7.89,
            7.92
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 25,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            56,
            62,
            57,
            57,
            62
        ],
        "universityID": 28
    },
    {
        "id": 241,
        "entryGrades": [
            7.3,
            7.24,
            7,
            6.84,
            7.21
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 22,
        "name": "Human Engineering",
        "subjectID": 1,
        "successRate": [
            55,
            61,
            63,
            63,
            67
        ],
        "universityID": 28
    },
    {
        "id": 242,
        "entryGrades": [
            7.77,
            8.03,
            8.12,
            8.35,
            8.47
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            57,
            52,
            51,
            46,
            42
        ],
        "universityID": 29
    },
    {
        "id": 243,
        "entryGrades": [
            7.47,
            7.16,
            7.11,
            7.03,
            6.99
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 25,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            65,
            61,
            58,
            58,
            57
        ],
        "universityID": 29
    },
    {
        "id": 244,
        "entryGrades": [
            6.41,
            6.34,
            6.25,
            6.17,
            6.04
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 19,
        "name": "Advanced Blood Analysis",
        "subjectID": 3,
        "successRate": [
            48,
            47,
            44,
            42,
            39
        ],
        "universityID": 29
    },
    {
        "id": 245,
        "entryGrades": [
            6.8,
            6.89,
            7.06,
            7.25,
            7.28
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 29,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            57,
            55,
            52,
            51,
            50
        ],
        "universityID": 29
    },
    {
        "id": 246,
        "entryGrades": [
            6.84,
            6.74,
            6.57,
            6.57,
            6.45
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 25,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            50,
            49,
            44,
            42,
            41
        ],
        "universityID": 30
    },
    {
        "id": 247,
        "entryGrades": [
            8.2,
            7.89,
            7.67,
            7.61,
            7.51
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            33,
            41,
            42,
            44,
            46
        ],
        "universityID": 30
    },
    {
        "id": 248,
        "entryGrades": [
            6.14,
            5.85,
            5.85,
            6.02,
            6.3
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 15,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            62,
            61,
            61,
            59,
            59
        ],
        "universityID": 30
    },
    {
        "id": 249,
        "entryGrades": [
            7.03,
            7.19,
            7.22,
            7.47,
            7.57
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 31,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            44,
            52,
            53,
            54,
            60
        ],
        "universityID": 30
    },
    {
        "id": 250,
        "entryGrades": [
            6.32,
            6.36,
            6.53,
            6.74,
            6.85
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            50,
            51,
            52,
            55,
            57
        ],
        "universityID": 30
    },
    {
        "id": 251,
        "entryGrades": [
            7.65,
            7.7,
            7.58,
            7.51,
            7.9
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 28,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            46,
            49,
            52,
            52
        ],
        "universityID": 30
    },
    {
        "id": 252,
        "entryGrades": [
            7.97,
            8.01,
            8.03,
            8.11,
            8.26
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 12,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            49,
            46,
            43,
            42,
            37
        ],
        "universityID": 30
    },
    {
        "id": 253,
        "entryGrades": [
            5.52,
            5.55,
            5.36,
            5.82,
            5.57
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 25,
        "name": "Mathematics and Virtual Reality",
        "subjectID": 0,
        "successRate": [
            48,
            52,
            53,
            57,
            57
        ],
        "universityID": 30
    },
    {
        "id": 254,
        "entryGrades": [
            8.2,
            8.41,
            8.45,
            8.47,
            8.58
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            47,
            50,
            54,
            44,
            53
        ],
        "universityID": 30
    },
    {
        "id": 255,
        "entryGrades": [
            7.3,
            7.54,
            7.64,
            7.68,
            7.85
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Philosophy in the 21:st Century",
        "subjectID": 5,
        "successRate": [
            52,
            47,
            46,
            53,
            61
        ],
        "universityID": 30
    },
    {
        "id": 256,
        "entryGrades": [
            6.82,
            6.93,
            7.15,
            7.41,
            7.45
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 26,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            59,
            55,
            59,
            57,
            61
        ],
        "universityID": 30
    },
    {
        "id": 257,
        "entryGrades": [
            7.54,
            7.46,
            7.35,
            7.09,
            7.04
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            58,
            55,
            54,
            54,
            49
        ],
        "universityID": 31
    },
    {
        "id": 258,
        "entryGrades": [
            7.32,
            7.15,
            7.11,
            7.02,
            6.89
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 21,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            53,
            54,
            55,
            57,
            60
        ],
        "universityID": 31
    },
    {
        "id": 259,
        "entryGrades": [
            6.76,
            6.71,
            6.7,
            6.49,
            6.33
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 30,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            54,
            49,
            46,
            45,
            39
        ],
        "universityID": 31
    },
    {
        "id": 260,
        "entryGrades": [
            8.62,
            8.58,
            8.44,
            8.36,
            8.32
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 18,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            61,
            63,
            65,
            66,
            70
        ],
        "universityID": 31
    },
    {
        "id": 261,
        "entryGrades": [
            5.91,
            5.71,
            6.1,
            5.66,
            5.65
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 14,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            70,
            69,
            67,
            66,
            64
        ],
        "universityID": 31
    },
    {
        "id": 262,
        "entryGrades": [
            6.92,
            7.06,
            6.87,
            6.76,
            6.92
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            65,
            63,
            61,
            60,
            56
        ],
        "universityID": 32
    },
    {
        "id": 263,
        "entryGrades": [
            6.13,
            6.23,
            6.28,
            6.35,
            6.49
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 12,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            73,
            72,
            69,
            66,
            61
        ],
        "universityID": 32
    },
    {
        "id": 264,
        "entryGrades": [
            6.29,
            6.33,
            6.47,
            6.64,
            6.78
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 13,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            50,
            51,
            54,
            58,
            61
        ],
        "universityID": 32
    },
    {
        "id": 265,
        "entryGrades": [
            6.74,
            6.85,
            6.87,
            7.01,
            7.15
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 34,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            60,
            62,
            63,
            66,
            70
        ],
        "universityID": 32
    },
    {
        "id": 266,
        "entryGrades": [
            7.89,
            7.88,
            7.87,
            7.77,
            7.69
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            56,
            60,
            62,
            55,
            58
        ],
        "universityID": 32
    },
    {
        "id": 267,
        "entryGrades": [
            7.46,
            7.69,
            7.75,
            7.82,
            8.01
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 15,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            67,
            68,
            69,
            71,
            72
        ],
        "universityID": 32
    },
    {
        "id": 268,
        "entryGrades": [
            8.3,
            8.41,
            8.14,
            8.06,
            8.33
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            47,
            47,
            48,
            49,
            53
        ],
        "universityID": 32
    },
    {
        "id": 269,
        "entryGrades": [
            5.95,
            5.91,
            5.9,
            5.87,
            5.73
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            68,
            66,
            64,
            59,
            54
        ],
        "universityID": 32
    },
    {
        "id": 270,
        "entryGrades": [
            7.25,
            7.3,
            7.43,
            7.56,
            7.73
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            69,
            61,
            77,
            77,
            71
        ],
        "universityID": 32
    },
    {
        "id": 271,
        "entryGrades": [
            5.43,
            5.63,
            5.68,
            5.76,
            5.78
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 13,
        "name": "Sociology of the Teenagers",
        "subjectID": 4,
        "successRate": [
            62,
            56,
            58,
            69,
            63
        ],
        "universityID": 32
    },
    {
        "id": 272,
        "entryGrades": [
            6.45,
            6.54,
            6.61,
            6.71,
            6.77
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            62,
            68,
            68,
            75,
            77
        ],
        "universityID": 32
    },
    {
        "id": 273,
        "entryGrades": [
            7.85,
            7.76,
            7.73,
            7.69,
            7.4
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            43,
            45,
            43,
            41,
            35
        ],
        "universityID": 32
    },
    {
        "id": 274,
        "entryGrades": [
            6.64,
            6.69,
            6.72,
            6.84,
            6.88
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 30,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            49,
            50,
            54,
            56,
            58
        ],
        "universityID": 33
    },
    {
        "id": 275,
        "entryGrades": [
            6.98,
            6.81,
            6.77,
            7.17,
            7.07
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 31,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            55,
            56,
            59,
            60,
            65
        ],
        "universityID": 33
    },
    {
        "id": 276,
        "entryGrades": [
            7.76,
            7.75,
            7.49,
            7.26,
            7.19
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            67,
            66,
            63,
            61,
            59
        ],
        "universityID": 33
    },
    {
        "id": 277,
        "entryGrades": [
            7.42,
            7.47,
            7.56,
            7.57,
            7.64
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 30,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            43,
            48,
            50,
            53,
            55
        ],
        "universityID": 33
    },
    {
        "id": 278,
        "entryGrades": [
            6.42,
            6.33,
            6.32,
            6.23,
            6.04
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 15,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            58,
            61,
            62,
            62,
            66
        ],
        "universityID": 33
    },
    {
        "id": 279,
        "entryGrades": [
            5.43,
            5.58,
            5.68,
            5.74,
            5.9
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 16,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            60,
            60,
            58,
            56,
            51
        ],
        "universityID": 34
    },
    {
        "id": 280,
        "entryGrades": [
            7.05,
            6.84,
            6.77,
            6.77,
            6.76
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 20,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            58,
            60,
            66,
            67,
            68
        ],
        "universityID": 34
    },
    {
        "id": 281,
        "entryGrades": [
            7.66,
            7.52,
            7.33,
            7.33,
            7
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 27,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            71,
            71,
            69,
            67,
            66
        ],
        "universityID": 34
    },
    {
        "id": 282,
        "entryGrades": [
            7.34,
            7.31,
            7.21,
            7.2,
            7.02
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 23,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            62,
            64,
            66,
            67,
            73
        ],
        "universityID": 34
    },
    {
        "id": 283,
        "entryGrades": [
            7.7,
            7.87,
            7.97,
            7.78,
            7.97
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 29,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            63,
            67,
            70,
            59,
            68
        ],
        "universityID": 35
    },
    {
        "id": 284,
        "entryGrades": [
            6.35,
            6.46,
            6.61,
            6.73,
            6.9
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            61,
            61,
            59,
            59,
            55
        ],
        "universityID": 35
    },
    {
        "id": 285,
        "entryGrades": [
            6.77,
            6.9,
            6.96,
            6.41,
            6.91
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 19,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            54,
            53,
            48,
            47,
            47
        ],
        "universityID": 35
    },
    {
        "id": 286,
        "entryGrades": [
            5.99,
            5.97,
            5.73,
            5.72,
            5.67
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 30,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            40,
            45,
            46,
            47,
            51
        ],
        "universityID": 35
    },
    {
        "id": 287,
        "entryGrades": [
            5.29,
            5.35,
            5.56,
            5.79,
            5.82
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 18,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            59,
            66,
            68,
            68,
            69
        ],
        "universityID": 35
    },
    {
        "id": 288,
        "entryGrades": [
            5.38,
            5.44,
            5.76,
            5.89,
            5.97
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 14,
        "name": "The Established and the Outsiders",
        "subjectID": 4,
        "successRate": [
            67,
            73,
            71,
            63,
            66
        ],
        "universityID": 35
    },
    {
        "id": 289,
        "entryGrades": [
            6.19,
            5.78,
            5.69,
            5.67,
            5.41
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 23,
        "name": "Magisk Matematisk Logik",
        "subjectID": 0,
        "successRate": [
            57,
            54,
            54,
            57,
            54
        ],
        "universityID": 36
    },
    {
        "id": 290,
        "entryGrades": [
            6.09,
            6.21,
            6.45,
            6.45,
            6.74
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 14,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            41,
            41,
            46,
            47,
            48
        ],
        "universityID": 36
    },
    {
        "id": 291,
        "entryGrades": [
            6.33,
            6.14,
            6.43,
            6.48,
            5.98
        ],
        "exchangeStudents": 4,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 16,
        "name": "Avancerade studier inom Teknik",
        "subjectID": 1,
        "successRate": [
            36,
            41,
            42,
            42,
            46
        ],
        "universityID": 36
    },
    {
        "id": 292,
        "entryGrades": [
            6.33,
            5.99,
            6,
            6.4,
            6.61
        ],
        "exchangeStudents": 5,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 31,
        "name": "Avancerade studier inom Matematik",
        "subjectID": 0,
        "successRate": [
            56,
            55,
            56,
            59,
            50
        ],
        "universityID": 36
    },
    {
        "id": 293,
        "entryGrades": [
            8.05,
            8.13,
            8.15,
            8.33,
            8.41
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            63,
            67,
            68,
            69,
            69
        ],
        "universityID": 36
    },
    {
        "id": 294,
        "entryGrades": [
            8.2,
            8.25,
            8.27,
            8.38,
            8.47
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 25,
        "name": "Everyday Design",
        "subjectID": 6,
        "successRate": [
            48,
            49,
            49,
            55,
            62
        ],
        "universityID": 36
    },
    {
        "id": 295,
        "entryGrades": [
            8.06,
            8.27,
            8.47,
            8.19,
            8.43
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            52,
            54,
            54,
            58,
            60
        ],
        "universityID": 36
    },
    {
        "id": 296,
        "entryGrades": [
            7.17,
            7.11,
            6.87,
            6.68,
            6.54
        ],
        "exchangeStudents": 4,
        "languageID": 3,
        "levelID": 3,
        "localStudents": 21,
        "name": "Medicin i 2000-talet",
        "subjectID": 3,
        "successRate": [
            39,
            40,
            43,
            43,
            48
        ],
        "universityID": 36
    },
    {
        "id": 297,
        "entryGrades": [
            6.82,
            7.17,
            7.18,
            7.38,
            7.52
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 21,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            58,
            64,
            52,
            64,
            51
        ],
        "universityID": 36
    },
    {
        "id": 298,
        "entryGrades": [
            7.06,
            7.03,
            6.87,
            6.68,
            6.67
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 3,
        "localStudents": 16,
        "name": "Avancerade studier inom Sociologi",
        "subjectID": 4,
        "successRate": [
            54,
            57,
            50,
            50,
            60
        ],
        "universityID": 36
    },
    {
        "id": 299,
        "entryGrades": [
            5.83,
            5.99,
            5.99,
            5.76,
            5.89
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            45,
            48,
            50,
            52,
            53
        ],
        "universityID": 36
    },
    {
        "id": 300,
        "entryGrades": [
            8.43,
            8.36,
            8.22,
            8.09,
            8.09
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 27,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            67,
            63,
            63,
            60,
            59
        ],
        "universityID": 37
    },
    {
        "id": 301,
        "entryGrades": [
            7.42,
            7.54,
            7.64,
            7.96,
            8.02
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 28,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            51,
            53,
            55,
            60,
            60
        ],
        "universityID": 37
    },
    {
        "id": 302,
        "entryGrades": [
            7.93,
            7.64,
            7.49,
            7.1,
            7.07
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 33,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            43,
            45,
            47,
            48,
            48
        ],
        "universityID": 37
    },
    {
        "id": 303,
        "entryGrades": [
            7.71,
            7.52,
            7.34,
            7.33,
            7.24
        ],
        "exchangeStudents": 4,
        "languageID": 3,
        "levelID": 1,
        "localStudents": 34,
        "name": "Avancerade studier inom Design",
        "subjectID": 6,
        "successRate": [
            63,
            57,
            68,
            56,
            67
        ],
        "universityID": 37
    },
    {
        "id": 304,
        "entryGrades": [
            5.71,
            5.66,
            5.92,
            5.9,
            5.46
        ],
        "exchangeStudents": 5,
        "languageID": 3,
        "levelID": 1,
        "localStudents": 22,
        "name": "Avancerade studier inom Matematik",
        "subjectID": 0,
        "successRate": [
            43,
            45,
            47,
            50,
            51
        ],
        "universityID": 37
    },
    {
        "id": 305,
        "entryGrades": [
            7.16,
            6.99,
            7.17,
            7.2,
            7.35
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            44,
            43,
            42,
            38,
            35
        ],
        "universityID": 37
    },
    {
        "id": 306,
        "entryGrades": [
            7.81,
            7.63,
            7.36,
            7.34,
            7.26
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 31,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            67,
            66,
            64,
            63,
            57
        ],
        "universityID": 37
    },
    {
        "id": 307,
        "entryGrades": [
            7.93,
            8.15,
            7.96,
            8.11,
            7.94
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 19,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            55,
            52,
            52,
            49,
            47
        ],
        "universityID": 37
    },
    {
        "id": 308,
        "entryGrades": [
            7.12,
            6.95,
            7.28,
            7.3,
            7.05
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 26,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            62,
            60,
            60,
            56,
            56
        ],
        "universityID": 38
    },
    {
        "id": 309,
        "entryGrades": [
            5.44,
            5.52,
            5.54,
            5.69,
            5.83
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 26,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            66,
            69,
            67,
            74,
            67
        ],
        "universityID": 38
    },
    {
        "id": 310,
        "entryGrades": [
            6.87,
            6.65,
            6.55,
            6.6,
            6.63
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 24,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            54,
            55,
            47,
            50,
            60
        ],
        "universityID": 38
    },
    {
        "id": 311,
        "entryGrades": [
            8.04,
            7.95,
            7.93,
            7.77,
            7.76
        ],
        "exchangeStudents": 5,
        "languageID": 3,
        "levelID": 3,
        "localStudents": 19,
        "name": "Medicin i samh\u00e4llet",
        "subjectID": 3,
        "successRate": [
            49,
            49,
            50,
            55,
            55
        ],
        "universityID": 38
    },
    {
        "id": 312,
        "entryGrades": [
            6.9,
            6.8,
            6.8,
            7.08,
            7.05
        ],
        "exchangeStudents": 4,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 12,
        "name": "Avancerade studier inom Medicin",
        "subjectID": 3,
        "successRate": [
            57,
            58,
            55,
            58,
            64
        ],
        "universityID": 38
    },
    {
        "id": 313,
        "entryGrades": [
            6.73,
            6.7,
            6.59,
            6.49,
            6.45
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 12,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            65,
            60,
            58,
            58,
            57
        ],
        "universityID": 38
    },
    {
        "id": 314,
        "entryGrades": [
            6.56,
            6.51,
            6.48,
            6.36,
            6.33
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 1,
        "localStudents": 21,
        "name": "Medicin i historien",
        "subjectID": 3,
        "successRate": [
            41,
            43,
            46,
            48,
            36
        ],
        "universityID": 39
    },
    {
        "id": 315,
        "entryGrades": [
            6.96,
            7.21,
            7.28,
            7.08,
            7.18
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 1,
        "localStudents": 17,
        "name": "Medicin i 2000-talet",
        "subjectID": 3,
        "successRate": [
            40,
            40,
            42,
            40,
            42
        ],
        "universityID": 39
    },
    {
        "id": 316,
        "entryGrades": [
            6.22,
            6.27,
            6.25,
            6.05,
            6.38
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 17,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            62,
            68,
            64,
            63,
            67
        ],
        "universityID": 39
    },
    {
        "id": 317,
        "entryGrades": [
            5.58,
            5.76,
            5.55,
            5.86,
            5.77
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 29,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            64,
            64,
            61,
            60,
            58
        ],
        "universityID": 39
    },
    {
        "id": 318,
        "entryGrades": [
            7.14,
            6.94,
            6.94,
            6.89,
            6.76
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 23,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            64,
            61,
            59,
            58,
            56
        ],
        "universityID": 39
    },
    {
        "id": 319,
        "entryGrades": [
            8.43,
            8.69,
            8.7,
            8.35,
            8.35
        ],
        "exchangeStudents": 4,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 24,
        "name": "Design i 2000-talet",
        "subjectID": 6,
        "successRate": [
            50,
            45,
            58,
            54,
            47
        ],
        "universityID": 39
    },
    {
        "id": 320,
        "entryGrades": [
            7.65,
            7.53,
            7.44,
            7.29,
            6.98
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 26,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            53,
            51,
            53,
            58,
            54
        ],
        "universityID": 39
    },
    {
        "id": 321,
        "entryGrades": [
            6.35,
            6.48,
            6.65,
            6.85,
            6.88
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 17,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            61,
            60,
            57,
            64,
            58
        ],
        "universityID": 39
    },
    {
        "id": 322,
        "entryGrades": [
            5.9,
            6.18,
            5.77,
            5.68,
            6.02
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 17,
        "name": "Design och h\u00e5llbarhet",
        "subjectID": 6,
        "successRate": [
            58,
            57,
            55,
            50,
            50
        ],
        "universityID": 39
    },
    {
        "id": 323,
        "entryGrades": [
            7.35,
            7.39,
            7.44,
            7.55,
            7.75
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 1,
        "localStudents": 32,
        "name": "Teknik i samh\u00e4llet",
        "subjectID": 1,
        "successRate": [
            52,
            57,
            57,
            61,
            62
        ],
        "universityID": 39
    },
    {
        "id": 324,
        "entryGrades": [
            5.52,
            5.65,
            5.76,
            5.86,
            5.97
        ],
        "exchangeStudents": 4,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 13,
        "name": "Avancerade studier inom Juridik",
        "subjectID": 2,
        "successRate": [
            56,
            57,
            58,
            58,
            60
        ],
        "universityID": 40
    },
    {
        "id": 325,
        "entryGrades": [
            6.45,
            6.47,
            6.55,
            6.72,
            6.74
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            63,
            57,
            56,
            56,
            53
        ],
        "universityID": 40
    },
    {
        "id": 326,
        "entryGrades": [
            7.78,
            7.89,
            7.71,
            7.71,
            7.65
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 2,
        "localStudents": 19,
        "name": "Avancerade studier inom Matematik",
        "subjectID": 0,
        "successRate": [
            68,
            62,
            60,
            59,
            57
        ],
        "universityID": 40
    },
    {
        "id": 327,
        "entryGrades": [
            8.23,
            8.32,
            8.32,
            8.36,
            8.48
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            49,
            51,
            46,
            47,
            49
        ],
        "universityID": 40
    },
    {
        "id": 328,
        "entryGrades": [
            5.52,
            5.26,
            5.1,
            5.51,
            5.89
        ],
        "exchangeStudents": 4,
        "languageID": 3,
        "levelID": 3,
        "localStudents": 21,
        "name": "Matematik i historien",
        "subjectID": 0,
        "successRate": [
            45,
            47,
            48,
            51,
            51
        ],
        "universityID": 40
    },
    {
        "id": 329,
        "entryGrades": [
            7.86,
            7.81,
            7.77,
            7.68,
            7.51
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 31,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            51,
            53,
            53,
            55,
            60
        ],
        "universityID": 41
    },
    {
        "id": 330,
        "entryGrades": [
            6.73,
            6.62,
            6.55,
            6.52,
            6.31
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 22,
        "name": "The Ontology of Human Science",
        "subjectID": 5,
        "successRate": [
            58,
            53,
            52,
            51,
            48
        ],
        "universityID": 41
    },
    {
        "id": 331,
        "entryGrades": [
            6.11,
            6.22,
            6.35,
            6.4,
            6.42
        ],
        "exchangeStudents": 6,
        "languageID": 3,
        "levelID": 3,
        "localStudents": 18,
        "name": "Avancerade studier inom Medicin",
        "subjectID": 3,
        "successRate": [
            69,
            68,
            71,
            66,
            72
        ],
        "universityID": 41
    },
    {
        "id": 332,
        "entryGrades": [
            6.14,
            6.05,
            6.04,
            5.97,
            5.94
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            54,
            56,
            58,
            55,
            52
        ],
        "universityID": 41
    },
    {
        "id": 333,
        "entryGrades": [
            7.6,
            7.8,
            7.9,
            7.94,
            8.06
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 25,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            40,
            45,
            38,
            39,
            46
        ],
        "universityID": 42
    },
    {
        "id": 334,
        "entryGrades": [
            7.55,
            7.49,
            7.48,
            7.31,
            7.31
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 30,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            74,
            70,
            69,
            63,
            62
        ],
        "universityID": 42
    },
    {
        "id": 335,
        "entryGrades": [
            6.72,
            6.67,
            6.89,
            6.86,
            6.69
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 32,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            41,
            42,
            43,
            43,
            44
        ],
        "universityID": 42
    },
    {
        "id": 336,
        "entryGrades": [
            8.14,
            8.29,
            8.48,
            8.38,
            8.09
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 19,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            53,
            58,
            51,
            52,
            55
        ],
        "universityID": 42
    },
    {
        "id": 337,
        "entryGrades": [
            7.46,
            7.5,
            7.53,
            7.63,
            7.29
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 17,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            67,
            63,
            72,
            66,
            70
        ],
        "universityID": 42
    },
    {
        "id": 338,
        "entryGrades": [
            8.64,
            8.61,
            8.45,
            8.38,
            8.23
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 29,
        "name": "Medicina aplicadas",
        "subjectID": 3,
        "successRate": [
            58,
            53,
            52,
            49,
            47
        ],
        "universityID": 43
    },
    {
        "id": 339,
        "entryGrades": [
            5.77,
            5.75,
            5.6,
            5.55,
            5.32
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 24,
        "name": "Medicina y sostenibilidad",
        "subjectID": 3,
        "successRate": [
            49,
            53,
            55,
            46,
            53
        ],
        "universityID": 43
    },
    {
        "id": 340,
        "entryGrades": [
            6.4,
            6.15,
            6.15,
            5.95,
            5.74
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 21,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            76,
            76,
            74,
            69,
            67
        ],
        "universityID": 43
    },
    {
        "id": 341,
        "entryGrades": [
            5.37,
            5.42,
            5.45,
            5.6,
            5.83
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            66,
            66,
            67,
            71
        ],
        "universityID": 43
    },
    {
        "id": 342,
        "entryGrades": [
            6.79,
            6.92,
            7.01,
            7.2,
            7.33
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 21,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            59,
            57,
            56,
            55,
            50
        ],
        "universityID": 44
    },
    {
        "id": 343,
        "entryGrades": [
            7.27,
            7.29,
            7.33,
            7.34,
            7.48
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 18,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            66,
            63,
            66,
            64,
            63
        ],
        "universityID": 44
    },
    {
        "id": 344,
        "entryGrades": [
            6.54,
            6.3,
            6.19,
            6.16,
            6.09
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 22,
        "name": "Derecho y realidad virtual",
        "subjectID": 2,
        "successRate": [
            51,
            59,
            59,
            61,
            63
        ],
        "universityID": 44
    },
    {
        "id": 345,
        "entryGrades": [
            8.09,
            7.89,
            8.36,
            8.43,
            8.31
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 17,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            55,
            63,
            51,
            48,
            58
        ],
        "universityID": 44
    },
    {
        "id": 346,
        "entryGrades": [
            6.54,
            6.65,
            6.77,
            6.83,
            7.17
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 21,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            39,
            39,
            42,
            46,
            54
        ],
        "universityID": 44
    },
    {
        "id": 347,
        "entryGrades": [
            6.36,
            6.37,
            6.4,
            6.6,
            6.61
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 24,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            56,
            53,
            50,
            49,
            48
        ],
        "universityID": 44
    },
    {
        "id": 348,
        "entryGrades": [
            6.16,
            6.29,
            6.36,
            6.44,
            6.51
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 33,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            62,
            64,
            69,
            70,
            72
        ],
        "universityID": 45
    },
    {
        "id": 349,
        "entryGrades": [
            6.83,
            6.52,
            6.4,
            6.39,
            6.21
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 19,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            45,
            44,
            43,
            43,
            40
        ],
        "universityID": 45
    },
    {
        "id": 350,
        "entryGrades": [
            8.11,
            8.37,
            8.39,
            8.43,
            8.61
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 25,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            40,
            45,
            47,
            50,
            54
        ],
        "universityID": 45
    },
    {
        "id": 351,
        "entryGrades": [
            6.17,
            6.1,
            6.1,
            5.94,
            5.73
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 33,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            62,
            70,
            58,
            67,
            58
        ],
        "universityID": 45
    },
    {
        "id": 352,
        "entryGrades": [
            7.49,
            7.18,
            7.04,
            6.96,
            6.75
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 27,
        "name": "Human Engineering",
        "subjectID": 1,
        "successRate": [
            40,
            42,
            45,
            46,
            49
        ],
        "universityID": 45
    },
    {
        "id": 353,
        "entryGrades": [
            7.55,
            7.49,
            7.3,
            7.2,
            7.12
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 12,
        "name": "Medicine and Virtual Reality",
        "subjectID": 3,
        "successRate": [
            68,
            65,
            67,
            63,
            69
        ],
        "universityID": 45
    },
    {
        "id": 354,
        "entryGrades": [
            8.33,
            8.1,
            8.07,
            7.77,
            7.67
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 31,
        "name": "Filosof\u00eda y sostenibilidad",
        "subjectID": 5,
        "successRate": [
            39,
            40,
            43,
            45,
            48
        ],
        "universityID": 46
    },
    {
        "id": 355,
        "entryGrades": [
            8.21,
            8.14,
            8.06,
            8.05,
            7.88
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            62,
            60,
            60,
            58,
            57
        ],
        "universityID": 46
    },
    {
        "id": 356,
        "entryGrades": [
            7.13,
            7.11,
            7.09,
            6.78,
            6.5
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 32,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            59,
            57,
            61,
            65,
            57
        ],
        "universityID": 46
    },
    {
        "id": 357,
        "entryGrades": [
            5.8,
            5.74,
            5.67,
            5.36,
            5.31
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 30,
        "name": "Filosof\u00eda aplicadas",
        "subjectID": 5,
        "successRate": [
            73,
            73,
            68,
            66,
            59
        ],
        "universityID": 46
    },
    {
        "id": 358,
        "entryGrades": [
            8.66,
            8.6,
            8.52,
            8.49,
            8.39
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 14,
        "name": "Estudios superiores de Ontología",
        "subjectID": 5,
        "successRate": [
            56,
            52,
            50,
            49,
            44
        ],
        "universityID": 46
    },
    {
        "id": 359,
        "entryGrades": [
            6.85,
            7.03,
            6.84,
            6.95,
            6.9
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            52,
            50,
            48,
            46,
            45
        ],
        "universityID": 46
    },
    {
        "id": 360,
        "entryGrades": [
            8.4,
            8.67,
            8.69,
            8.1,
            8.27
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 15,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            63,
            62,
            60,
            59,
            59
        ],
        "universityID": 46
    },
    {
        "id": 361,
        "entryGrades": [
            7.21,
            7.26,
            7.32,
            7.55,
            7.75
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 26,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            67,
            64,
            62,
            60,
            53
        ],
        "universityID": 46
    },
    {
        "id": 362,
        "entryGrades": [
            7.67,
            7.59,
            7.6,
            7.43,
            7.86
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 33,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            63,
            66,
            69,
            71,
            72
        ],
        "universityID": 47
    },
    {
        "id": 363,
        "entryGrades": [
            6.84,
            6.78,
            6.61,
            6.6,
            6.58
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 18,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            57,
            53,
            52,
            52,
            57
        ],
        "universityID": 47
    },
    {
        "id": 364,
        "entryGrades": [
            6.98,
            7.12,
            6.85,
            6.79,
            7.02
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 23,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            53,
            52,
            52,
            45,
            40
        ],
        "universityID": 47
    },
    {
        "id": 365,
        "entryGrades": [
            7.64,
            7.63,
            7.49,
            7.18,
            7.05
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 22,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            64,
            64,
            57,
            64,
            67
        ],
        "universityID": 47
    },
    {
        "id": 366,
        "entryGrades": [
            8.42,
            8.15,
            8.24,
            8.42,
            8.53
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 32,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            40,
            41,
            43,
            47,
            47
        ],
        "universityID": 47
    },
    {
        "id": 367,
        "entryGrades": [
            7.6,
            7.58,
            7.5,
            7.41,
            7.33
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 22,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            54,
            45,
            53,
            55,
            53
        ],
        "universityID": 47
    },
    {
        "id": 368,
        "entryGrades": [
            8.59,
            8.21,
            8.14,
            8.12,
            8.04
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 18,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            65,
            67,
            68,
            68,
            69
        ],
        "universityID": 48
    },
    {
        "id": 369,
        "entryGrades": [
            8.23,
            8.43,
            8.47,
            8.45,
            8.62
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 21,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            59,
            57,
            53,
            53,
            51
        ],
        "universityID": 48
    },
    {
        "id": 370,
        "entryGrades": [
            7.84,
            7.85,
            7.9,
            7.99,
            8.16
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 16,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            45,
            46,
            48,
            53
        ],
        "universityID": 48
    },
    {
        "id": 371,
        "entryGrades": [
            6.5,
            6.72,
            6.57,
            6.8,
            6.33
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 35,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            46,
            50,
            48,
            48,
            43
        ],
        "universityID": 48
    },
    {
        "id": 372,
        "entryGrades": [
            6.63,
            6.82,
            6.87,
            7,
            7.1
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 28,
        "name": "Matem\u00e1ticas y sociedad",
        "subjectID": 0,
        "successRate": [
            68,
            66,
            62,
            61,
            56
        ],
        "universityID": 48
    },
    {
        "id": 373,
        "entryGrades": [
            7.88,
            7.71,
            7.68,
            7.64,
            7.58
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 12,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            56,
            49,
            48,
            43,
            42
        ],
        "universityID": 48
    },
    {
        "id": 374,
        "entryGrades": [
            6.28,
            6.5,
            6.53,
            6.73,
            6.82
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 23,
        "name": "Mathematics in Society",
        "subjectID": 0,
        "successRate": [
            61,
            57,
            54,
            62,
            58
        ],
        "universityID": 49
    },
    {
        "id": 375,
        "entryGrades": [
            6.04,
            5.95,
            5.59,
            5.56,
            5.17
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            63,
            66,
            66,
            66,
            68
        ],
        "universityID": 49
    },
    {
        "id": 376,
        "entryGrades": [
            6.7,
            6.74,
            7,
            7.01,
            7.02
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 20,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            48,
            49,
            49,
            52,
            57
        ],
        "universityID": 49
    },
    {
        "id": 377,
        "entryGrades": [
            6.74,
            6.71,
            6.51,
            6.46,
            6.28
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 13,
        "name": "Matem\u00e1ticas y sostenibilidad",
        "subjectID": 0,
        "successRate": [
            48,
            49,
            53,
            55,
            57
        ],
        "universityID": 49
    },
    {
        "id": 378,
        "entryGrades": [
            6.25,
            6.2,
            6.43,
            6.45,
            6
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 29,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            59,
            62,
            65,
            67,
            72
        ],
        "universityID": 49
    },
    {
        "id": 379,
        "entryGrades": [
            6.39,
            6.74,
            6.75,
            6.86,
            7.14
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 17,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            61,
            63,
            66,
            68,
            71
        ],
        "universityID": 49
    },
    {
        "id": 380,
        "entryGrades": [
            6.58,
            6.22,
            6.21,
            6.13,
            5.9
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 15,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            54,
            55,
            57,
            59,
            59
        ],
        "universityID": 49
    },
    {
        "id": 381,
        "entryGrades": [
            6.99,
            7,
            6.97,
            7.21,
            7.23
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            46,
            45,
            43,
            43,
            42
        ],
        "universityID": 50
    },
    {
        "id": 382,
        "entryGrades": [
            8.15,
            7.99,
            7.77,
            7.77,
            7.4
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 32,
        "name": "Derecho aplicadas",
        "subjectID": 2,
        "successRate": [
            39,
            41,
            42,
            44,
            45
        ],
        "universityID": 50
    },
    {
        "id": 383,
        "entryGrades": [
            5.91,
            5.81,
            5.63,
            5.42,
            5.38
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 20,
        "name": "Matem\u00e1ticas y sociedad",
        "subjectID": 0,
        "successRate": [
            53,
            53,
            55,
            55,
            48
        ],
        "universityID": 50
    },
    {
        "id": 384,
        "entryGrades": [
            8.38,
            8.48,
            8.6,
            8.2,
            8.25
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 25,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            49,
            49,
            50,
            52,
            58
        ],
        "universityID": 50
    },
    {
        "id": 385,
        "entryGrades": [
            6.5,
            6.44,
            6.29,
            6.28,
            6.17
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 16,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            42,
            41,
            48,
            39,
            46
        ],
        "universityID": 50
    },
    {
        "id": 386,
        "entryGrades": [
            8.31,
            8.31,
            8.42,
            8.54,
            8.24
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            53,
            54,
            53,
            57,
            53
        ],
        "universityID": 50
    },
    {
        "id": 387,
        "entryGrades": [
            6.63,
            6.68,
            6.85,
            6.89,
            6.91
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 13,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            56,
            54,
            62,
            59,
            59
        ],
        "universityID": 50
    },
    {
        "id": 388,
        "entryGrades": [
            5.66,
            5.72,
            5.91,
            5.8,
            5.91
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 21,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            36,
            37,
            42,
            45,
            46
        ],
        "universityID": 50
    },
    {
        "id": 389,
        "entryGrades": [
            6.19,
            6.42,
            6.5,
            6.68,
            6.82
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 33,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            61,
            61,
            56,
            47,
            46
        ],
        "universityID": 50
    },
    {
        "id": 390,
        "entryGrades": [
            7.84,
            7.77,
            7.51,
            7.17,
            7.16
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Virtual Reality Mathematics",
        "subjectID": 0,
        "successRate": [
            60,
            58,
            56,
            55,
            55
        ],
        "universityID": 50
    },
    {
        "id": 391,
        "entryGrades": [
            6.88,
            6.72,
            7.1,
            7.11,
            6.88
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 15,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            58,
            64,
            54,
            61,
            50
        ],
        "universityID": 50
    },
    {
        "id": 392,
        "entryGrades": [
            8.49,
            8.47,
            8.36,
            8.28,
            8.24
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 15,
        "name": "Sociolog\u00eda y sostenibilidad",
        "subjectID": 4,
        "successRate": [
            62,
            59,
            61,
            61,
            69
        ],
        "universityID": 51
    },
    {
        "id": 393,
        "entryGrades": [
            6.21,
            6.04,
            6.53,
            6.65,
            6.67
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 30,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            49,
            44,
            44,
            44,
            40
        ],
        "universityID": 51
    },
    {
        "id": 394,
        "entryGrades": [
            6.02,
            5.84,
            5.81,
            5.79,
            5.77
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 31,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            48,
            52,
            53,
            52,
            57
        ],
        "universityID": 51
    },
    {
        "id": 395,
        "entryGrades": [
            7.02,
            7.37,
            7.4,
            7.41,
            7.8
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 35,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            57,
            54,
            51,
            51,
            49
        ],
        "universityID": 51
    },
    {
        "id": 396,
        "entryGrades": [
            6.72,
            6.55,
            6.79,
            6.59,
            6.5
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 14,
        "name": "Dise\u00f1o y realidad virtual",
        "subjectID": 6,
        "successRate": [
            58,
            64,
            59,
            56,
            50
        ],
        "universityID": 51
    },
    {
        "id": 397,
        "entryGrades": [
            5.77,
            5.9,
            5.75,
            5.51,
            5.57
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 27,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            46,
            42,
            42,
            40,
            33
        ],
        "universityID": 51
    },
    {
        "id": 398,
        "entryGrades": [
            5.73,
            5.63,
            5.97,
            5.41,
            5.35
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 22,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            58,
            61,
            62,
            63,
            64
        ],
        "universityID": 52
    },
    {
        "id": 399,
        "entryGrades": [
            6.28,
            6.31,
            6.37,
            6.7,
            7.01
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 30,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            40,
            40,
            40,
            46,
            45
        ],
        "universityID": 52
    },
    {
        "id": 400,
        "entryGrades": [
            7.39,
            7.42,
            7.48,
            7.56,
            7.72
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 30,
        "name": "Derecho aplicadas",
        "subjectID": 2,
        "successRate": [
            33,
            34,
            39,
            40,
            41
        ],
        "universityID": 52
    },
    {
        "id": 401,
        "entryGrades": [
            8.2,
            8.12,
            8.03,
            7.89,
            7.82
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 33,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            67,
            61,
            74,
            65,
            68
        ],
        "universityID": 52
    },
    {
        "id": 402,
        "entryGrades": [
            7.85,
            7.87,
            7.88,
            7.92,
            8.27
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 30,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            59,
            58,
            66,
            55,
            54
        ],
        "universityID": 52
    },
    {
        "id": 403,
        "entryGrades": [
            6.65,
            6.64,
            6.35,
            6.26,
            6.09
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 24,
        "name": "Ingenier\u00eda aplicadas",
        "subjectID": 1,
        "successRate": [
            52,
            52,
            45,
            50,
            53
        ],
        "universityID": 52
    },
    {
        "id": 404,
        "entryGrades": [
            6.33,
            6.44,
            6.53,
            6.95,
            6.99
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 16,
        "name": "Derecho Mercantil Avanzado",
        "subjectID": 2,
        "successRate": [
            49,
            50,
            54,
            61,
            61
        ],
        "universityID": 52
    },
    {
        "id": 405,
        "entryGrades": [
            8.01,
            7.9,
            7.86,
            7.72,
            7.48
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 14,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            61,
            56,
            60,
            64,
            57
        ],
        "universityID": 52
    },
    {
        "id": 406,
        "entryGrades": [
            7.68,
            7.57,
            7.56,
            7.54,
            7.45
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 32,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            41,
            42,
            40,
            40,
            40
        ],
        "universityID": 52
    },
    {
        "id": 407,
        "entryGrades": [
            5.57,
            5.88,
            5.92,
            5.97,
            6.05
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 32,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            34,
            37,
            38,
            40,
            43
        ],
        "universityID": 53
    },
    {
        "id": 408,
        "entryGrades": [
            7.16,
            7.18,
            7.26,
            7.38,
            7.71
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 13,
        "name": "Filosof\u00eda e historia",
        "subjectID": 5,
        "successRate": [
            53,
            52,
            49,
            47,
            45
        ],
        "universityID": 53
    },
    {
        "id": 409,
        "entryGrades": [
            8.17,
            8.03,
            7.85,
            7.84,
            7.62
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 34,
        "name": "Medicina aplicadas",
        "subjectID": 3,
        "successRate": [
            59,
            63,
            66,
            66,
            67
        ],
        "universityID": 53
    },
    {
        "id": 410,
        "entryGrades": [
            7.33,
            7.05,
            6.96,
            6.57,
            6.56
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 20,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            34,
            36,
            40,
            41,
            46
        ],
        "universityID": 53
    },
    {
        "id": 411,
        "entryGrades": [
            7.2,
            7.23,
            7.31,
            7.48,
            7.58
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 15,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            44,
            49,
            44,
            41,
            50
        ],
        "universityID": 53
    },
    {
        "id": 412,
        "entryGrades": [
            5.89,
            6.11,
            6.13,
            5.88,
            5.77
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 17,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            58,
            57,
            57,
            53,
            50
        ],
        "universityID": 53
    },
    {
        "id": 413,
        "entryGrades": [
            7.54,
            7.42,
            7.85,
            7.6,
            7.81
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 30,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            46,
            47,
            53,
            55,
            55
        ],
        "universityID": 53
    },
    {
        "id": 414,
        "entryGrades": [
            6.97,
            6.91,
            6.82,
            6.71,
            6.46
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 20,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            42,
            40,
            47,
            35,
            35
        ],
        "universityID": 53
    },
    {
        "id": 415,
        "entryGrades": [
            5.47,
            5.51,
            5.73,
            5.75,
            6.07
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 19,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            55,
            57,
            58,
            63,
            65
        ],
        "universityID": 53
    },
    {
        "id": 416,
        "entryGrades": [
            8.25,
            8.43,
            8.11,
            8.34,
            8.16
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 22,
        "name": "Dise\u00f1o en el siglo XXI",
        "subjectID": 6,
        "successRate": [
            59,
            61,
            58,
            66,
            63
        ],
        "universityID": 54
    },
    {
        "id": 417,
        "entryGrades": [
            6.72,
            6.69,
            6.64,
            6.6,
            6.46
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 35,
        "name": "Filosof\u00eda y realidad virtual",
        "subjectID": 5,
        "successRate": [
            40,
            44,
            46,
            36,
            44
        ],
        "universityID": 54
    },
    {
        "id": 418,
        "entryGrades": [
            8.11,
            8.08,
            7.72,
            7.53,
            7.24
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 12,
        "name": "Dise\u00f1o y sostenibilidad",
        "subjectID": 6,
        "successRate": [
            53,
            47,
            49,
            55,
            57
        ],
        "universityID": 54
    },
    {
        "id": 419,
        "entryGrades": [
            6.37,
            6.12,
            6.22,
            6.19,
            6.56
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 25,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            44,
            39,
            49,
            50,
            38
        ],
        "universityID": 54
    },
    {
        "id": 420,
        "entryGrades": [
            7.86,
            7.87,
            8,
            8.02,
            8.1
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 22,
        "name": "Design and Virtual Reality",
        "subjectID": 6,
        "successRate": [
            41,
            44,
            43,
            35,
            41
        ],
        "universityID": 54
    },
    {
        "id": 421,
        "entryGrades": [
            6.23,
            6.19,
            6.17,
            6.11,
            6.02
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 23,
        "name": "Ingenier\u00eda y sostenibilidad",
        "subjectID": 1,
        "successRate": [
            41,
            41,
            42,
            39,
            35
        ],
        "universityID": 54
    },
    {
        "id": 422,
        "entryGrades": [
            6.14,
            6.06,
            5.98,
            5.97,
            5.77
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            59,
            60,
            61,
            66,
            67
        ],
        "universityID": 54
    },
    {
        "id": 423,
        "entryGrades": [
            5.93,
            5.75,
            5.61,
            5.54,
            5.18
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 13,
        "name": "Mathematics in Society",
        "subjectID": 0,
        "successRate": [
            66,
            68,
            73,
            73,
            74
        ],
        "universityID": 54
    },
    {
        "id": 424,
        "entryGrades": [
            6.7,
            6.88,
            6.95,
            6.48,
            6.45
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 35,
        "name": "Derecho y sostenibilidad",
        "subjectID": 2,
        "successRate": [
            64,
            64,
            64,
            61,
            60
        ],
        "universityID": 54
    },
    {
        "id": 425,
        "entryGrades": [
            7.12,
            6.84,
            7.04,
            7.2,
            7.25
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 25,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            47,
            49,
            51,
            54,
            55
        ],
        "universityID": 54
    },
    {
        "id": 426,
        "entryGrades": [
            6.83,
            6.92,
            7.19,
            7.3,
            7.48
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            71,
            67,
            62,
            59,
            57
        ],
        "universityID": 55
    },
    {
        "id": 427,
        "entryGrades": [
            6.5,
            6.49,
            6.7,
            6.62,
            6.65
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 17,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            40,
            43,
            44,
            49,
            51
        ],
        "universityID": 55
    },
    {
        "id": 428,
        "entryGrades": [
            8.46,
            8.26,
            8.2,
            8.67,
            8.55
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            63,
            61,
            58,
            52
        ],
        "universityID": 55
    },
    {
        "id": 429,
        "entryGrades": [
            5.89,
            6.19,
            6.24,
            5.65,
            5.87
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 31,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            54,
            58,
            53,
            50,
            47
        ],
        "universityID": 55
    },
    {
        "id": 430,
        "entryGrades": [
            6.04,
            6.1,
            6.22,
            6.42,
            6.64
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 16,
        "name": "Derecho y sostenibilidad",
        "subjectID": 2,
        "successRate": [
            47,
            46,
            50,
            52,
            51
        ],
        "universityID": 55
    },
    {
        "id": 431,
        "entryGrades": [
            5.62,
            5.39,
            5.34,
            5.64,
            5.3
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            67,
            75,
            67,
            65,
            66
        ],
        "universityID": 55
    },
    {
        "id": 432,
        "entryGrades": [
            7.18,
            7.35,
            7.45,
            7.48,
            7.5
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 30,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            59,
            59,
            56,
            52,
            52
        ],
        "universityID": 56
    },
    {
        "id": 433,
        "entryGrades": [
            6.82,
            6.82,
            6.72,
            7.01,
            6.67
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 32,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            51,
            46,
            45,
            43,
            40
        ],
        "universityID": 56
    },
    {
        "id": 434,
        "entryGrades": [
            8.14,
            8.12,
            8.12,
            8.08,
            8.07
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 21,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            42,
            37,
            46,
            46,
            42
        ],
        "universityID": 56
    },
    {
        "id": 435,
        "entryGrades": [
            6.62,
            6.65,
            6.79,
            6.85,
            6.98
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 28,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            59,
            57,
            55,
            53,
            58
        ],
        "universityID": 56
    },
    {
        "id": 436,
        "entryGrades": [
            7.75,
            7.6,
            7.67,
            7.63,
            7.86
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 35,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            52,
            51,
            49,
            43,
            42
        ],
        "universityID": 56
    },
    {
        "id": 437,
        "entryGrades": [
            6.36,
            6.24,
            6.15,
            6.04,
            5.9
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 30,
        "name": "Matem\u00e1ticas y sostenibilidad",
        "subjectID": 0,
        "successRate": [
            69,
            69,
            67,
            65,
            60
        ],
        "universityID": 57
    },
    {
        "id": 438,
        "entryGrades": [
            6.63,
            6.65,
            6.81,
            6.9,
            6.92
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 31,
        "name": "Medicina aplicadas",
        "subjectID": 3,
        "successRate": [
            39,
            40,
            42,
            43,
            46
        ],
        "universityID": 57
    },
    {
        "id": 439,
        "entryGrades": [
            7.23,
            7.23,
            7.35,
            7.42,
            7.45
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 12,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            50,
            56,
            51,
            51,
            53
        ],
        "universityID": 57
    },
    {
        "id": 440,
        "entryGrades": [
            5.34,
            5.44,
            5.61,
            5.63,
            5.96
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 25,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            42,
            43,
            41,
            41,
            41
        ],
        "universityID": 57
    },
    {
        "id": 441,
        "entryGrades": [
            5.45,
            5.55,
            5.56,
            5.91,
            5.92
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 16,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            49,
            50,
            53,
            50,
            49
        ],
        "universityID": 57
    },
    {
        "id": 442,
        "entryGrades": [
            7.29,
            7.21,
            7.11,
            7.07,
            6.92
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 14,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            35,
            41,
            43,
            43,
            50
        ],
        "universityID": 57
    },
    {
        "id": 443,
        "entryGrades": [
            7.89,
            8.05,
            8.14,
            8.17,
            8.48
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 35,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            69,
            69,
            65,
            64,
            56
        ],
        "universityID": 57
    },
    {
        "id": 444,
        "entryGrades": [
            8.44,
            8.3,
            8.65,
            8.27,
            8.57
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 31,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            37,
            37,
            40,
            43,
            45
        ],
        "universityID": 58
    },
    {
        "id": 445,
        "entryGrades": [
            5.91,
            5.83,
            5.8,
            5.78,
            5.61
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 32,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            71,
            64,
            64,
            61,
            61
        ],
        "universityID": 58
    },
    {
        "id": 446,
        "entryGrades": [
            7.65,
            7.75,
            7.77,
            7.3,
            7.62
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 19,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            58,
            58,
            59,
            60,
            66
        ],
        "universityID": 58
    },
    {
        "id": 447,
        "entryGrades": [
            5.89,
            5.77,
            5.51,
            5.23,
            5.23
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 17,
        "name": "Dise\u00f1o y sociedad",
        "subjectID": 6,
        "successRate": [
            56,
            52,
            50,
            50,
            50
        ],
        "universityID": 58
    },
    {
        "id": 448,
        "entryGrades": [
            7.4,
            7.32,
            7.19,
            7.19,
            6.83
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 14,
        "name": "Matem\u00e1ticas e historia",
        "subjectID": 0,
        "successRate": [
            55,
            64,
            46,
            47,
            53
        ],
        "universityID": 58
    },
    {
        "id": 449,
        "entryGrades": [
            7.3,
            7.43,
            7.44,
            7.53,
            7.55
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 29,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            54,
            54,
            55,
            56,
            59
        ],
        "universityID": 59
    },
    {
        "id": 450,
        "entryGrades": [
            5.79,
            5.99,
            5.59,
            5.76,
            5.97
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            73,
            69,
            65,
            62,
            58
        ],
        "universityID": 59
    },
    {
        "id": 451,
        "entryGrades": [
            7.68,
            7.62,
            7.54,
            7.41,
            7.4
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 17,
        "name": "Medicina y sostenibilidad",
        "subjectID": 3,
        "successRate": [
            59,
            66,
            55,
            64,
            63
        ],
        "universityID": 59
    },
    {
        "id": 452,
        "entryGrades": [
            7.77,
            7.92,
            7.47,
            7.45,
            7.94
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 14,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            49,
            54,
            52,
            48,
            51
        ],
        "universityID": 59
    },
    {
        "id": 453,
        "entryGrades": [
            6.88,
            6.89,
            7,
            7.02,
            7.04
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 12,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            65,
            63,
            62,
            62,
            59
        ],
        "universityID": 59
    },
    {
        "id": 454,
        "entryGrades": [
            6.32,
            6.38,
            6.49,
            6.56,
            6.58
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 23,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            45,
            48,
            51,
            51,
            52
        ],
        "universityID": 59
    },
    {
        "id": 455,
        "entryGrades": [
            7.24,
            7.22,
            7.05,
            7.02,
            6.73
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 25,
        "name": "Medicina en el siglo XXI",
        "subjectID": 3,
        "successRate": [
            52,
            58,
            61,
            68,
            70
        ],
        "universityID": 59
    },
    {
        "id": 456,
        "entryGrades": [
            5.97,
            6.03,
            5.98,
            6.07,
            5.86
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 20,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            60,
            57,
            61,
            60,
            55
        ],
        "universityID": 59
    },
    {
        "id": 457,
        "entryGrades": [
            8.68,
            8.4,
            8.28,
            8.23,
            8.15
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 27,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            46,
            48,
            48,
            51,
            58
        ],
        "universityID": 60
    },
    {
        "id": 458,
        "entryGrades": [
            6.74,
            6.91,
            6.52,
            6.49,
            7.01
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 18,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            44,
            36,
            47,
            51,
            39
        ],
        "universityID": 60
    },
    {
        "id": 459,
        "entryGrades": [
            7.25,
            7.22,
            7.14,
            6.97,
            6.94
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 31,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            54,
            51,
            49,
            45,
            45
        ],
        "universityID": 60
    },
    {
        "id": 460,
        "entryGrades": [
            6.73,
            6.76,
            6.65,
            6.87,
            6.86
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 34,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            62,
            62,
            63,
            65,
            74
        ],
        "universityID": 60
    },
    {
        "id": 461,
        "entryGrades": [
            8.57,
            8.45,
            8.45,
            8.3,
            8.24
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 21,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            40,
            43,
            41,
            40,
            43
        ],
        "universityID": 60
    },
    {
        "id": 462,
        "entryGrades": [
            5.8,
            5.86,
            5.98,
            6,
            6.16
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 19,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            67,
            73,
            63,
            60,
            66
        ],
        "universityID": 60
    },
    {
        "id": 463,
        "entryGrades": [
            6.04,
            5.99,
            5.81,
            5.73,
            5.7
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 27,
        "name": "Sociolog\u00eda y realidad virtual",
        "subjectID": 4,
        "successRate": [
            42,
            43,
            46,
            47,
            51
        ],
        "universityID": 60
    },
    {
        "id": 464,
        "entryGrades": [
            7.96,
            8.1,
            7.94,
            8.01,
            7.91
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 24,
        "name": "Matem\u00e1ticas aplicadas",
        "subjectID": 0,
        "successRate": [
            58,
            57,
            58,
            58,
            65
        ],
        "universityID": 60
    },
    {
        "id": 465,
        "entryGrades": [
            6.1,
            5.87,
            5.79,
            6.07,
            6.38
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 32,
        "name": "Principios Básicos de Álgebra",
        "subjectID": 0,
        "successRate": [
            49,
            46,
            44,
            43,
            43
        ],
        "universityID": 60
    },
    {
        "id": 466,
        "entryGrades": [
            8.47,
            8.61,
            8.49,
            8.45,
            8.41
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 27,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            57,
            57,
            58,
            61,
            62
        ],
        "universityID": 60
    },
    {
        "id": 467,
        "entryGrades": [
            7.14,
            6.89,
            6.83,
            6.6,
            6.58
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 13,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            73,
            73,
            69,
            66,
            66
        ],
        "universityID": 61
    },
    {
        "id": 468,
        "entryGrades": [
            7.2,
            7.17,
            7.22,
            7.34,
            7.37
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 16,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            53,
            60,
            60,
            61,
            63
        ],
        "universityID": 61
    },
    {
        "id": 469,
        "entryGrades": [
            6.46,
            6.64,
            6.64,
            6.04,
            6.63
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 27,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            49,
            42,
            54,
            56,
            40
        ],
        "universityID": 61
    },
    {
        "id": 470,
        "entryGrades": [
            6.75,
            7.09,
            6.53,
            6.69,
            6.42
        ],
        "exchangeStudents": 4,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 18,
        "name": "Derecho y realidad virtual",
        "subjectID": 2,
        "successRate": [
            48,
            49,
            49,
            49,
            54
        ],
        "universityID": 61
    },
    {
        "id": 471,
        "entryGrades": [
            6.78,
            6.66,
            6.6,
            6.5,
            7.08
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 33,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            55,
            56,
            58,
            59,
            65
        ],
        "universityID": 61
    },
    {
        "id": 472,
        "entryGrades": [
            6.77,
            6.52,
            6.31,
            6.05,
            5.88
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 1,
        "localStudents": 27,
        "name": "Matem\u00e1ticas aplicadas",
        "subjectID": 0,
        "successRate": [
            56,
            61,
            50,
            50,
            55
        ],
        "universityID": 61
    },
    {
        "id": 473,
        "entryGrades": [
            6.53,
            6.45,
            6.31,
            6.32,
            6.69
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Medicine and Virtual Reality",
        "subjectID": 3,
        "successRate": [
            45,
            44,
            44,
            39,
            37
        ],
        "universityID": 61
    },
    {
        "id": 474,
        "entryGrades": [
            7.99,
            7.92,
            7.83,
            7.76,
            7.74
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 25,
        "name": "Historia del Diseño",
        "subjectID": 6,
        "successRate": [
            68,
            66,
            64,
            62,
            57
        ],
        "universityID": 61
    },
    {
        "id": 475,
        "entryGrades": [
            6.69,
            6.87,
            6.89,
            7.02,
            7.08
        ],
        "exchangeStudents": 5,
        "languageID": 0,
        "levelID": 2,
        "localStudents": 27,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            55,
            59,
            62,
            66,
            68
        ],
        "universityID": 61
    },
    {
        "id": 476,
        "entryGrades": [
            5.96,
            5.99,
            6.02,
            6.09,
            6.09
        ],
        "exchangeStudents": 6,
        "languageID": 0,
        "levelID": 3,
        "localStudents": 13,
        "name": "Medicina e historia",
        "subjectID": 3,
        "successRate": [
            45,
            47,
            48,
            48,
            50
        ],
        "universityID": 61
    },
    {
        "id": 477,
        "entryGrades": [
            7.2,
            6.99,
            6.81,
            6.65,
            6.37
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 14,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            74,
            69,
            67,
            66,
            66
        ],
        "universityID": 61
    },
    {
        "id": 478,
        "entryGrades": [
            5.52,
            5.57,
            5.34,
            5.44,
            5.61
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 24,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            57,
            58,
            60,
            62,
            69
        ],
        "universityID": 61
    },
    {
        "id": 479,
        "entryGrades": [
            8.33,
            8.27,
            8.25,
            8.19,
            8.05
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 30,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            40,
            40,
            48,
            43,
            36
        ],
        "universityID": 62
    },
    {
        "id": 480,
        "entryGrades": [
            6.75,
            6.9,
            6.98,
            7.01,
            7.1
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 26,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            43,
            46,
            46,
            46
        ],
        "universityID": 62
    },
    {
        "id": 481,
        "entryGrades": [
            8.18,
            8.28,
            8.31,
            8.34,
            8.46
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            56,
            59,
            59,
            63,
            64
        ],
        "universityID": 62
    },
    {
        "id": 482,
        "entryGrades": [
            8.43,
            8.32,
            8.33,
            8.52,
            8.26
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 18,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            56,
            49,
            47,
            46,
            42
        ],
        "universityID": 62
    },
    {
        "id": 483,
        "entryGrades": [
            6.46,
            6.38,
            6.25,
            6.22,
            6
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 31,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            43,
            44,
            43,
            40,
            42
        ],
        "universityID": 63
    },
    {
        "id": 484,
        "entryGrades": [
            6.01,
            6.41,
            6.43,
            6.49,
            6.77
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Human Engineering",
        "subjectID": 1,
        "successRate": [
            44,
            44,
            44,
            40,
            43
        ],
        "universityID": 63
    },
    {
        "id": 485,
        "entryGrades": [
            6.67,
            6.54,
            6.53,
            6.4,
            6.13
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 14,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            53,
            55,
            59,
            60,
            63
        ],
        "universityID": 63
    },
    {
        "id": 486,
        "entryGrades": [
            6.69,
            6.66,
            6.62,
            6.49,
            6.41
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 19,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            63,
            61,
            61,
            64,
            64
        ],
        "universityID": 63
    },
    {
        "id": 487,
        "entryGrades": [
            7.55,
            7.44,
            7.43,
            7.42,
            7.19
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 33,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            47,
            51,
            51,
            45,
            54
        ],
        "universityID": 63
    },
    {
        "id": 488,
        "entryGrades": [
            7.4,
            7.49,
            7.57,
            7.75,
            7.78
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 12,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            51,
            50,
            50,
            49,
            44
        ],
        "universityID": 64
    },
    {
        "id": 489,
        "entryGrades": [
            6.42,
            6.53,
            6.38,
            6.21,
            6.51
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 14,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            60,
            56,
            68,
            60,
            66
        ],
        "universityID": 64
    },
    {
        "id": 490,
        "entryGrades": [
            7.49,
            7.63,
            7.63,
            7.73,
            7.87
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 22,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            63,
            62,
            60,
            57,
            52
        ],
        "universityID": 64
    },
    {
        "id": 491,
        "entryGrades": [
            7.43,
            7.24,
            7.42,
            7.66,
            7.44
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 3,
        "localStudents": 29,
        "name": "Design and Virtual Reality",
        "subjectID": 6,
        "successRate": [
            59,
            54,
            58,
            62,
            58
        ],
        "universityID": 64
    },
    {
        "id": 492,
        "entryGrades": [
            7.89,
            7.99,
            7.99,
            8.01,
            8.06
        ],
        "exchangeStudents": 6,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 23,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            72,
            69,
            69,
            66,
            64
        ],
        "universityID": 65
    },
    {
        "id": 493,
        "entryGrades": [
            6.59,
            6.5,
            6.44,
            6.39,
            6.39
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 15,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            54,
            52,
            48,
            47,
            40
        ],
        "universityID": 65
    },
    {
        "id": 494,
        "entryGrades": [
            6.79,
            6.55,
            6.51,
            6.36,
            6.16
        ],
        "exchangeStudents": 4,
        "languageID": 1,
        "levelID": 2,
        "localStudents": 17,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            59,
            59,
            56,
            51,
            50
        ],
        "universityID": 65
    },
    {
        "id": 495,
        "entryGrades": [
            7.72,
            7.71,
            7.55,
            8.04,
            7.52
        ],
        "exchangeStudents": 5,
        "languageID": 1,
        "levelID": 1,
        "localStudents": 25,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            65,
            64,
            64,
            63,
            61
        ],
        "universityID": 65
    }
];
const SUBJECTS = [
    {
        "id": 0,
        "name": "Matematik"
    },
    {
        "id": 1,
        "name": "Teknik"
    },
    {
        "id": 2,
        "name": "Juridik"
    },
    {
        "id": 3,
        "name": "Medicin"
    },
    {
        "id": 4,
        "name": "Sociologi"
    },
    {
        "id": 5,
        "name": "Filosofi"
    },
    {
        "id": 6,
        "name": "Design"
    }
];
const LANGUAGES = [
    {
        "id": 0,
        "name": "Spanska",
        "flag": "spain.png"
    },
    {
        "id": 1,
        "name": "Engelska",
        "flag": "uk.png"
    },
    {
        "id": 2,
        "name": "Franska",
        "flag": "france.png"
    },
    {
        "id": 3,
        "name": "Svenska",
        "flag": "sweden.png"
    }
];
const LEVELS = [
    {
        "id": 1,
        "name": "Bachelor"
    },
    {
        "id": 2,
        "name": "Master"
    },
    {
        "id": 3,
        "name": "PhD Course"
    }
];

