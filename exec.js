const img1 = document.querySelectorAll('img')
console.log(img1)

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

const img = document.querySelectorAll('img')
img.forEach((img) => {
    console.log(img.hasAttribute('alt'))
})

const itensM = document.querySelectorAll('.menu a')
itensM.forEach((item) => {
    item.classList.add('ativo')
}) //adicionou a classe ativo

itensM.forEach((item) => {
    item.classList.remove('ativo')
}) //removeu a classe ativo

itensM[0].classList.add('ativo') //adicionou a classe ativo apenas para o primerio item

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.instagram.com/ana.gloria06/') //modificou o último link externo

const img2 = document.querySelector('img[alt = "raposa"]')
console.log(img2)
console.log(img2.offsetTop) //a distância do topo da 1º imagem pro topo da pág

const larImg = document.querySelectorAll('img')
const arraylarImg = Array.from(larImg)
let soma = 0
arraylarImg.forEach((imagem) => {
    console.log(imagem.width)
    soma += imagem.width
})
console.log(soma) //dá a soma da largura das imagens

const links = document.querySelectorAll('a')
links.forEach((link) => {
    const larguraLink = link.offsetWidth
    const alturaLink = link.offsetHeight
    if (larguraLink >= 48 && alturaLink >= 48) {
        console.log(link, 'Possui acessibilidade')
    } else {
        console.log(link, 'Não possui acessibilidade')
    }
}) //verifica se o link atende às exigências de tamanho para ser clicável em disp. móveis

const tamanhoBrowser = window.matchMedia(('max-width: 720px'))
const menu = document.getElementsByClassName('menu')
if (tamanhoBrowser.matches) {
    menu.classList.add('menu-mobile')
} else {
    console.log('Tamanho está ok.')
}