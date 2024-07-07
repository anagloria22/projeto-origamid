//NAVEGAÇÃO POR ACCORDION LIST
//é a navegação em que clicamos em um título e aparece a descrição abaixo, o mais recomendado em fazer é que quando clicado um após um primeiro que já foi clicado, o conteúdo do primeiro não feche, permanecendo assim abertos todos os que forem clicados, fechando somente após clicar novamente

function initNavTab () {
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
}

initNavTab()


function initAccordion () {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }      
}

initAccordion()