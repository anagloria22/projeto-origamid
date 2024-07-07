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

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection (event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        console.log(section)
        
        section.scrollIntoView({
            behavior: 'smooth'
        })

        //Forma alternativa do Scroll Suave
        /*const topo = section.offsetTop
        window.scrollTo({
            top: topo,
            behavior: "smooth"
        })*/
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave()

function initAniamacaoScroll() {

    const sections = document.querySelectorAll('.js-scroll')
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6

        function animaScroll () {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if (isSectionVisible) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}

initAniamacaoScroll()