function sortStringAlphabetically(inputStr) {
    let charArray = [...inputStr]; 
    charArray.sort(); 
    return charArray.join(''); 
}

// Example usage
let testString = "webmaster";
console.log(sortStringAlphabetically(testString)); 
