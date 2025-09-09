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

    const resultados = imagens.resultados

    resultados.map((resultado) => {

        const imagem = document.createElement('img')
        imagem.src = resultado.url

        const linkImagem = document.createElement('a')
        linkImagem.href = resultado.url
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
        
    // console.log(imagens.message)
    // return imagens.message


// buscarImagens('beagle')



// const arrayImagens = await buscarImagens()
// console.log(arrayImagens)

