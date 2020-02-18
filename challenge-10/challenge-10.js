(function(){
	var five = 5;
	console.log( five + ' é número?', typeof five === 'number' );
	
	var concat = '10' + '10';
	console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );
	
	
	var operation = {
		'+' : function(x,y){return x+y},
		'-' : function(x,y){return x-y},
		'*' : function(x,y){return x*y},
		'/' : function(x,y){return x/y},
		'%' : function(x,y){return x%y}
	};

	function isOperatorValid(operator){
		return !!operation[operator];
	}

	function calculator(operator){		
		if(!isOperatorValid(operator)){
			return false;
		}		
		return function(x,y){
			if( typeof x !== 'number' || typeof y !== 'number') {
				return false;
			}
			
			return operation[operator](x,y);
		}
	}


	function showOperationMessage(operator, number1, number2){ 	
		return 'A operação ' + number1 + ' ' + operator + ' ' + number2 + ' = ';
	}

	function showErrorMessage(operator, number1, number2){
		return 'A operação ' + operator + ' não é permitida.';
	}
	
    var number1 = 0;
    var number2 = 0;
    var operatorSignal;
    operatorSignal = '+'
    var sum = calculator(operatorSignal);

    if (sum) {
        number1 = 7;
        number2 = 5;

        console.log(showOperationMessage(operatorSignal, number1, number2), sum(number1, number2));
    } else {
        console.log(showErrorMessage(operatorSignal))
    }
	
})();






