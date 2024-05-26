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