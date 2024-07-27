"use strict";

let countOfFilms;
init();

function init() {
    countOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել վերջերս");
    while(countOfFilms == "" || countOfFilms == null || isNaN(countOfFilms)) {
        countOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել վերջերս");
    }
}

const DB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    genre: [],
    status: null,
    private: false
};

rememberAndCreateUserFilms();
detectUserPersonalLevel();
userFavoriteGenres();
checkDBPrivateStatus(DB.private);

function rememberAndCreateUserFilms() {
    for(let i = 0; i < 2; i++) {
        const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
        const filmRate = +prompt(`Ի՞նչքան եք գնահատում ${filmName} ֆիլմը`);

        if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
            DB.movies[filmName] = filmRate;
            console.log("Resolve");
        }
        else {
            console.log("Reject");
            i--;
        }
    }
}

function detectUserPersonalLevel() {
    if(DB.count < 10) {
        DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
    } else if(DB.count >= 10 && DB.count < 30) {
        DB.status = "Դուք դասական ֆիլմ դիտող եք";
    } else if(DB.count >= 30) {
        DB.status = "Դուք կինոման եք !";
    } else {
        console.log("Տեղի է ունեցել ինչ-որ խնդիր");
    }
}

function checkDBPrivateStatus(state) {
    state ? console.log("Sorry but DB isn't visible") : console.log(DB);
}

function userFavoriteGenres() {
    for(let i = 0; i < 3; i++) { 
        const filmGenre = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);
        DB.genre[i] = filmGenre;
    }
}