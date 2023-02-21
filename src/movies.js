// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsList = moviesArray.map(function (movie) {
        return movie.director
    }
    )
    return directorsList
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let stevenMovies = moviesArray.filter(function (movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
        return true
        }
        }
    )
    return stevenMovies.length
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let totalScore = moviesArray.reduce(function (acc, cur) {
    return acc + cur.score
    }, 0)
    let avgScore = totalScore / moviesArray.length
    return parseFloat(avgScore.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let dramaMovies = moviesArray.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return true
        }
    })
    if (dramaMovies.length === 0) {
        return 0
    }
    let totalDramaScore = dramaMovies.reduce(function (acc, cur) {
        return acc + cur.score
    }, 0)
    let avgDramaScore = totalDramaScore / dramaMovies.length
    return parseFloat(avgDramaScore.toFixed(2))
    
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesOrder = [...moviesArray]
    moviesOrder.sort( function (a, b) {
        if (a.year < b.year) return -1
        if (a.year > b.year) return 1
        if (a.year === b.year) {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            if (a.title === b.title) return 0
        }
    })
    return moviesOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesTitle = moviesArray.map(function (movie) {
        return movie.title
    })
    moviesTitle.sort ()
    return moviesTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
