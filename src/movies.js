// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
    let directors = movies.map((movie) => {
    return movie.director
    })
    return directors
}
console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    let spielberg = movies.filter((movie) => {
      if(movie.director === "Steven Spielberg"){
        for(let genre of movie.genre){
        if(genre === "Drama"){
          return true
        }
      }
      }
    })
    return spielberg.length
  }
  console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if(movies.length === 0){
        return 0
      }
    const sumRates = movies.reduce((acc, rates) => {
      if(rates.rate){
        return acc + rates.rate 
      } else {
        return acc
      }  
    }, 0);
    const average = sumRates / movies.length
    return (Math.round(average * 100) / 100)
  }
  console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
