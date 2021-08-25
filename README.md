# Desafio Light-Dark Mode

## Objetivo

> Aprender um pouco mais sobre a manipulação de elementos html com DOM (Document Object Model)

## Resumo:

    Selecionar os elementos de uma página
    document.getElementById('id')
    <h1 id='titulo'>Minha Página</h1>

    document.getElementByTagName('li')
    //retorna um vetor
    [
    <li>P1</li>
    <li>P2</li>
    <li>P3</li>
    ]

    document.getElementByClassName('texto')
    //retorna um vetor
    [
    <section class="textos">
    <h2>...</h2>
    <p>...</p>
    </section>
    ]

    #Adicionar e deletar
    document.createElement(ele) - Cria um elemento
    document.removeChild(ele) - Remove um elemento
    document.appendChild(ele) - Adiciona um elemento
    document.replaceChild(new, old) - Substitui um elemento

    #Manipular estilos
    Elemento.classList
    <div id="meu-elemento" class="classe">
    ...
    </div>
    const meuElemento = document.getElementById("meu-elemento)
    meuElemento.classList.add("novo-estilo")
    meuElemento.classList.remove("classe")
    meuElemento.classList.toggle("dark-mode")
    toggle = interruptor

    #Acessando diretamente o css de um elemento
    document.getElementByTagName('li').style.color = "blue"

    #Eventos
    Eventos do mouse: mouseover, mouseout
    Eventos de click: click, dbclick
    Eventos de atualização: change, load
    
    Exemplo:
    const botao = document.getElementById("meuBotao")
    botao.addEventListener("tipo do evento", outraFuncao)
    tipo do evento = click
    //O código fica observando o botão, quando o evento de click for realizado, será
    chamado a "outraFuncao"
    
    Atributo innerHTML
    <h1 onclick="mudarTexto(this)"> Clique aqui </h1>
    <script>
	    function mudarTexto(id){
		    id.innerHTML = "Mudei"
	    }
    </script>