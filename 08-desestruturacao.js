/* Desestruturação (Destructuring)
Extrair dados facilmente de um array um objeto e armazená-lo em variáveis/constantes */

/* Usando desestruturação em arrays */
const [a, b] = ['Rafael', 'Gisele'];
console.log(a);
console.log(b);
console.log('============================================================');
const alunos = ['Rafael', 'Gisele', 'Lucas'];
const [rafael, gisele, lucas] = alunos;
console.log(rafael);
console.log(gisele);
console.log(lucas);
console.log('============================================================');
const unidades = ['Penha', 'Carrão', 'Tatuapé', 'Itaquera'];
const [penha, carrao, ,itaquera] = unidades;/* pulando tatuapé */
console.log(penha);
console.log(carrao);
console.log(itaquera);
console.log('============================================================');
/* Usando desestruturação em objetos */
const{nome, cidade} = {nome: 'fulano', idade: 18, cidade: 'São Paulo'};
console.log(nome);
console.log(cidade);
console.log('============================================================');
const dados = {
    nome: 'Rafael',
    curso: 'Java',
    nascimento: '31/10/1994'
};
/* definindo um apelido para nome */
const {nome: aluno, curso} = dados;
console.log(aluno);
console.log(curso);
