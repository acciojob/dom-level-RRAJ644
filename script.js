document.addEventListener('DOMContentLoaded', () => {
  const currentElement = document.querySelector('#level')
  let level = 0
  while (currentElement) {
    level++
    currentElement = currentElement.parentElement
  }

  alert(`The level of the element is: ${level}`)
})
