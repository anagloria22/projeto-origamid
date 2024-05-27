const img = document.querySelectorAll('img')
console.log(img)

const imgAnimais = document.querySelectorAll('img[src^="imagens/imagem"]')
console.log(imgAnimais)

const linksInternos = document.querySelectorAll('a[href^="#"]')
console.log(linksInternos)

const tituloDesc = document.querySelector('.animais-descricao h2')
console.log(tituloDesc)

const ultimoP = document.querySelectorAll('footer > p')
console.log(ultimoP)

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

paragrafos.forEach((item) => {
    console.log(item)
})

const textParagrafos = Array.from(paragrafos)
textParagrafos.forEach(function(item) {
    console.log(item.innerText)
})

//classList retorna uma lista com as classes do elemento e permite adicionar, remover ou verificar quais tem
const menu = document.querySelector('.menu')
console.log(menu.classList)

//getAttribute ou setAttribute são métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img')
img.getAttribute('src') //valor do src
img.setAttribute('alt', 'Texto Alternativo') //muda o alt
img.hasAttribute('id') // ture/false
img.removeAttribute('alt') //remove o alt
img.hasAttributes() // true/false se tem algum atributo