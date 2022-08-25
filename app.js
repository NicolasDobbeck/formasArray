/**********************************************************************
 * Objetivo: Array List
 * Autor: Nicolas Dobbeck Mendes 
 * Data de Criação: 22/ 08/2022
 * Data de modificação: 
 * O que foi modificado:
 * Versão: 1.0
 *********************************************************************/

console.log('***** Array List *****');

//Define uma variavel do tipo Array
const listaNomes = ['jose', 'maria', 'carlos'];
const listaProdutos = ['teclado','branco', 50.00, 10];
const listaAlunos = ['Carol', 'Milena', 'Ana','Heitor', 'Japa', 'Larissa'];
const listaDisciplinas = ['Programacao Back-end', 'Programacao Front-end', 'Banco de dados', ' Desenvolvimento Mobile'];

//Exibindo todos os dados de um array
console.log(listaNomes);
console.log(listaProdutos);

//Verifiicando o tipo de daddos de uma array
console.log(typeof(listaProdutos));

//Verifiicando o tipo de cada elemento de uma array
console.log (typeof(listaProdutos[3]));

//Exibindo os valores de cada elemento de uma array
console.log(`O produto é ${listaProdutos[0]}`);
console.log(`A cor do produto é ${listaProdutos[1]}`);

console.log(`A qtde de intens é ${listaProdutos.length}`);

//Extraindo valores de array com estrutura de repeticao
let qtde = listaAlunos.length;
let cont = 0;

//Exemplo utilizando while
while(cont < qtde){
    console.log(`O aluno da turma DS2M é: ${listaAlunos[cont]}`);
    cont +=1    
}

console.log('UTILIZANDO O FOR');

//Exemplo utilazando while
for(let cont = 0; cont < qtde; cont++){
    console.log(`O aluno da turma DS2M é: ${listaAlunos[cont]}`);
}

//Adicionando novos elementos no array no Final
listaAlunos.push('Arthur', 'Vinicius');
listaAlunos.push('Leonardo')
console.log(listaAlunos);

//remove o ultimo elemento do array
listaAlunos.pop();

console.log('EXEMPLO UTILIZANDO O FOREACH');

//Adicionando elementos no array no Inicio
listaAlunos.unshift('Enzo');
console.log(listaAlunos);

//Para remover um elemento do inicio do array
listaAlunos.shift();

//Exemplo utilizando ForEach
listaAlunos.forEach(function(aluno){
    console.log(`O aluno da turma DS2M é: ${aluno}`);
});

//Pesquisando valores em um array e retornando seu indice 
    // se retornar -1, significa que nao foi encontardo o item 
let indice = listaAlunos.indexOf('Ana');
console.log(indice);
console.log(listaAlunos);

//Criauma copia do array em uma nova variavel que sera o array
const listaNovoAlunos = listaAlunos.slice();
console.log(listaNovoAlunos);

//Removendo elementos a partir de um indice
    //Remove somente o item escolhido
    listaAlunos.splice(indice, 1);

    //Removendo todos os itens a partir do escolhido
listaAlunos.splice(indice);
    //Remove todos os itens a partir do primeiro até o item escolhido
listaAlunos.splice(0, indice +1);
console.log(listaAlunos);

//Adicionando um array de itens dentro de outro array
listaNovoAlunos.push(listaDisciplinas);
//console.log(listaNovoAlunos);

console.log('Trabalhando array dentro de array');
//Lista de array principal e todos os sub arrays existentes
console.log(listaNovoAlunos);
//Exibe o primeio elemento do array contido dentro da linha 8 do array principal 
console.log(listaNovoAlunos[8][0]);
//Exemplo d/ como buscar um elemento de um array que esta dentro de outro array
console.log(listaNovoAlunos[8].indexOf('Banco de dados'));

//Trabalhando com JSON
console.log(`#### JSON ####`);
const listaContatos = [{
    nome    : 'Manuel das Flores',
    telefone: '11 956631709',
    email   : 'manuel@gmail.com',
    carros  : [
        {
            placa : 'abc-0696',
            modelo: 'Corsa',
            cor   : 'prata'
        },
        {
            placa : 'drp-0069',
            modelo: 'Savero',
            cor   : 'rosa'
        }
    ]
},{
    nome    : 'Larissa Soares',
    telefone: '11 967782345',
    email   : 'larissa@gmail.com'
}]

console.log(`Nome do contato: ${listaContatos[0].nome}`);
console.log(`O email cadastrado é: ${listaContatos[0].email}`);

//Adiciona um novo elemento no JSON em execução
listaContatos[0].celular = '944567890';

//Remove um elemento do JSon
delete(listaContatos[0].telefone)

console.log(listaContatos);

console.log('Placa:' + listaContatos[0].carros[0].placa);