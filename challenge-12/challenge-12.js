(function(){
	
	var person = {
		name : 'Lucas',
		lastname : 'Gabriel',
		age: 26
	};
	
	console.log(Object.keys(person));
	
	var books = [];
	
	books.push(
	{
		Livro01: {
			name: 'A',
			pages: 50
		}
	});
	
	books.push(
	{
		Livro02: {
			name: 'B',
			pages: 100
		}
	});
	
	
	books.push(
	{
		Livro03: {
			name: 'C',
			pages: 150
		}
	});
	
	console.log('\nLista de livros: ' + books);
	
	var lastBook = books.pop();
	console.log('\nLivro que está sendo removido:'  + lastBook);
	
	console.log( '\nAgora sobraram somente os livros:' );
	console.log(books);
	
	books = JSON.stringify(books);
	console.log( '\nLivros em formato string:' + books);
	
	books = JSON.parse(books);
	console.log( '\nAgora os livros são objetos novamente: ' + books);
	
	for(var i=0; i < books.length; i++){
		
		for(var prop in books[i]){
			console.log(prop + ': ' + books[i][prop]);
		}
	}
	
	var myName = ['L','U','C','A','S'];
	console.log('\nMeu nome é: ' + myName.join(''));
	console.log( '\nMeu nome invertido é: ' + myName.reverse());
	console.log( '\nMeu nome invertido é: ' + myName.sort());	
}());


