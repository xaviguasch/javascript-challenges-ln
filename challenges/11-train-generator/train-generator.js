function* getStop() {
  yield 'Poughkeepsie'
  yield 'Newburgh'
  yield 'Peekskill'
  yield 'Yonkers'
  yield 'Broxn'
  yield 'Grand Central'
}

const nycTrainline = getStop()

const nextStopButton = document.querySelector('#next-stop')

nextStopButton.addEventListener('click', () => {
  let currStop = nycTrainline.next()

  if (currStop.done) {
    console.log('We made it!')
    nextStopButton.setAttribute('disabled', true)
  } else {
    console.log(currStop.value)
  }
})
