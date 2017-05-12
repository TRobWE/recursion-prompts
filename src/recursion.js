// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
function factorial(n) {
	if(n === 0) {
		return 1;
	}
	if(n < 0) {
		return null;
	}
	return n * factorial(n - 1);
}

console.log(factorial(3));

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
// var sum = function(array) {
//     // access elements in given array
//     // add all elements in given array
//     // determine base case for when all elements have been added
//     return array.length === 1 ? array[0] : array[0] + sum(array.slice(1));
// };

let sum = function(array) {
	if(array.length === 1) {
		return array[0];
	}
	if(array.length === 0) {
		return 0;
	}
	return array[0] + sum(array.slice(1));
};

console.log(sum([1, 2, 3, 4, 5, 6]));

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	let sum = 0

	array.forEach(function(val, i, array) {
		if(Array.isArray(val)) {
			sum += arraySum(val);
		}
		else {
			sum += val ;
		}
	});
	return sum;
};

// 4. Check if a number is even.
let isEven = function(n) {
	if(n === 0) return true;
	else if(n === 1) return false;
	else if(n < 0) return isEven(-n);
	else return isEven(n - 2);
};

console.log(isEven(2001));
console.log(isEven(2000));

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {
	if(n === 0) return 0;
	else if(n < 0) n += 1;
	else n -= 1;
	return n + (sumBelow(n));
};

console.log(sumBelow(10));

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
let range = function(x, y) {
	let rangeArray = [];
	if(x === y || x - 1 === y || y - 1 === x) {
		return [];
	}
	if(x < y) {
		if(x === y - 1) return rangeArray;
		rangeArray.push(x + 1);
		return rangeArray.concat(range(++x, y));
	}
	if(y < x) {
		if(y === x - 1) return rangeArray;
		rangeArray.push(y + 1);
		return range(x, ++y).concat(rangeArray);
	}
};

console.log(range(2, 9));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
	if (exp < 0) {
		return exponent(base, ++exp) / base;
	}
	if(exp === 0) return 1;
	return base * exponent(base, --exp);
};

console.log(exponent(8,4));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if(n === 1) {
		return true;
	}
	if(n%2 !== 0 || n === 0) {
		return false;
	}
	return powerOfTwo(n/2);
};

console.log(powerOfTwo(25));

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if(string.length === 1) return string;
    return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    if(string.length === 1 || string.length === 0) return true;
    if(string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
			return palindrome(string.slice(1, string.length -1).replace(' ', ''));
		}
    return false;
};

console.log(palindrome('mom'));

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if(x < 0 && y < 0){
		x = -x;
		y = -y;
		return -modulo(x, y);
	}

	if(x < 0){
		x = -x;
		return -modulo(x, y);
	}

	if(y < 0){
		y = -y;
		return -modulo(x, y);
	}
	if(x === 0) {
		return y === 0 ? NaN : 0;
	}
	if(x < y) {
		return x;
	}
	if(y === 1) {
		return 0;
	}
	return modulo(x - y, y)
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
let multiply = function(x, y) {
	if(y === 0) return 0;
	else if (y < 0) {
		y = (-y),
		x = (-x);
	}
	return x + multiply(x, --y);
};

console.log(multiply(4, -3));

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
	let i = Array.from(arguments) [2] || 0;
	if(x === 0 && y === 0) {
		return NaN;
}
	if(y < 0) {
		return -divide(x, -y);
	}
	if(y > x) {
		return i;
	}
	if(y === x) {
		++i
		return i;
	}
	if(x === 0 && y > 0) {
		return 0;
	}

	return divide(x - y, y, ++i);


};
// console.log(divide(4, 5));
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if(x < 0 || y < 0) {
		return null;
	}
	if(!y) {
		return x;
	}
	return gcd(y, x%y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
	if(str1.length === 0 && str2.length === 0) {
		return true;
	}
	if(str1[0] !== str2[0]) {
		return false;
	}
	return compareStr(str1.slice(1), str2.slice(1));
};

console.log(compareStr('', ''));

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function(str) {
	let strArray = [];
	if(str.length === 0) return strArray;
	strArray.push(str[0]);
	return strArray.concat(createArray(str.slice(1)));
};

console.log(createArray('join'));

// 17. Reverse the order of an array
let reverseArr = function(array) {
    if(array.length === 0) return array;
    return reverseArr(array.slice(1)).concat(array[0]);
};

console.log(reverseArr([3, 2, 1]));

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function(value, length) {
	let list = [];
	if(length === 0) return list;
	list.push(value);
	return list.concat(buildList(value, --length));
};

console.log(buildList(0, 5));

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function(array, value) {
	let results = 0;
	let i = Array.from(arguments) [2] || 0;
	if(i === array.length) return 0;
	else if(array[i] === value) results += 1;
	return results + countOccurrence(array, value, ++i);
};

console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'));

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function(array, callback) {
	let i = Array.from(arguments) [2] || 0;
	if(i === array.length - 1) {
		return [callback(array[i], i, array)];
	}
	return [callback(array[i], i, array)].concat(rMap(array, callback, ++i));
};

console.log(rMap([2, 4, 6], function(val) {return val * 2;}));

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var array = Array.from(arguments) [2] || [];
	if(obj.hasOwnProperty(key)) {
		array.push(key)
	}
	for(let name in obj) {
		if(typeof obj[name] === 'object') {
			countKeysInObj(obj[name], key, array);
		}
	}
	return array.length;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var sum = 0
	for(let key in obj) {
		if(obj[key] === value) {
			sum += 1;
		}
		else if(typeof obj[key] === 'object') {
			sum += countValuesInObj(obj[key], value);
		}
	}
	return sum;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
	for(let k in obj) {
		if(k === key) {
			obj[newKey] = obj[key]
			delete obj[key];
		}
		else if(typeof obj[k] === 'object') {
			replaceKeysInObj(obj[k], key, newKey);
		}
	}
	return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
let fibonacci = function(n) {
	let i = Array.from(arguments) [1] || 1;
	let results = Array.from(arguments) [2] || [0, 1];
	if(n === 0 || n < 0) return null;
	if(i === n) return results;
	results.push(results[i] + results[i - 1]);
	return fibonacci(n, ++i, results);
};

console.log(fibonacci(5));

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function(n) {
	let i = Array.from(arguments) [1] || 0;
	if(n < 0) return null;
	let compareOf = fibonacci(200);
	if(i === n) return compareOf[i];
	return nthFibo(n, ++i);
};

console.log(nthFibo(7));


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function(input) {
	if(input.length === 0) return input;
	return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
console.log(words);

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
let capitalizeFirst = function(array) {
	if(array.length === 0) return [];
	return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

console.log(capitalizeFirst(words));

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var sum = 0
	for(let key in obj) {
		if(obj[key]%2 === 0) {
			sum += obj[key];
		}
		else if(typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		}
	}
	return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
	let newArr = Array.from(arguments) [1] || [];
	let i = Array.from(arguments) [2] || 0;
	if(arrays.length === i) {
		return newArr;
	}
	if(Array.isArray(arrays[i])) {
		flatten(arrays[i], newArr);
	}
	else {
		newArr.push(arrays[i]);
	}
	return flatten(arrays, newArr, ++i)
	// let newArr = [];
	//
	// arrays.forEach(function(val, i, arrays) {
	// 	if(Array.isArray(val)) {
	//  		newArr.concat(flatten(val));
	// 	}
	// 	else {
	//   	newArr.push(val);
	// 	}
	// });
  //   return newArr;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
let letterTally = function(str, obj) {
	obj = Array.from(arguments) [1] || {};
	if(str.length === 0) return obj;
	obj[str[0]] = ++obj[str[0]] || 1;
	return letterTally(str.slice(1), obj);
};

console.log(letterTally('potato'));

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
let compress = function(list) {
	let newList = Array.from(arguments) [2] || [];
	let i = Array.from(arguments)[1] || 0;
	if(i === list.length - 1) return newList;
	else if(list[i] !== list[i - 1]) newList.push(list[i]);
	return compress(list, ++i, newList);
};

console.log(compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]));

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	let i = Array.from(arguments) [2] || 0;
	if(i === array.length) {
		return array;
	}
	if(Array.isArray(array[i])) {
		array[i].push(aug);
	}
	return augmentElements(array, aug, ++i);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function(array) {
	let i = Array.from(arguments)[1] || 0;
	let newArray = Array.from(arguments) [2] || [];
	if(i === array.length) return newArray;
	else if(array[i] !== array[i - 1]) newArray.push(array[i]);
	return minimizeZeroes(array, ++i, newArray);
};

console.log(minimizeZeroes([2,0,0,0,1,0,0,4]));

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function(array) {
	let i = Array.from(arguments)[1] || 0;
	let newArray = Array.from(arguments) [2] || [];
	if(i === array.length) return newArray;
	else if(i%2 === 0) newArray.push(Math.abs(array[i]));
	else newArray.push(-(Math.abs(array[i])));
	return alternateSign(array, ++i, newArray);
};

console.log(alternateSign([2,7,8,3,1,4]));

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	let nums = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten'
	};
	let i = Array.from(arguments) [1] || 0;
	let result = Array.from(arguments) [2] || '';
	if (i === str.length) {
		return result;
	}
	if (nums.hasOwnProperty(str[i])) {
		result += nums[str[i]]
	}
	else {
		result += str[i]
	}
	return numToText(str, ++i, result)
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	let i = Array.from(arguments) [2] || 0;
	let count = Array.from(arguments) [3] || 0;
	node = document.all;
	if (node.length === i) {
		return count;
	}
	if (node[i].tagName.toLowerCase() === tag) {
		++count
	}
	return tagCount(tag, node, ++i, count);
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {

	min = min || 0,
	max = max || array.length - 1;
	let mid = Math.floor((min + max) / 2);
	if (array[mid] === target) {
		return mid;
	}
	if (min === max) {
		return null;
	}
	if (target > array[mid]) {
		min = mid + 1;
		return binarySearch(array, target, min, max)
	} else {
		max = mid;
		return binarySearch(array, target, min, max)
	}

};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
	let smallest = Infinity;
	let copy = Array.from(arguments) [1] || array.slice();
	let result = Array.from(arguments) [2] || [];
	if (result.length === array.length) {
		return result;
	}
	for (let i = 0; i < copy.length; i++) {
		if (copy[i] < smallest) {
			smallest = copy[i];
		}
	}
	result.push(smallest);
	copy.splice(copy.indexOf(smallest), 1);
	return mergeSort(array, copy, result);
};
