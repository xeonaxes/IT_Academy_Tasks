function formatToCurrency(values) {
    if (Array.isArray(values)) {
       
        const hasInvalidValue = values.some(value => isNaN(value) || typeof value !== "number" && !/^-?\d+(\.\d+)?$/.test(value));
        if (hasInvalidValue) {
            return "Ошибка: Некорректное число!";
        }

        return values
            .map(value => {
                const number = parseFloat(value);
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(number);
            })
            .join(" + "); 
    }

    if (isNaN(values) || typeof values !== "number" && !/^-?\d+(\.\d+)?$/.test(values)) {
        return "Ошибка: Некорректное число!";
    }

  
    const number = parseFloat(values);

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}

console.log(formatToCurrency(5678));          
console.log(formatToCurrency("123456.789"));  
console.log(formatToCurrency("qwer"));       
console.log(formatToCurrency("9999"));       
console.log(formatToCurrency("12.3abc"));     
console.log(formatToCurrency(["100", "200", "300"])); 
console.log(formatToCurrency(["123", "abc"])); 
