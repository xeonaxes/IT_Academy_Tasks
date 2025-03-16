function checkPalindrome(str) {

    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");


    return cleanedStr === cleanedStr.split("").reverse().join("");
}


console.log(checkPalindrome("qwerttrewq")); 
console.log(checkPalindrome("qw e rt, trewq!"));  
console.log(checkPalindrome("qwert")); 
