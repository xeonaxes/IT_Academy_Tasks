function transformObject(array, transform) {
    let result = {}; 
    
    for (let i = 0; i < array.length; i++) {
        let key = array[i]; 
        let value = transform(key); 
        result[key] = value; 
    }
    return result; 

}
let strings = ["test1", "test2", "test3"];
let transform = (str) => str.length; 

console.log(transformObject(strings, transform));

