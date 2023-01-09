const menu = [
  { name: 'Eggplant Parmesan', vegetarian: true },
  { name: 'Spaghetti & Meatballs', vegetarian: false },
  { name: 'Ricotta', vegetarian: true },
  { name: 'Pizza bacon', vegetarian: false },
]

const vegetarianMenu = (dishes) => {
  const menuEl = document.getElementById('menu')

  const vegDishesArr = dishes.filter((dish) => {
    return dish.vegetarian
  })

  vegDishesArr.forEach((vegD) => {
    const vegDishEl = document.createElement('li')
    vegDishEl.textContent = vegD.name

    menuEl.appendChild(vegDishEl)
  })
}

vegetarianMenu(menu)
