(function(){
	
	function myFunction() {
		var number1 = 10;
		var number2 = 20;
		
		console.log( 'Na função `myFunction`, o primeiro número é', number1 );
		console.log( 'Na função `myFunction`, o segundo número é', number2 );

		return number1 + number2;   
	}
	
	myFunction();
	
	function myFunction2() {	
		var number1 = 10;
		var number2 = 20;
		console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
		
		var sum = function sum() {
			return number1 + number2;
		};

		return sum();
	}

	myFunction2();
	
	function myFunction3() {
	
		var number1 = 40;
		var number2 = 50;
		
		function sum() {
			return number1 + number2;
		};
		
		console.log( 'A soma de 40 e 50 é igual a', sum() );
		console.log( 'Na função myFunction3, number1 é igual a', number1 );
		
		return sum();
	}

	myFunction3();
})();


/*
No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
- Crie uma função `calculator` que recebe dois valores (números)
por parâmetro.
- Essa função deve retornar uma outra função, que recebe um parâmetro
chamado `callback`.
- Esse `callback` será uma função, que passaremos por parâmetro ao invocar
o retorno de `calculator`.
- O retorno dessa segunda função deve ser a função de `callback` passada
por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
que foram passadas para a primeira função `calculator`.
*/
// 

function calculator(num1, num2){
	return function(callback){		
		return callback(num1,num2);
	}		
}


/*
Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
passando dois números por parâmetro.
*/
// 

var sum = calculator(10,2);

/*
Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
`calculator`. E essa função espera um parâmetro `callback`. O `callback`
tem dois parãmetros disponíveis, que são os números que você acabou de passar
para a chamada à `calculator` acima.
- Mostre no console o retorno da invocação de `sum`, passando por parâmetro
uma função anônima que irá retornar a soma dos dois números que essa função
anônima tem como seus argumentos.
*/

var vFinal = sum(function(num1,num2){
		return num1 + num2;
	});

console.log( 'O resultado da soma é:' + vFinal );