/*
    8 Ways to get Undefiend
    -------------------------
1.Variable that is not initialized will give undefined
2.Function with no return 
3.Parameter that is not passed will be undefined
4.if return has nothing on the right side will return undefined.
5.Property that does not exists on an object will give you undefined
6.accessing array elements outside of the index range
7.Deleting an element inside an array
8. Set a value directly to undefined
*/

// 1. Variable that is not initialized will give undefined
let first;
// console.log(first);

// 2.Function with no return
function second(a, b) {
    const total = a + b;
}
const result = second();
// console.log(result);

// 3.Parameter that is not passed will be undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}

third(2, 5);
// 4.if return has nothing on the right side will return undefined
function nonNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = nonNegative(2, -5);
// console.log(total);

// 5. Property that does not exists on an object will give you undefined
const fifth = { id: 342, name: 'halim', age: 40 };
// console.log(fifth.id, fifth.salary);

// 6.accessing array elements outside of the index range
const sixth = [34, 2, 87, 54, 82, 56];
// console.log(sixth[1], sixth[6]);

// 7.Deleting an element inside an array 
delete sixth[1];
// console.log(sixth[1], sixth[3], sixth[6]);
// console.log(sixth);

// 8. Set a value directly to undefined

const eighth = undefined;
const ninth = null;
const data = { result: [], update: null };

console.log(typeof undefined);
console.log(typeof null);
