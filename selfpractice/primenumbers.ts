function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    
    // 2 is the only even prime number
    if (num === 2) return true;
    
    // Exclude all other even numbers
    if (num % 2 === 0) return false;
    
    // Check odd factors up to the square root of the number
    const boundary = Math.sqrt(num);
    for (let i = 3; i <= boundary; i += 2) {
        if (num % i === 0) {
            return false; // Found a factor, so it is not prime
        }
    }
    
    return true; // No factors found, it is prime
}

// Example usage:
console.log(isPrime(17)); // true
console.log(isPrime(23));  // false
console.log(isPrime(29));  // false
