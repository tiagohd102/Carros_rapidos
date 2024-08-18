/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/
//passo 1
const botoesCarrossel = document.querySelectorAll(".botao");//buscar todos os elemento ou um seletor especifico
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//passo 2
botoesCarrossel.forEach((botao, indice) =>{//forEach para cada botao
    console.log(botao);
    botao.addEventListener('click', () =>{
    console.log("Clicou")
    //passo3
    const botaoSelecionado = document.querySelector(".selecionado")

    botaoSelecionado.classList.remove("selecionado");

    //passo4
    botao.classList.add("selecionado");//classe selecionada

    //passo5
    const imagemAtiva = document.querySelector(".ativa")
    imagemAtiva.classList.remove("ativa");

    //passo6
    imagens[indice].classList.add("ativa");

    //passo7
    const informacoesAtiva = document.querySelector(".informacoes.ativa")
    informacoesAtiva.classList.remove("ativa");

    //passo8
    informacoes[indice].classList.add("ativa");







    })
})



