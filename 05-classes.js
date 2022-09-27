class Pessoa{
    /* Propriedades */
    nome = 'sem nome';
    genero = 'não  informado';
    idade;
    /* Métodos */
    mostraGenero(){
        console.log(this.genero);
    }
    mostraNome(){
        console.log(this.nome);
    }
    mostraIdade(){
        console.log(this.idade);
        /* if(this.idade > 18){
            console.log('Maior de idade');
        } else {
            console.log('Menos de idade');
        } */
        /* if / else ternário */
        return this.idade >= 18 ?  'Maior de idade' :  'Menor de idade';
    }
}
class Aluno extends Pessoa{
    /* Propriedades */
    matricula;
    curso;
    /* Métodos */
    mostraDados(){
        console.log(this.matricula);
        console.log(this.curso);
        /* Métodos da super classe */
        this.mostraNome();
        this.mostraGenero();
        // this.mostraIdade();
    }
}

/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Rafael';
umaPessoa.genero = 'Masculino';
console.log(umaPessoa);

let outraPessoa = new Pessoa;
outraPessoa.nome = 'juca';
console.log(outraPessoa);

/* Objeto herdando recursos */
let aluno = new Aluno;
aluno.nome = 'Duc';
aluno.genero = 'Masculino';
aluno.matricula = '123abc';
aluno.curso = 'JS para React';
aluno.idade = 25;
/* console.log(aluno); */
aluno.mostraDados();
console.log(aluno.mostraIdade());

