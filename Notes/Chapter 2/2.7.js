const filter = (...args) => {
    return args.filter(el => el === 1);
    //... are rest, merges arguments into an array,
    //filter is an array method
    //get element "el" return true if'=>' element is equal to 1
    //=== checks for type and value equality
}

console.log(filter(1, 2, 3));