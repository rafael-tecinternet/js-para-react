/* map (mapeia, transformar em outra coisa)
Passa pelos elementos de um array e realiza operações neles através de uma função (callback) 
gerando um novo array. */
const numeros = [10, 20, 30, 40, 50];
/* const numerosDobrados = numeros.map(function(numero){
    return numero * 2;
}); */
const numerosDobrados = numeros.map(numero => numero * 2);
/* const numerosDobrados = numeros.map(dobra);
function dobra (valor) {
    return valor * 2;
} */

const nomes = ['rafael', 'lucas', 'gabriel', 'palloma'];
const nomeMaiusculo = nomes.map(nome => nome.toUpperCase());
/* const nomeMaiusculo = nomes.map(maiuscula);
function maiuscula (nome){
    return nome.toUpperCase();
} */

/* filter(filtra/remove)
Retorna um array de valores de acordo com o resultado do filtro aplicado */
const vendas = [1000, 1500, 2000, 10000, 500];
const meta = 1000;
const vendasAcimaDaMeta  = vendas.filter(venda => venda > meta);

const alunos = ['Rafael', 'Gabriel', 'Lucas', 'Palloma', 'Antônia', 'Marcelo', 'Matheus'];
const resultados = alunos.filter(aluno => {
    /* if(aluno.charAt(0) === 'M'){ */
    if(aluno.startsWith('M')){
        return aluno;
    }
});
const resultado = alunos.filter(aluno => aluno.startsWith('M') ?? aluno );

const cursos = [
    {id: 1, titulo: 'HTML5 e CSS3', categoria:'Front-End', preco: 500},
    {id: 2, titulo: 'Js e React', categoria:'Front-End', preco: 800},
    {id: 3, titulo: 'React Native', categoria:'Mobile', preco: 1000},
    {id: 4, titulo: 'Photoshop', categoria:'Desing', preco: 400},
    {id: 5, titulo: 'PHP e MySQL', categoria:'Back-End', preco: 600},
    {id: 6, titulo: 'Flutter', categoria:'Mobile', preco: 900}
];
const cursosFront = cursos.filter(curso => curso.categoria === 'Front-End');

/* const titulos = cursosFront.map(curso => curso.titulo);
console.log(titulos);  
const titulosDosCursosFront = cursos
                                .filter(curso => curso.categoria == 'Front-End')
                                .map(curso => curso.titulo);
console.log(titulosDosCursosFront);      */                           

/* reduce (reduzir a unico valor/resultado) */
const valores = [10, 50, 2000, 5, 25];
const soma = valores.reduce((acumulador, valor) => {
    return acumulador + valor;
}, 0); /* 0 = ponto de oartida do reduce */

/* console.log(valores);
console.log(soma);
 */
/* Filter e Reduce */
const somaCursosMobile = cursos
                        .filter(curso => curso.categoria == 'Mobile')
                        .reduce((acumulador, curso) => {return acumulador + curso.preco}, 0);
console.log(somaCursosMobile);