function clock() {
  const clockEl = document.querySelector('#clock')

  return setInterval(() => {
    const date = new Date()
    let tick = date.toLocaleTimeString()
    clockEl.innerText = tick
  }, 1000)
}

clock()
