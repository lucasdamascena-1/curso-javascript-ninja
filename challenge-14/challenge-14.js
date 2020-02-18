(function () {

    var numberObjects = [];

    for (var i = 1; i <= 10; i++) {
        numberObjects.push({
            number: i
        });
    }

    console.log('Number Objects Array:', numberObjects);

    var justNumbers = numberObjects.map(function (item) {
        return item.number;
    });

    console.log('\nJust Numbers:', justNumbers);


    var justMod2Or3 = justNumbers.filter(function (item) {
        return item % 2 === 0 || item % 3 === 0;
    });

    console.log('\nJust module of division by 2 or 3:', justMod2Or3);

    var operation = justMod2Or3.reduce(function (acumulado, atual) {
        return (acumulado + 1) * atual;
    }, 0);

    console.log('\nOperation:', operation);

    var operation2 = justMod2Or3.reduceRight(function (acumulado, atual) {
        return (acumulado + 1) * atual;
    }, 0);

    console.log('\nOperation 2:', operation2);

    var name = ['lu', 'cas'];

    var reduceP = name.reduce(function (acumulado, atual) {
        return acumulado + 'P' + atual;
    }, '');

    console.log('\nSeu nome na língua do "P":', reduceP);


    var inversedName = name.reduceRight(function (acumulado, atual) {
        return acumulado + 'P' + atual;
    }, '');

    console.log('\nInversed Name:', inversedName);

    console.log('\nNumber objects', numberObjects.length);

    if(numberObjects.indexOf({number : 2}) > -1){
        console.log('\nExiste um { number: 2 } em numberObjects');
    }else{
        console.log('\nNão existe um { number: 2 } em numberObjects');
    }
    
    if(numberObjects.lastIndexOf({number : 2}, 2) > -1){
        console.log('\nExiste um { number: 2 } em numberObjects');
    }else{
        console.log('\nNão existe um { number: 2 } em numberObjects');
    }
    
    if(Array.isArray(justMod2Or3)){
        console.log('\njustMod2Or3 é um array.');
    }
}());