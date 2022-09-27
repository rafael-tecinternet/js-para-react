/* Usando o ... como operador spread (espalhar)
Na prática, copiamos o conteúdo de um array (bandas) para dentro de outro (maisBandas) 
IMUTABILIDADE (não muda)*/
const bandas = ['Rush', 'Dream Theater', 'Slayer', 'Black Sabbath'];
const maisBandas = [...bandas, 'Van Halen', 'Deep Purple'];
console.log(maisBandas);
console.log('========================================');
/* Spread com objeto */
const dados = {
    nome: 'Rafael',
    idade: 15
};
const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
    idade: 30 /* sobrescrevendo o valor somente da propridedade idade */
};
console.log(novosDados);
console.log('Idade atualizada: '+novosDados.idade);
console.log(dados);
