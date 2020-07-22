let numberOfFilms;

function start () {
    numberOfFilms = +prompt('How many movies have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('one of the last movies?', ''),
              b = prompt('how much did you like it?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('cool dude');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('not many films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('medium amount of films');
    } else if (personalMovieDB.count >= 30) {
        console.log('a lot of films');
    } else {
        console.log('your mom gae');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`your favorite genre under the number ${i}`);
    }
}

writeYourGenres();