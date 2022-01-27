var qtdeNavios = 6
var navios = []
var posicoes = []
var qtdeLinhas = 15
var qtdeColunas = 15
var tamanhoNavio = 4
var celulasNavio1 = []



renderizarPlano()
definirNavios()
sentidoDosNavios()
celulasDosNavios()

colorirCelulasDosNavios()


function colorirCelulasDosNavios(){
    navios.map(navio => {
        navio.celulas.map(celula => {
            var stringElemento = String(celula[0]) + '.' + String(celula[1])
            //console.log(document.getElementById(stringElemento))
            document.getElementById(stringElemento).className = "cellNavio"
        })
    })
}




function definirNavios() {
    for (let index = 0; index < qtdeNavios; index++) {
        navios.push({
            sentido: NaN,
            celulas: []
        })        
    }
}

function colisao(indexNavio) {
    for (let index = indexNavio-1; index >= 0; index--) {
        navios[indexNavio].celulas.map(celulaNavioOriginal => {
            navios[index].celulas.map(celulaNavioRef => {
                if (celulaNavioOriginal == celulaNavioRef){
                    navios[indexNavio].sentido = Math.floor(Math.random() * 2)
                    return true
                }
            })
        })
    }
    return false
}

function celulasDosNavios() {

    indexNavio = 0
    navios.map(navio => {

        if (indexNavio == 0){
            celulasDoNavio(indexNavio, navio)
        } else {
            do
                celulasDoNavio(indexNavio, navio)
            while (colisao(indexNavio))            
        }

        indexNavio += 1
    })
}

function celulasDoNavio(indexNavio,navio) {
    switch (navio.sentido) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio))
            var coluna = Math.floor(Math.random() * qtdeColunas)
            adicionarCelula(indexNavio,linha,coluna)        

            for (let index = 0; index < tamanhoNavio-1; index++) {
                linha += 1
                adicionarCelula(indexNavio,linha,coluna)                
            }

            break;
        case 1:
            var linha = Math.floor(Math.random() * qtdeLinhas)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            adicionarCelula(indexNavio,linha,coluna)        

            for (let index = 0; index < tamanhoNavio-1; index++) {
                coluna += 1
                adicionarCelula(indexNavio,linha,coluna)
            }


            break;
    }
}

function adicionarCelula(indexNavio, linha, coluna) {
    navios[indexNavio].celulas.push([
        linha,
        coluna
    ])
}

function sentidoDosNavios() {
    //0 = navio vertical
    //1 = navio horizontal
    navios.map(navio => {
        navio.sentido = Math.floor(Math.random() * 2)
    })
}

function renderizarPlano() {
    var elemento = document.getElementById('plano')
    var linhas = ""   

    for (let indexLinha = 0; indexLinha < qtdeLinhas; indexLinha++) {
        linhas += '<tr>'        
        for (let indexColuna = 0; indexColuna < qtdeColunas; indexColuna++) {
            linhas += `<td class="cell" id="${indexLinha}.${indexColuna}">
            ${indexLinha}.${indexColuna}
            </td>`
        }
        linhas += '</tr>'
    }
    elemento.innerHTML = linhas
}