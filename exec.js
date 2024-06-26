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

const tamanhoBrowser = window.matchMedia('(max-width: 720px)').matches
if (tamanhoBrowser) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
} //adiciona a classe menu-mobile se o browser for menor ou igual a 720px

const linksIn = document.querySelectorAll('a[href^="#"]')
function removeOuAdd (event) {
    event.preventDefault()
    linksIn.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}

linksIn.forEach((link) => {
    link.addEventListener('click', removeOuAdd)
}) //quando clica nos links internos a classe ativo é adicionada caso não esteja em nenhum e removida se for adicionada a outro link e também o evento padrão foi prevenido

const todos = document.querySelector('body')
function qualFoi(event) {
    console.log(event.target.remove(event))
}

//todos.addEventListener('click', qualFoi) //inicilamente só mostrat qual elemento foi clicado, mas depois além de ser clicado é removido

function aumentaTexto (event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior')
    }
}
window.addEventListener('keydown', aumentaTexto) //quando clicamos T a letra aumenta

const menu2 = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const cloneMenu2 = menu2.cloneNode(true)
copy.appendChild(cloneMenu2) //aqui o menu foi duplicado e adicionado na parte de copy

const FAQ = document.querySelector('.faq')
const primeirodt = FAQ.querySelector('dt')
console.log(primeirodt) //selecionado o primeiro dt da dl

const proximodd = primeirodt.nextElementSibling
console.log(proximodd) //dd referente ao primeiro dt

const animais = document.querySelector('.animais')
FAQ.innerHTML = animais.innerHTML //o conteúdo HTML de FAQ foi substituído pelo de Animais