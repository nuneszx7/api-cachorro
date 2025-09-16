'use strict'

const caixaDePesquisa = document.getElementById('caixa-de-pesquisa')
const form = document.querySelector('.buscarImagens')
const resultadoDaPesquisa = document.getElementById('resultado-da-pesquisa')



let pagina = 1


async function buscarImagens (raca) {
    
   
    if (!raca) {
        return
    }

    const url = `https://dog.ceo/api/breed/${raca.toLowerCase()}/images`

    try {
        const response = await fetch(url)
        const data = await response.json()

        if(pagina === 1){
            resultadoDaPesquisa.innerHTML = ''
        }

        
        if (data.status === "success") {
            const resultados = data.message 

            resultados.forEach((urlImagem) => {
                const imagem = document.createElement('img')
                imagem.src = urlImagem
        
                const linkImagem = document.createElement('a')
                linkImagem.href = urlImagem
                linkImagem.target = '_blank'
        
                linkImagem.appendChild(imagem)
                resultadoDaPesquisa.appendChild(linkImagem)
            })
        } else {
            
            resultadoDaPesquisa.innerHTML = `<p>Raça não encontrada. Tente outra.</p>`
        }
    } catch (error) {
        console.error("Erro ao buscar imagens:", error)
        resultadoDaPesquisa.innerHTML = `<p>Ocorreu um erro na busca. Tente novamente.</p>`
    }
}
 
form.addEventListener('submit', (e) => {
    e.preventDefault() 
    pagina = 1
    const raca = caixaDePesquisa.value.trim() 
    buscarImagens(raca)
})
        
