const animais = document.getElementById('ianimais')
console.log(animais)

const grid = document.getElementsByClassName('grid')
console.log(grid)

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"]')
console.log(linksInternos)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])

const gridHTML = document.getElementsByClassName('grid')
const gridNode = document.querySelectorAll('.grid')

primeiraUl.classList.add('grid')

console.log(gridHTML)
console.log(gridNode)

gridNode.forEach(function(item, index) {
    console.log(item)
})

const arrayGrid = Array.from(gridHTML)
