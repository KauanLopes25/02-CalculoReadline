/********************************************************************************************
* Objetivo: Realizar o calculo de medias escolares (Condicionais, tratamento de erro, variá-
veis)
* Autor: Kauan Lopes Pereira
* Data: 30/07/2025
* Versão: 1.0.0.0
********************************************************************************************/
//Import do arquivo de medias escolares
var calculoMedia = require('./modulo/media.js')

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
 * [Boas práticas na hora de criar uma contante é inserir um nome todo em ALL_CAPS]
 * 
 * Metodos de conversão de tipos de dados: 
 * 
 * String() -> Converter um objeto ou variavel em String()
 * Number() -> Converser o objeto ou variavel em um numero decimal(float) ou inteiro, fica a critério
 *             da classe, ela decide.
 * parseFloat() -> Converter o objeto ou variavel em numero decimal(float)
 * parseInt() -> Converter o objeto ou variavel em numero inteiro
 * Boolean() -> Converte um objeto ou variavel para booleano(true or false)
 * Object() -> Converter uma variavel para objeto (array, json, class)
 * 
 * Operadores de comparação:
 * < Validação de menor
 * > Validação de maior
 * == Validação de igualdade de conteúdo
 * <= Validação de menor ou igualdade de conteúdo
 * >= Validação de maior ou igualdade de conteúdo
 * != Validação de diferença de conteúdo
 * === Validação de igualdade do tipo de dado e conteúdo
 * !== Validação de diferença de tipo de dado e igualdade de conteúdo
 * !=! Validação da diferença de tipo de dado e diferença de conteúdo
 * 
 * Operadores Lógicos
 * 
 * E    and    &&
 * OU   or     ||
 * NÃO  not    !
 * 
 * obs ()
 * toFixed() -> permite fixar a quantidade de casas decimais de um number
********************************************************************************************/
// Import da biblioteca de readline
const readline = require('readline')

// Cria um objeto para criar uma interface de entrada de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const MESSAGE_ERRO = 'ERRO: Nota Inválida!! \nA nota deve estar entre 0-10'

// Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    let nomeAluno = String(nome).toUpperCase()

    if(nomeAluno == ''){
        console.log('ERRO: O campo nome não pode ser vazio!!')
        entradaDeDados.close()
    }else{
        // Entrada de dados da Nota 1
        entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        if(nota1 == '' || Number(nota1) < 0 || Number(nota1) > 10){
            console.log(MESSAGE_ERRO)
            entradaDeDados.close()
        }else{
            // Entrada de dados da Nota 2
            entradaDeDados.question('Digite a nota 2:', function(valor2){
                let nota2 = valor2

                if(nota2 == '' || Number(nota2) < 0 || Number(nota2) > 10){
                    console.log(MESSAGE_ERRO)
                    entradaDeDados.close()
                }else{
                    // Entrada de dados da Nota 3
                    entradaDeDados.question('Digite a nota 3:', function(valor3){
                        let nota3 = valor3

                        if(nota3 == '' || Number(nota3) < 0 || Number(nota3) > 10){
                            console.log(MESSAGE_ERRO)
                            entradaDeDados.close()
                        }else{
                            // Entrada de dados da Nota 4
                            entradaDeDados.question('Digite a nota 4:', function(valor4){
                                let nota4 = valor4

                                if(nota4 == '' || Number(nota4) < 0 || Number(nota4) > 10){
                                    console.log(MESSAGE_ERRO)
                                    entradaDeDados.close()
                                }else{
                                    // Calculando a média do aluno
                                    let statusAluno = ''
                                    let media = calculoMedia.mediaEscolar(nota1, nota2, nota3, nota4)
                                    if(media < 5){
                                        statusAluno = 'REPROVADO'

                                    }else if(media >=5 && media <=7){
                                        statusAluno = 'RECUPERAÇÃO'
                                    }else if(media >=7 && media <=10){
                                        statusAluno = 'APROVADO'
                                    }

                                    console.log(`Nota média do(a) ${nomeAluno}: ${media}\nO Aluno está: ${statusAluno}`)
                                }
                            })
                        }
                    })
                }
            })
        }
    })
    }
})