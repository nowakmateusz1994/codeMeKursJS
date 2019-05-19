// console.log('testowe');

// function myfuncVar() {
//     var a = 'var 50';
//     if (true) {
//         var a = 'var 30';
//         console.log(a);
//     }
//     console.log(a);
// }

// myfuncVar();

// function myFuncLet() {
//     let b = 'let 30';
//     if (true) {
//         let b = 'let 50';
//         console.log(b);
//     }
//     console.log(b);
// }

// myFuncLet();

// let zmiennaA = true;
// let zmiennaB = false;
// let zmiennaC = NaN;

// if(zmiennaA){
//     console.log('zmienna A jest prawdziwa');
// }

// if(!zmiennaB){
//     console.log('zmienna B nie jest prawdziwa');
// }else{
//     console.log('zmienna B jest prawdziwa');
// }

// if(zmiennaC){
//     console.log('obie zmienne są prawdziwe');
// }else if(zmiennaA || zmiennaB){
//     console.log('zmienna a lub zmienna b jest prawdziwa');
// }else if(zmiennaA ^ zmiennaB){
//     console.log('tylko jedna zmienna jest prawdziwa')
// }
let warunek = 'txt'

switch (warunek) {
    case 'txt':
        console.log('case 1');
        break;
    case 'txt2':
        console.log('za breakem');
        break;
    case 'txt3':
        console.log('bez break');
        break;
    default:
        console.log('żaden warunek spełniony');
        break;
}