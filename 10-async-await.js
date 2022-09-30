/* Trabalhando com comunicação assíncrona (ajax) */
import fetch from 'node-fetch';
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(error => console.log('Erro na operação: '+error.errno));

/* Sintaxe usando função e async/await (depende de um resultado de uma comunicação assíncrona */ 
/* async function acessaApi(){ */
const acessaApi = async () =>{
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const dados = await resposta.json(); 
        console.log(dados);           
    } catch (error) {
        console.log('Erro na operação: '+error.errno);    
    }
}
acessaApi();