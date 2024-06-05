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

//Eventos
const img = document.querySelector('img')
function callback () {
    console.log('clicou')
}

//img.addEventListener('click', callback) //addEventListener adiciona uma função(chamada de callback) ao elemento que é ativada assim que o evento acontecer neste elemento

//Callback
//é uma boa prática separar a função de callback do addEventListener, ou seja, declarar a função em vez de passar diretamente uma anônima(exemplo acima)

const animaisLista = document.querySelector('.animais-lista')
function callbackLista(event) {
    console.log(event.currentTarget) //mostra a lista de animais, o próprio elemento inteiro
    console.log(event.target) //mostra a imagem que foi clicada, o item exato do elemento que clicamos
    console.log(event.type) //mostra o tipo do evento
    console.log(event.path)
}
animaisLista.addEventListener('click', callbackLista)

//event.preventDefault()
//previne o comportamento padrão de um evento no navegador. Se for o caso de um link externo, faz com que não seja ativado:
const linkExterno = document.querySelector('a[href^="http"]')
function cliqueNoLink (event) {
    event.preventDefault()
    console.log(this.getAttribute('href')) //mostra o link
    console.log(event.currentTarget) //mostra a tag e o link dentro da tag(se colocarmos .href faz a mesma coisa que a linha acima)
}

linkExterno.addEventListener('click', cliqueNoLink)

//Diferentes Eventos
//Click, scroll, resize, keydown, keyup, ouseenter etc são exemplos de eventos e podem ser adicionados a elementos como window ou document
const h1 = document.querySelector('h1')
function callback (event) {
    console.log(event.type, event)
}

//h1.addEventListener('click', callback)
//h1.addEventListener('mouseenter', callback)
//h1.addEventListener('mousemove', callback)

//window.addEventListener('scroll', callback)
//window.addEventListener('resize', callback)
//window.addEventListener('keydown', callback) //quando clica em alguma tecla do teclado

//Keyboard
//podemos adicionar atalhos para facilitar a navegação no site, através dos eventos do keyboard

function handleKeyboard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul') //quando clicarmos em A a tela mudará de cor
    }else if(event.key === 'v') {
        document.body.classList.toggle('vermelho') //quando clicarmos em V a tela ficará vermelha
    }    
}

window.addEventListener('keydown', handleKeyboard)

//forEach e Eventos
// o método addEventListener é adicionado a um único elemento, então é preciso fazer um loop entre os elementos de uma lista para que possa ser adciionado a cada um deles
const img1 = document.querySelectorAll('img')
function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src')
    console.log(src)
}

img1.forEach((img) => {
    img.addEventListener('click', imgSrc)
})  

//outerHTML, innerHTML e innerText são propriedades que retornam uma string contendo o HTML ou o texto e é possível atribuir um novo texto a elas element.innerText = 'Novo Texto'
const menu2 = document.querySelector('.menu')
menu.outerHTML // retorna todo o HTML do elemento, incluindo ele mesmo
menu.innerHTML // retorna o HTML interno
menu.innerText // retorna o texto sem tags(elas vêm como texto, caso haja filhos)
//menu.innerText = '<p>Texto</p>' //a tag vai como texto
//menu.innerHTML = '<p>Texto</p>' //a tag é renderizada
console.log(menu.innerText)

//Transversing: como navegar pelo DOM utilizando suas propriedades e métodos
const lista = document.querySelector('.animais-lista')
console.log(lista.parentElement.parentElement.parentElement) //navega um elemento acima e assim vai...
console.log(lista.nextElementSibling) //mostra o próximo elemento
console.log(lista.previousElementSibling) //mostra o elemento anterior
console.log(lista.children) //mostra a lista HTML Collection com filhos do elemento dentro
console.log(lista.children[0]) //mostra o primeiro filho
console.log(lista.children[--lista.children.length]) //último filho
console.log(lista.querySelector('li:last-child')) //usando o seletor css

//Element vs Node
//o element representa o html, uma tag. já o node pode ser a tag, um texto, comentário e até mesmo um espaço
lista.previousElementSibling //elemento acima
lista.previousSibling // node acima
lista.firstChild //primeiro node child
lista.childNodes // todos os node child

const animais2 = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
//animais.appendChild(titulo) // coloca o elemnto como último filho da lista, após os animais
contato.insertBefore(animais2, titulo) //move o elemento animais para antes do elemento titulo
//contato.removeChild(titulo) //remove o titulo de contato
contato.replaceChild(lista, titulo) //substitui titulo por lista

//podemos criar um novo elemento HTML com javascript
const novoh1 = document.createElement('h1')
novoh1.innerText = 'Novo Título'
novoh1.classList.add('novo-titulo')
const github = document.querySelector('.cmeugithub')
github.appendChild(novoh1)

const H1 = document.querySelector('h1')
const FAQ = document.querySelector('.faq')
//FAQ.appendChild(H1) //aqui movemos o h1 do documento para depois do faq
const cloneH1 = H1.cloneNode(true) //para clonar elementos
cloneH1.classList.add('azul')//aqui foi modificado o clone e não o primeiro H1
FAQ.appendChild(cloneH1) //clone adicionado depois de FAQ

//Navegação por TABS