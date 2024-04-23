function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));  
console.log(isPalindrome("level"));   
console.log(isPalindrome("madam"));   