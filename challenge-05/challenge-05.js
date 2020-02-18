/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var arr = ['Lucas', 0, true, null, {propriedades: 'Teste'}, [1,2,3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function receberArray(arr){
    return arr;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

var retorno = receberArray(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function novaFuncao(arr, index){
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// 

var novaVariavel = arr;

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 

novaFuncao(novaVariavel, 3);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(nomeLivro){
    var obj = {
        
       'Livro_01': {
            quantidadePaginas: 50,
            autor: 'Autor A',
            editora: 'Editora A'
        },

        'Livro_02': {
            quantidadePaginas: 60,
            autor: 'Autor B',
            editora: 'Editora B'
        },

        'Livro_03': {
            quantidadePaginas: 70,
            autor: 'Autor C',
            editora: 'Editora C'
        }
    };

    if(nomeLivro === undefined){
        return obj;
    }

    return obj[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

book();