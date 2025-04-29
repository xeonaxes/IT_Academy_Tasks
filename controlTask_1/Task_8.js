async function runPromisesConcurr(functions) {
    return Promise.all(functions.map(fn => fn()));
}

const asyncFun1 = () => new Promise(resolve => setTimeout(() => resolve('test 1'), 1));
const asyncFun2 = () => new Promise(resolve => setTimeout(() => resolve('test 2'), 2));
const asyncFun3 = () => new Promise(resolve => setTimeout(() => resolve('test 3'), 3));

runPromisesConcurr([asyncFun1, asyncFun2, asyncFun3])
    .then(results => console.log(results))  
    .catch(error => console.error(error));
