function getPrimesUpTo(limit) {
    let primes = [];
    
    // 1 is not a prime number, so we start at 2
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        
        // Check for factors up to the square root of the number
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false; // Found a factor, not prime
                break;
            }
        }
        
        if (isPrime) {
            primes.push(num);
        }
    }
    
    return primes;
}

console.log(getPrimesUpTo(100));
