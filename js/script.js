"use strict";

const countOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել վերջերս");

const DB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    genre: [],
    status: null,
    private: false
};

let i = 0;
while (i < 2) {
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
    i++;
}

if(DB.count < 10) {
    DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
} else if(DB.count >= 10 && DB.count < 30) {
    DB.status = "Դուք դասական ֆիլմ դիտող եք";
} else if(DB.count >= 30) {
    DB.status = "Դուք կինոման եք !";
} else {
    console.log("Տեղի է ունեցել ինչ-որ խնդիր");
}

console.log(DB);