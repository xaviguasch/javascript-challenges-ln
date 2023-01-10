const blueBtn = document.querySelector('#blue')
const pinkBtn = document.querySelector('#pink')
const greenBtn = document.querySelector('#green')

const changeColor = (color) => {
  console.log(color)
  document.body.style.backgroundColor = color
}

// you could pass the hexadecimal strings, instead: "#0f62fe"
blueBtn.addEventListener('click', (e) => changeColor(e.target.id))
pinkBtn.addEventListener('click', (e) => changeColor(e.target.id))
greenBtn.addEventListener('click', (e) => changeColor(e.target.id))
