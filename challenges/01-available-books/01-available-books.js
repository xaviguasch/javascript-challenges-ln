class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title
    this.author = author
    this.isbn = isbn
    this.numCopies = numCopies
  }

  get availability() {
    return this.getAvailability()
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'out of stock'
    } else if (this.numCopies < 10) {
      return 'low stock'
    }
    return 'in stock'
  }

  sell(numSold = 1) {
    this.numCopies -= numSold
  }

  restock(numRestock = 5) {
    this.numCopies += numRestock
  }
}

const orwellBook = new Book('1984', 'George Orwell', '394955', 10)

console.log(orwellBook)
console.log(orwellBook.getAvailability())
console.log(orwellBook.sell(2))
console.log(orwellBook)
console.log(orwellBook.sell())
console.log(orwellBook)
console.log(orwellBook.getAvailability())
console.log(orwellBook.restock())
console.log(orwellBook)
console.log(orwellBook.availability)
