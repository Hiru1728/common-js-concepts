/*
1.always use ===
2.equal comparison does not work for non-primitive
*/

// const first = 2;
// const second = 2;
// const second = '2';
// const second = 1;
// const second = true;
// const first = 0;
// const second = false;
// const first = '0';
// const second = false;
// const first = {};
// const second = {};
// const first = { x: 5 };
// const second = { x: 5 };
// const first = [];
// const second = [];
// const first = [];
// const second = first;
const first = [45, 35, 54];
const second = [45, 35, 54];
if (first == second) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// type coerction
// type conversion
// type casting