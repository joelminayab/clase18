
function fibo(n) {

	if(n == 0) return 0
	if(n == 1) return 1

	return fibo(n-1) + fibo(n-2)
}


console.log(fibo(0))
console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(7))

// fibo(0) // 0
// fibo(1) // 1
// fibo(2) // 1
// fibo(3) // 2
// fibo(4) // 3
// fibo(5) // 5
// fibo(6) // 8
// fibo(7) // 13

// fibo(n) = fibo(n-1) + fibo(n-2)

