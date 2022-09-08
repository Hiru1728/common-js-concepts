// Static typed language/ Strongly typed Language
// int a=5;
// String b = 'alim halim khalim';
// bool c=true;
// object student= {name: 'noya', id: 55};
// int[] numbers=[12,42,52];
// string[] friends=['abul', 'hdui'];

//JavaScript is Dynamic typed Language
// Primitive 
const a = 5;
const b = 'Samsu hdy jdjbd';
const d = true;

// Non-Primitive
const ages = [34, 24, 63];
const student = { id: 23, class: 7 };
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'Web Developer' };
let q = p;

// Full change or new object create or re-asign korle
// q = { job: 'Backend Developer' };

// partialy change 
q.job = 'front end developer';
console.log(p, q);