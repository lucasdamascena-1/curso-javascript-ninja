/*
Crie um array com 5 items (tipos variados).
*/
//

var arr = ['Lucas', 0, true, null, {propriedades: 'Teste'}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(item){
	arr.push(item);
	return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// 

addItem([4,5,3]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// 

console.log('O segundo elemento do segundo array é ' + arr[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// 

console.log('O primeiro array tem ' + arr.length + ' itens');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// 

var contador = 10;

while(contador <= 20){
	
	if(contador % 2 === 0){
		console.log(contador);
	}
	
	contador++;
}