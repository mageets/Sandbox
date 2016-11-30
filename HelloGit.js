var people = [
    {'name':'Paul', 'age':34}, 
    {'name':'Karen', 'age':34},
    {'name':'Neal', 'age':39},
    {'name':'Cormac', 'age':35},
    {'name':'Edward', 'age':29}
];
// people.forEach(function(element) {
//     console.log('Hello ' + element.name + ' You are ' + element.age);
// }, this);

var totalNumberOfPeople = 0;
var totalAge = 0;

people.forEach(function(person) {
    console.log('Hello. Here are your details...')
    for (var prop in person) {
        console.log(prop + ':' + person[prop]);
        if (prop === 'age') {
            totalAge += person[prop];
        }
    }
    console.log('\n');
    totalNumberOfPeople++;
});
console.log(totalNumberOfPeople + ' people, with a combined age of ' + totalAge);

// var person = {name:'Paul', age:34};
// for (var key in person) {
//     console.log(person[key]);
// }




