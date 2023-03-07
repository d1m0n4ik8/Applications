let btn = document.querySelector('#generateButton')
let interactivePanel = document.querySelector('#interactivePanel')
let move = false
let offsetX, offsetY
let currentDiv
const genereteButtonHeight = parseInt(getComputedStyle(btn).height) // parseInt конвертирует строку с буквенными символами и числами в конце в число, например 100px в 100
btn.addEventListener('click', setElement)

interactivePanel.addEventListener('mousedown', function (e) {
   if (e.target.classList.contains('interactiveElement')) {
      // обрабатываем событие только от элементаов с классом interactiveElement
      move = true
      offsetX = e.offsetX
      offsetY = e.offsetY
      currentDiv = e.target
   }
})

interactivePanel.addEventListener('mousemove', function (e) {
   if (move) {
      currentDiv.style.top = e.clientY - offsetY - genereteButtonHeight + 'px'
      currentDiv.style.left = e.clientX - offsetX + 'px'
   }
})

interactivePanel.addEventListener('mouseup', function (e) {
   move = false
})

function generateElement() {
   let div = document.createElement('div')
   div.classList.add('interactiveElement')
   let maxLeft = window.innerWidth - 50 // ширина текущего документа
   let maxTop = window.innerHeight - 150 // высота текущего документа
   div.style.top = getRandomValue(maxTop) + 'px'
   div.style.left = getRandomValue(maxLeft) + 'px'
   div.style.backgroundColor = getRandomColor()
   return div
}

function getRandomColor() {
   let letters = '0123456789ABCDEF'
   let color = '#'
   for (var i = 0; i < 6; i++) {
      color += letters[getRandomValue(16)]
   }
   return color
}
function getRandomValue(max) {
   return Math.floor(Math.random() * max)
}

function setElement() {
   interactivePanel.innerHTML = ''
   for (let i = 0; i < 100; i++) {
      interactivePanel.append(generateElement())
   }
}
