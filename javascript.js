var posicoes = []
var qtdeLinhas = 15
var qtdeColunas = 15
var tamanhoNavio = 4
var cellInicialNavio1 = []
var cellInicialNavio2 = []

renderizarPlano()
definirPosicoes()
celulasIniciaisNavios()


console.log(posicoes)
console.log(cellInicialNavio1)
console.log(cellInicialNavio2)


function colisao() {
    return false
}

function celulasIniciaisNavios() {
    
    switch (posicoes[0]) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio))
            cellInicialNavio1.push(linha)
            var coluna = Math.floor(Math.random() * qtdeColunas)
            cellInicialNavio1.push(coluna)
            break;
        case 1:    
            var linha = Math.floor(Math.random() * qtdeLinhas)
            cellInicialNavio1.push(linha)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            cellInicialNavio1.push(coluna)
            break;    
    }
    
    switch (posicoes[1]) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio))
            cellInicialNavio2.push(linha)
            var coluna = Math.floor(Math.random() * qtdeColunas)
            cellInicialNavio2.push(coluna)
            break;
        case 1:    
            var linha = Math.floor(Math.random() * qtdeLinhas)
            cellInicialNavio2.push(linha)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            cellInicialNavio2.push(coluna)
            break;    
    }    
}

function definirPosicoes() {
    //0 = navio vertical
    //1 = navio horizontal
    posicoes.push(Math.floor(Math.random() * 2));
    posicoes.push(Math.floor(Math.random() * 2));
}

function renderizarPlano() {
    var elemento = document.getElementById('plano')
    var linhas = ""   

    for (let indexLinha = 0; indexLinha < qtdeLinhas; indexLinha++) {
        linhas += '<tr>'        
        for (let indexColuna = 0; indexColuna < qtdeColunas; indexColuna++) {
            linhas += `<td class="cell" id="${indexLinha}.${indexColuna}"></td>`
        }
        linhas += '</tr>'
    }
    elemento.innerHTML = linhas
}