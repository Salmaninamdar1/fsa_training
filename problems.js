// given a number print whether it's a prime
// number exactly divisible by 2 (1, n)
// ex: 1,3,5,7,11
// 4: 1,2,4
// 16: 1 to 16, 4 count:3
// %
// second function
function isFactor(n, i) {
    return n % i === 0;
}

// firstly exicute this function then
function isPrime(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if (isFactor(n, i)) count++;
        // here we are passing parameter to the second fuction
    }

    return count === 2;

    // // if (count === 2) return true;
    // // return false;
    // if (count === 2) return true;
    // else return false;
}
console.log("16 is a prime no? ",isPrime(16));
var res2 = isPrime(5);
console.log("is 5 prime no ? = ",res2);
// isPrime(1);  
// isPrime(2);
