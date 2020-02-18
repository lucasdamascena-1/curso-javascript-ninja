(function(){
	
	
	var arrString = ['Teste'];
	console.log( 'O array em formato de string é:' + arrString.toString());
	
	var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
	var sudeste = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Espírito Santo'];
	
	var brasil = sul.concat(sudeste);
	console.log( '\nAlguns Estados do Brasil: ' + brasil);
		
	brasil.unshift('Amazonas', 'Roraima', 'Amapá', 'Pará', 'Tocantins', 'Rondônia', 'Acre');	
	console.log( '\nMais Estados do Brasil: ' + brasil);
	
	var estRemovido = brasil.shift(0);
	console.log( '\nEstado removido:' + estRemovido );
	
	var newBrasil = [];
		brasil.forEach(function(item,index){
		newBrasil.push({
			id: index,
			estado: item
		});
	});
	
	console.log('\nTodos os Estados do Brasil tem mais de 7 letras?');
	
	var every = brasil.every(function(item){
		return item.length > 7;
	});
	
	console.log(every? 'Sim' : 'Não');
	
	var some = brasil.some(function(item){
		return item === 'Ceará';
	});
	
	console.log(some? 'Sim' : 'Não');
	
	var nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
	console.log(nordeste);
	
	var newSudeste = brasil.splice(9,13);
	console.log(newSudeste);
	
	console.log( '\nAlguns estados do Brasil:' + brasil);
	
	brasil = brasil.concat(nordeste);
	
	var newBrasil = [];
	brasil.forEach(function(item ,index){
		newBrasil.push({id: index, estado: item});
	});
	
})(); 