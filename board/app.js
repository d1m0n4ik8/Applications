const board = document.querySelector('#board')
const NUMBER_OF_SQUARES = Math.ceil(
   (document.documentElement.clientWidth / 20) * (document.documentElement.clientHeight / 20)
)
const color = [
   '#91eb86',
   '#e8eb86',
   '#f27ea7',
   '#ec7ef2',
   '#6d98ed',
   '#edc76d',
   '#be6ded',
   '#ab9fed',
   '#e30e30',
   '#951ebf',
   '#5865F2',
   '#5D8D7F',
   '#CC4291',
   '#FEDCBA',
]

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
   const square = document.createElement('div')
   square.classList.add('square')
   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('mouseleave', () => removeColor(square))
   board.append(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxshadow = `0 0 2px #000`
}
function getRandomColor() {
   const index = Math.floor(Math.random() * color.length)
   return color[index]
}
