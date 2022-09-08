// print5();
// print10();
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// console.log('Outside', i);
// print5();
function print5() {
    console.log('Inside', 5);
}
// const print10 = function () {
//     console.log('inside', 10);
// }
var print10 = function () {
    console.log('inside', 10);
}
