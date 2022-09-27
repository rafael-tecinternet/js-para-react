/* 07-operador-rest.js
Usando o ... operador rest()
Na prática, usuamos para mesclar uma lista de argumentos/parâmetros para uma função */

/* function ordernar(...parametros){ //rest
    return parametros.sort();  função para classificar 
} */
const ordernar = (...parametros) => parametros.sort();
console.log(ordernar('Rafael', 'Lucas', 'Gabriel'));
console.log(ordernar('Rush', 'Pink Floyd', 'Slayer', 'Nightwish', 'Dream Theaster'));
console.log('============================================================');

const cursos = ['CSS', 'React', 'Angular', 'Vue', 'PHP']
console.log(cursos);
console.log(ordernar(...cursos)); //spread
console.log('============================================================');

/* function soma(...valores){
    let total = 0;
    for(let valor of valores){
        total += valor;
    }
    return total;
} */

const soma = (...valores) => {
    let total = 0;
    for(let valor of valores){
    total += valor;
    }
    return total;
}
console.log(soma(10, 20));
console.log(soma(10, 20, 5, 56));
