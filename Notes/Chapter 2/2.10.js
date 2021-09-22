const numbers = [1,2,3];

const doubleNumArray = numbers.map((num)=> {
    return num*2;
});
//map returns a real new array, not a reference

console.log(numbers); //unchanged because map makes a copy
console.log(doubleNumArray);