/* let's initialize the fact variable to 1*/
function factorial(n) {
	let fact = 1;
	/* let's loop only if the n is > 1 else  return result 1*/
	if (n > 1) {
		for (let i = 2; i <= n; i++) {
			fact *= i;
		}
	}
	return fact;
}
function sumNumbers(n) {
	let sum = 0;
	while (n) {
		sum += Math.floor(n % 10);
		n /= 10;
	}
	return sum;
}

console.log(sumNumbers(factorial(10)));
console.log(sumNumbers(factorial(100)));
