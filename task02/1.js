function reverseNumber(num) {
   
    let reversed = num.toString().split('').reverse().join('');
   
    return parseInt(reversed, 10);
}

// Example usage
let x = 32243;
console.log(reverseNumber(x)); 
