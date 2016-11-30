function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
}

var people = [
    new Person('Paul','Magee',34), 
    new Person('Karen','Gallagher',19), 
    new Person('Neal','Simpson',39),
    new Person('Cormac','O\'Dowd',35), 
    new Person('Paul','Kelly',35), 
];

var totalNumberOfPeople = 0;
var totalAge = 0;

people.forEach(function(person) {
    console.log('Name: ' + person.fullName() + ', age:' + person.age);
    totalNumberOfPeople++;
    totalAge += person.age;
});

console.log('\n');
console.log(totalNumberOfPeople + ' people, with a combined age of ' + totalAge);




