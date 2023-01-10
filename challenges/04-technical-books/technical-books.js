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

class TechnicalBook extends Book {
  constructor(title, author, isbn, numCopies, edition) {
    super(title, author, isbn, numCopies)
    this.edition = edition
  }

  getEdition() {
    return `The current version of this book is ${this.edition}.`
  }
}

const jsIsAwesome = new TechnicalBook('JS Is Awesome', 'John Doe', '3949DG', 25, '2.2')

console.log(jsIsAwesome)
console.log(jsIsAwesome.getEdition())
