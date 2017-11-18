console.log('hi binarySearch!')

var arr = [0, 3, 7, 9, 12, 15, 21]

function binarySearch(num) {
	// console.log(num)
	var x = 0
	var y = arr.length

	while(x<y) {	

		var z = Math.floor((x+y)/2)
		var med = arr[z]

		// console.log(z)

		if( num == med ) return z

		if(num<med) {
			// left
			y = z
		} else {
			// right
			x = z+1
		}
 	}

 	if( num == arr[x] ) return x

 	return -1
}

console.log(binarySearch(0))
console.log(binarySearch(21))
console.log(binarySearch(9))
console.log(binarySearch(13))


// function binarySearch(num, x, y) {

// 	if(x == y) {
// 		if(arr[x] == num) return x
// 		return -1
// 	}

// 	var z = Math.floor((x+y)/2)

// 	var med = arr[z]

// 	if(num <= med) {
// 		// left
// 		return binarySearch(num, x, z)
// 	} else {
// 		return binarySearch(num, z+1, y)
// 	}
// }

// console.log(binarySearch(0, 0, arr.length - 1))
// console.log(binarySearch(21, 0, arr.length - 1))
// console.log(binarySearch(9, 0, arr.length - 1))
// console.log(binarySearch(12, 0, arr.length - 1))
// console.log(binarySearch(7, 0, arr.length - 1))
// console.log(binarySearch(13, 0, arr.length - 1))


// binarySearch(7)		// 2
// binarySearch(15)	// 5
// binarySearch(10)	// -1


// 6,7,8,9

// x = 6

// y = 10