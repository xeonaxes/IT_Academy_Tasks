function squareDelay(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number * number);
        }, 100);
    });
}

new Promise(resolve => resolve(2))
    .then(squareDelay)
    .then(squareDelay)
    .then(squareDelay)
    .then(result => console.log("Результат:", result))
    .catch(error => console.error("Ошибка:", error));
