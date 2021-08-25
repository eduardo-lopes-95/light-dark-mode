//1 - Trocar a cor do body e footer
//2 - Trocar a cor do botão
//3 - Trocar a cor do footer
//4 - Trocar a frase do h1
//5 - Trocar a frase do botao

//Codigo
/*
1 - criar o botão com o evento de listening (addEventListener)
2 - selecionar os elementos
3 - função para mudar a cor dos elementos
4 - função para mudar o texto
*/

function changeMode() {
    changeClasses()
    changeText()
}

function changeClasses() {
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function changeText() {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'
    
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + ' ON'
        return
    }

    button.innerHTML = darkMode
    h1.innerHTML = lightMode + ' ON'
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0] //retorna um array, [0] a tag body
const footer = document.getElementsByTagName('footer')[0] //retorna um array, [0] a tag footer

button.addEventListener('click', changeMode)