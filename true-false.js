/*
Truthy:
1.true
2. any number (+ve, -ve) will be truthy other than 0 
3. any string other than empty string
4.'0', 'false'
5.{},[]

Falsy:
1.false
2.0
3.'' (empty String)
4. undefined, null
*/
// const x = false;
// const x = 4;
// const x = 0;
// const x = 'fsuus';
// const x = '';
// const x = ' ';
// const x = '0';
// const x = 'false';
// let x;
// console.log(x);
// let x = null;
// console.log(x);
// let x = {};
// console.log(x);
let x = [];
console.log(x);


if (x) {
    console.log('Value of x is Truthy');
}
else {
    console.log('Value of x is Falsy');
}

// Optional
// check falsy
// const y = '';
const y = null;
if (!y) {
    console.log('value is falsy');
}

// check true
const z = ' ';
if (!!z) {
    console.log('value is truthy');
}