'use strict'

const caixaDePesquisa = document.getElementById('caixa-de-pesquisa')
const botaoBuscar = document.getElementById('botao-buscar')
const resultadoDaPesquisa = document.getElementById('resultado-da-pesquisa')



let palavraChave = ''
let pagina = 1


async function buscarImagens (raca) {
    
    palavraChave = caixaDePesquisa.value
    const url = `https://dog.ceo/api/breed/${raca}/images`


    const response = await fetch(url)
    const imagens = await response.json()

    if(pagina === 1){

        resultadoDaPesquisa.innerHTML = ''

    }

    const resultados = imagens.message


    // url.forEach(url => {

    //     const criarFotoCachorro = buscarImagens(url)
    //     CanvasGradient.appendChild(criarFotoCachorro)

    // });


    resultados.forEach((urlImagem) => {

        const imagem = document.createElement('img')
        imagem.src = urlImagem

        const linkImagem = document.createElement('a')
        linkImagem.href = urlImagem
        linkImagem.target = '_blank'

        linkImagem.appendChild(imagem)

        resultadoDaPesquisa.appendChild(linkImagem)

    })
    
    caixaDePesquisa.addEventListener('pesquisar', (e) => {

        e.preventDefault()
        pagina = 1
        buscarImagens()

    })



    }

    buscarImagens()
        


