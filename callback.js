function greeting(greetingHandler, name) {
    greetingHandler(name);
}
// const name = 'Halim mama';
// const number = 45;
// const number = [45, 54, 78];
// const laptop = { price: 45000, brand: 'lenovo', memory: '8gb' };

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetingEvening(name) {
    console.log('Good Evening', name);
}
function greetingNight(name) {
    console.log('Good Night', name);
}
greeting(greetingHandler, 'tom ddf');
greeting(greetingHandler, 'tom cruse');
greeting(greetingHandler, 'tom tothim');
greeting(greetingEvening, 'tom solaiman');
greeting(greetingNight, 'Tom Salman');

function submitHandeler() {
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandeler)