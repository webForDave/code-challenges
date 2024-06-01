const squareSums = (arr) => {
    const ssq = arr.map(element => {
       return element * element
    });
    const sum = ssq.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum;
}
console.log(squareSums([2, 4, 6])); 