const fibonacci = function(num) {
    Number(num) 

    if (num > 0 && num <= 2) {
        return 1
    } else if (num > 2) {
        arr = [1, 1]
        for (i=2; i<num; i++) {
            newNum = arr[i-1] + arr[i-2]
            arr.push(newNum)
        }
        return newNum
    } else {
        return "OOPS"
    }
}

module.exports = fibonacci
