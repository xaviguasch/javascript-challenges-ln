const vendors = [['pizza', 'pasta'], ['pizza', 'calzones'], ['lobster'], ['calzones']]

function foodTruckFestival(menus) {
  const allItems = []
  menus.forEach((menu) => menu.forEach((item) => allItems.push(item)))

  // alternative way to flatten the arrays
  // let flatMenus = menus.flat()

  const itemsSet = new Set(allItems)

  const combinedMenuEl = document.querySelector('#combined-menu')

  for (const item of itemsSet) {
    const liEl = document.createElement('li')
    liEl.innerText = item

    combinedMenuEl.appendChild(liEl)
  }
}

console.log(foodTruckFestival(vendors))
