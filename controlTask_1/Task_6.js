function getLatestUnique(array, compare) {
    let uniqueItems = [];

    for (let i = array.length - 1; i >= 0; i--) {
        let isDuplicate = uniqueItems.some(item => compare(array[i], item));

        if (!isDuplicate) {
            uniqueItems.unshift(array[i]); 
        }
    }

    return uniqueItems;
}

function compId(obj1, obj2) {
    return obj1.id === obj2.id;
}

const data = [
    { id: 1, name: "Liza" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Alex" },
    { id: 1, name: "Liza " },
    { id: 2, name: "Andrey " }
];

console.log(getLatestUnique(data, compId));
