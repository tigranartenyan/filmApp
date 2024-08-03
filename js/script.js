"use strict";

const app = {
    count: 0,
    movies: {},
    actors: {},
    genre: [],
    status: null,
    private: false,
    init() {
        this.count = +prompt("Քանի՞ ֆիլմ եք դիտել վերջերս");
        while(this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Քանի՞ ֆիլմ եք դիտել վերջերս");
        }
    },
    rememberAndCreateUserFilms() {
        for(let i = 0; i < 2; i++) {
            const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
            const filmRate = +prompt(`Ի՞նչքան եք գնահատում ${filmName} ֆիլմը`);
    
            if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
                this.movies[filmName] = filmRate;
                console.log("Resolve");
            }
            else {
                console.log("Reject");
                i--;
            }
        }
    },
    userFavoriteGenres() {
        for(let i = 0; i < 2; i++) { 
            this.genre.push(prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`));
        }
    },
    detectUserPersonalLevel() {
        if(this.count < 10) {
            this.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
        } else if(this.count >= 10 && this.count < 30) {
            this.status = "Դուք դասական ֆիլմ դիտող եք";
        } else if(this.count >= 30) {
            this.status = "Դուք կինոման եք !";
        } else {
            console.log("Տեղի է ունեցել ինչ-որ խնդիր");
        }
    },
    checkappPrivateStatus(state) {
        state ? console.log("Sorry but app isn't visible") : console.log(app);
    },
    startApp() {
        this.init();
        this.rememberAndCreateUserFilms();
        this.userFavoriteGenres();
        this.detectUserPersonalLevel();
        this.checkappPrivateStatus(this.private);
    }
};

app.startApp();