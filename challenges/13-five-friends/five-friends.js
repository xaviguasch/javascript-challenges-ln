const timelineEl = document.querySelector('#timeline')

const getUsers = async (urlAPI) => {
  const response = await fetch(urlAPI)

  const data = await response.json()

  data.results.forEach((ind) => {
    const thumbnail = ind.picture.thumbnail

    const imgEl = document.createElement('img')
    imgEl.src = thumbnail

    timelineEl.appendChild(imgEl)
  })
}

console.log(getUsers('https://randomuser.me/api/?results=5'))
