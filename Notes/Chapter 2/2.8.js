//destructuring allows you to pull out single elements or properties
// and store them into vairables.

//array destructuring:

[a,b] = ['Hello', 'Max'];
console.log(a);
console.log(b);

const numbers = [1,2,3];

[num1, , num3] = numbers;

console.log(num1, num3);

//object destructuring e.g
//  {name} = {name: 'Max', age:28}
//  console.log(name)
//  console.log(age)

