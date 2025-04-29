function sumDeepArray(array) {
    let sum = 0;

    for (const item of array) {
        if (Array.isArray(item)) {
           
            sum += sumDeepArray(item);
        } else if (typeof item === "number") {
            
            sum += item;
        }
    }

    return sum;
}

console.log(sumDeepArray([1, 2, [3, 4], 5])); 
console.log(sumDeepArray([1, [2, [3, [4, 5]]]])); 
console.log(sumDeepArray([[1, "a", [2, "b", [3, null]]], 4])); 
console.log(sumDeepArray([[[[[[[1]]]]]], 2, 3, [4, [5]]])); 
console.log(sumDeepArray([])); 
