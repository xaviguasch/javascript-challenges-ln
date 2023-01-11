const coffeesByFriends = [2, 3, 1, 5]

const pricePerCoffee = 1.25

function coffeeDate(coffeeArr) {
  const coffeeSum = coffeesByFriends.reduce((acc, currV) => {
    return acc + currV
  }, 0)

  return `The total bill is $${coffeeSum * 1.25}`
}

console.log(coffeeDate(coffeesByFriends))
