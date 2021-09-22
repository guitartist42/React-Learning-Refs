const number = 1; //primitive type
const num2 = number; //creates real copy of number, so num2 is also primitive type

//numbers, strings, booleans, etc are primitive types
//objects and arrays are reference types

const person = {
    name : 'Max'
};

//const secondPerson = person; this would print Manu

const secondPerson = {
    ...person
};

person.name = 'Manu';
console.log(secondPerson); //now we print Max despite changing person.name to Manu

 //object person is stored in memory, and secondPerson just points at it,
 //not a true copy of the value, but a reference.
 //pointer is copied.

 //we can copy the object in an immutable way by using the spread operator
