function removesIncorrVal(array) {
    
    let filteredArr = array.filter(Boolean);
    

    return filteredArr.sort((a, b) => {
        if (typeof a === "number" && typeof b === "number") {
            return b - a; 
        }
        return String(b).localeCompare(String(a)); 
    });
}


console.log(removesIncorrVal([null, 0, false, 100, "", "qwert"]));
console.log(removesIncorrVal(["qwert", "", undefined, 1, "zxcv", false]));
console.log(removesIncorrVal([null, 0, "1", "", NaN, undefined, true]));

