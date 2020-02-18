/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(arg){
    if (arg){
        return true;
    }else{
        return false;
    }
} 

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);
isTruthy("");
isTruthy('');


/*
Invoque a função criada acima passando como parâmetro alguns valores `truthy`.
*/
isTruthy({});
isTruthy(1);
isTruthy([]);
isTruthy('Lucas');
isTruthy(function(){});



/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'FIAT',
    modelo: 'Uno',
    placa: 'XXX123',
    ano: 2011,
    cor: 'vermelho',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/


function mudarCor(novaCor){
    carro.cor = novaCor;
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

function obterCor(){
    return pessoa.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

function obterModelo(){
    return carro.modelo;
}


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

function obterMarca(){
    return carro.marca;
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

function obterMarcaModelo(){
    return 'Esse carro é um ' + obterMarca() + ' ' + obterMarcaModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = function(numeroPessoas){
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    var pluralOuSingular = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';

    if(carro.quantidadePessoas === carro.assentos &&
        totalPessoas >= carro.assentos){
        return 'O carro já está lotado!';
    }

    if(totalPessoas > carro.assentos){
        return 'Só cabem mais ' + quantasPessoasCabem + ' ' + pluralOuSingular +  '!';
    }


    carro.quantidadePessoas += numeroPessoas;

    return 'Já temos ' + totalPessoas + ' pessoas no carro.';
}