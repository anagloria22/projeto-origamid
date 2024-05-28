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

//classList retorna uma lista com as classes do elemento e permite adicionar, remover ou verificar quais tem
const menu = document.querySelector('.menu')
console.log(menu.classList)

primeiraUl.classList.add('grid')

//console.log(gridHTML)
//console.log(gridNode)

gridNode.forEach(function(item, index) {
    console.log(item)
})

const arrayGrid = Array.from(gridHTML) //transforma em array

arrayGrid.forEach(function(item) {
    console.log(item)
})

//getAttribute ou setAttribute são métodos que retornam ou definem de acordo com o atributo selecionado

const imgs = document.querySelector('img')
imgs.getAttribute('src') //valor do src
imgs.setAttribute('alt', 'Texto Alternativo') //muda o alt
imgs.hasAttribute('id') // ture/false
imgs.removeAttribute('alt') //remove o alt
imgs.hasAttributes() // true/false se tem algum atributo

/* arrayGrid.forEach((item) => {
    console.log(item)
}) essa é a arrow function que tem a função de removermos o function e passar apenas o parametro e logo após colocarmos a => */

/*pode acontecer também de ir em uma só linha de código
let i = 0
imgs.forEach(() => console.log(i++))
*/

//Height e Width
//são prorpeidades e métodos dos objetos Elemente e HTMLElement e a maioria é Read Only(só dá pra ler, não dá pra modificar como as Writable)
const section = document.querySelector('.animais')
section.clientHeight //height + padding
section.offsetHeight //height + padding + border
section.scrollHeight // height total, mesmo dentro do scroll
section.offsetTop // distancia entre o topo do elemento e o topo da pág
section.offsetLeft // distancia entre o canto esquerdo da pag e o canto esquerdo do elemento

const rect = section.getBoundingClientRect()
rect.height // retorna a altura do elemento
rect.width // largura
rect.top // distancia entre o topo e o scroll
console.log(rect)

const listaAnimais = document.querySelector('.animais-lista')
const animaisTop = listaAnimais.offsetTop
const height = listaAnimais.scrollHeight
console.log(height)
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft
console.log(h2left)

window.innerWidth // largura da janela
window.outerWidth // soma dev tools também
window.innerHeight // altura da janela
window.outerWidth // soma a barra de endereço
window.pageYOffset // distancia total do scroll horizontal
window.pageXOffset // distancia total do scroll vertical
if (window.innerWidth < 600) {
    console.log('Tela menor que 600')
}

//matchMedia() nele passamos um media-query como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)')

if(small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}