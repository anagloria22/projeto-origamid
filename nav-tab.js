//Navegação por TABS
//é um tipo de navegação entre uma lista de itens e outra lista de itens relacionadas entre si, em que uma a gente clica e a outra mostra o conteúdo referente ao que foi clicado na primeira

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
tabContent[0].classList.add('ativo')

if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    } //ess função adiciona a classe ativo ao elemento selecionado e remove da que já tiver antes

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function() {
            activeTab(index)
        })
    })
}