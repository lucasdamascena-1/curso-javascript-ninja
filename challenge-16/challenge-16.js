(function () {
  'use strict'

  var name = 'Lucas';

  for (var i = 0, len = name.length; i < len; i++) {
    console.log(name.charAt(i) + ' é a ' + (i + 1) + 'a letra do meu nome');
  }

  var fullName = 'lucas-gabriel-damascena';
  console.log(fullName);

  var newFullName = fullName.split('-').map(function (name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  console.log(newFullName.join(' '));

  var arrAmigos = ['Joao', 'Ana', 'Maria', 'Roberto', 'Luciano'];

  var frase = arrAmigos.reduce(function (acumulado, atual, index) {

    var separador = arrAmigos.length - 1 === index ? ' e ' : ', ';

    return acumulado + separador + atual;
  }).concat(' são meus amigos');

  console.log(frase);

  console.log('Roberto'.replace('to', 'ta'));

  console.log('\nParte de uma string: ' + 'Fernando'.substring(8, 3));

  var meuNome = 'Lucas';

  var meuNovoNome = [];

  for (var i = 0, len = meuNome.length; i < len; i++) {
    meuNovoNome.push(i % 2 === 0 ? meuNome[i].toLowerCase() : meuNome[i]
      .toUpperCase());
  }

  console.log(meuNovoNome.join(' '));
  
}());