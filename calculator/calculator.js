function add (numA,numB) {
	return numA + numB
}

function subtract (numA,numB) {
	return numA - numB
}

function sum (arr) {
	return arr.reduce( (acc,num) => {
		return acc + num
	}, 0)
}

function multiply (arr) {
	return arr.reduce( (acc, num) => {
		return acc * num
	}, 1)
}

function power(num, pwr) {
	total = 1
	for (var i = 0; i < pwr; i ++) {
		total = total * num
	}

	return total
}

function factorial(num) {
	total = 1
	for (var i = num; i > 0; i--) {
		total *= i
	}
	return total
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}