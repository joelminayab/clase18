// var arr = [4,62,8,2,1,54,6]


// for (var i = Things.length - 1; i >= 0; i--) {
// 	Things[i]
// }


// 9  / 7 	/1

// 10 / 9 	/ 7

// 7 / 10 	/ 9

// 1		/ 10


// 9  / 7 	/ 7   / 7 / 7

// 10 / 10 / 9   / 8 / 8

// 7 / 9 	/ 10  / 10 / 9
 
// 8				9  / 10




// 10, 9, 3, 8, 7, 5 	-> 3, 5, 7, 8, 9, 10




// (10, 9) / 3 / (8, 7) / (5)


var arr = [10, 9, 3, 8, 7, 5]

function orderSort(x, y) {
	// console.log('x: ', x)
	// console.log('y: ', y)

	// [10, 9, 3, 8, 7, 5]

	if(x == y) {
		var ret = [arr[x]]
		// console.log()
		console.log('x: ', x, 'y: ', y, 'ret: ', ret)
		return ret
	}

	var z = Math.floor((x+y)/2)
	// var med =() arr[z]

	var a = orderSort(x, z) 		// [3, 9, 10]
	var b = orderSort(z+1, y) 	// [5, 7, 8]
	
	// console.log('x: ', x)
	// console.log;('y: ', y)
	console.log('x: ', x, 'y: ', y, 'a: ', a)
	console.log('x: ', x, 'y: ', y, 'b: ', b)

	var c = [] //

	var i = 0
	var j = 0

	while (i<a.length && j<b.length) {

		if (a[i] < b[j]) {
			c.push(a[i])
			i++
		} else {
			c.push(b[j])
			j++
		}
	}


	if(i<a.length) {
		while(i<a.length) {
			c.push(a[i])
			i++
		}
	}
	if(j<b.length) {
		while(j<b.length) {
			c.push(b[j])
			j++
		}
	}

	
	console.log('x: ', x, 'y: ', y, 'c: ', c)

	return c
}

console.log('sort: ', orderSort(0, 5))
























