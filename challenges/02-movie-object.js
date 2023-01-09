class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title
    this.director = director
    this.genre = genre
    this.releaseYear = releaseYear
    this.rating = rating
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
  }
}

const aliens = new Movie('Aliens', 'James Cameron', 'sci-fi', 1986, '4.5 stars')

console.log(aliens)
console.log(aliens.getOverview())
