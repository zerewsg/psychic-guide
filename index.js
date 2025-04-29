// function factorial(n) {
//     if (n < 0) return -1;
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1)
// }

// console.log(factorial(5)); 



// function sumDigits(num) {
//     num = Math.abs(num); 
//     if (num < 10) return num;
//     return num % 10 + sumDigits(Math.floor(num / 10));
// }

// console.log(sumDigits(1234))



// function printNumbers(n) {
//     if (n < 1) return;
//     console.log(n);
//     if (n === 1) {
//         console.log(n);
//         return;
//     }
//     printNumbers(n - 1);
//     console.log(n);
// }
// printNumbers(3)



// function isPalindrome(str) {
//     str = str.replace(/\s/g, '').toLowerCase();
    
//     if (str.length <= 1) return true;
//     if (str[0] !== str[str.length - 1]) return false;
//     return isPalindrome(str.slice(1, -1));
// }

// console.log(isPalindrome(" А роза упала на лапу азора")); 
// console.log(isPalindrome("hello"))



// function factorial(n) {
//     if (n < 0) return -1;
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); 
// console.log(factorial(-3))