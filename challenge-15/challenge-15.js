(function () {
  'use strict'

  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function getFullName() {
      return this.name + ' ' + this.lastName;
    };
    this.getAge = function getAge() {
      return this.age;
    };
    this.addAge = function addAge() {
      this.age += arguments[0];
      return this;
    };
  }

  var lucas = new Person('Lucas', 'Gabriel', 26);
  var apollo = new Person('Apollo', 'Damascena', 4);
  var simone = new Person('Simone', 'Lira', 24);

  console.log('Novas pessoas criadas à partir de Person:', lucas
  .getFullName() + ' ' + lucas.getAge() + ' anos');
  console.log('Novas pessoas criadas à partir de Person:', apollo
  .getFullName() + ' ' + apollo.getAge() + ' anos');
  console.log('Novas pessoas criadas à partir de Person:', simone
  .getFullName() + ' ' + simone.getAge() + ' anos');

  console.log(lucas.getFullName() + ' agora tem ' + lucas.addAge(1).getAge() + ' anos');
  console.log(apollo.getFullName() + ' agora tem ' + apollo.addAge(1).getAge() +
    ' anos');
  console.log(simone.getFullName() + ' agora tem ' + simone.addAge(1).getAge() +
    ' anos');

}());
