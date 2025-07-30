/********************************************************************************************
* Objetivo: Realizar o calculo de medias escolares (Condicionais, tratamento de erro, variá-
veis)
* Autor: Kauan Lopes Pereira
* Data: 30/07/2025
* Versão: 1.0.0.0
********************************************************************************************/


/********************************************************************************************
 ************************************* Anotações ********************************************
 * Formas de criação de variáveis:
 * 
 * let -> Permite criar uma variável dentro de um escopo de bloco, onde essa variavel nasce e
 *        morre dentro do bloco
 * var -> Permite criar uma variável dentro ou fora de um escopo de bloco, porém não se 
 *        utiliza com tanta frequencia
 * const -> Permite criar um espaço em memória onde não sofre alteração de conteúdo, podendo 
 *          ser criado dentro ou fora de um escopo de bloco
 * 
 * Boas práticas na hora de criar uma contante é inserir um nome todo em ALL_CAPS
 * 
 * Metodos de conversão de tipos de dados
 * String() -> Converter um objeto ou variavel em String()
 * 
********************************************************************************************/
// Import da biblioteca de readline
const readline = require('readline')

// Cria um objeto para criar uma interface de entrada de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    let nomeAluno = String(nome).toUpperCase()

    if(nomeAluno == ''){
        console.log('ERRO: O campo nome não pode ser vazio!!')
        entradaDeDados.close()
    }else{
        // Entrada de dados do Nota 1
        entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        if(nota1 == ''){
            console.log('ERRO: Nota não informada!!')
            entradaDeDados.close()
        }
    })
    }
})