let cell = document.getElementsByClassName('cell')
let count = 0
let draw = true
let array = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]
for (let i = 0; i < cell.length; i++) {
	cell[i].addEventListener('click', cellClick)
}

function cellClick() {
	if (this.innerHTML === "X" || this.innerHTML === "O") {
		alert("Клітинка зайнята")
	}
	else {
		if (count % 2 === 0) {
			this.innerHTML = "X"
			count++
		}
		else {
			this.innerHTML = "O"
			count++
		}
		checkWin()
		checkDraw()
	}
}

function checkWin() {
	for (let i = 0; i < array.length; i++) {
		if (cell[array[i][0]].innerHTML == "X" && cell[array[i][1]].innerHTML == "X" && cell[array[i][2]].innerHTML == "X") {
			draw = false
			alert("Виграли хрестікі")
			location.reload()
		}
		if (cell[array[i][0]].innerHTML == "O" && cell[array[i][1]].innerHTML == "O" && cell[array[i][2]].innerHTML == "O") {
			draw = false
			alert("Виграли нолики")
			location.reload()
		}
	}
}

function checkDraw() {
	if (count === 9 && draw === true) {
		alert("Нічия")
		location.reload()
	}
}
