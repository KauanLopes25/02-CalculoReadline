/********************************************************************************************
* Objetivo: Arquivo responsável pelo processamento de calculos de médias escolares e status
            de aprovação
* Autor: Kauan Lopes Pereira
* Data: 30/07/2025
* Versão: 1.0.0.0
********************************************************************************************/

function calcularMediaEscolar(valor1, valor2, valor3, valor4) {
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return media.toFixed(1)
}
function definirStatusEscolar(media) {
    let statusAluno
    let mediaAluno = media
    if (mediaAluno < 5 && media >= 0) {
        statusAluno = 'REPROVADO'
    } else if (mediaAluno >= 5 && media <= 7) {
        statusAluno = 'RECUPERAÇÃO'
    } else if (mediaAluno >= 7 && media <= 10) {
        statusAluno = 'APROVADO'
    }
    if (statusAluno == undefined) {
        return false
    } else {
        return statusAluno
    }
}

//Área de testes da função
//console.log(statusEscolar(0))

/*Permite deixar as funções, variaveis, constantes, objetos publicos 
 para serem utilizadas em outros projetos*/
module.exports = {
    calcularMediaEscolar, definirStatusEscolar
}