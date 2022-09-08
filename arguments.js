function sum(a, b, c) {
    // console.log(arguments);
    // console.log(arguments[4]);
    // console.log(typeof arguments);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(2, 45, 56, 74, 7, 4);
// console.log(typeof sum);
console.log(total);