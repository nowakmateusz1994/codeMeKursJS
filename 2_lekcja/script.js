// function sumaTrzechArgumentow(a, b, c) {
//     // console.log(a + ' ' + b + ' ' + c);
//     // console.log(a,b,c);
//     return (a + b + c);
// }

// // sumaTrzechArgumentow(5,25,'30');

// var sumaElementow = function (x, j, z) {
//     console.log('suma elementów wynosi ' + (x + j + z));
// }


// console.log(sumaTrzechArgumentow(
//     sumaTrzechArgumentow(1, 2, 3),
//     sumaTrzechArgumentow(4, 5, 6),
//     sumaTrzechArgumentow(7, 8, 9)
// ));


// function sumaXLiczb(y, x) {
//     let suma = 0;
//     for ( let i=y; i <= x; i++) {
//         console.log(i);
//         suma = suma + i;
//     }
//     return suma;
// }

// function testujemyArguments(a){
//     console.log('zmienna jawna ' , a);
//     console.log(arguments);
// }

// function funkcjaSumującaPoArguments(a){
//     let wynik = 0;
//     for(let i=0; i<arguments.length; i++){
//         // const element = arguments[i]
//         wynik = wynik + arguments[i];
//     }
//     console.log(wynik);
// }

// function testujemyRest(a,b,c, ...rest){
// console.log(a+b+c);
// console.log(rest);
// }

// function gradingStudents(grades) {
//     // grades.forEach(function(grade){
//     //     console.log(grade);
//     // });

// grades.forEach(function (grade, index) {
//     if (grade => 40) {
//         let modulo = grade % 5;
//         if (modulo => 3) {
//             let roznica = (5 - modulo);
//             grade += roznica;
//             grades[index] = grade;
//         }
//     }
// });
// grades.forEach(function(grade){
//     console.log(grade);
// });
// }

// let wynik = [5, 75, 78, 79, 71];
// gradingStudents(wynik);

// function silnia(x){
//     if(x===1){
//         return x;
//     }
//     return(x * silnia(x-1));
// }




//Silnia




// function silniaDomkniecia() {
//     let x = 1;
//     let silnia = 1;
//     return function () {
//       console.log(silnia*=x);
//       x++;
//     }

//   }

//   var myFunc = silniaDomkniecia();

//   function howMany(number){
//       for(let i=0; i<number; i++){
//           myFunc();
//       }
//   }



//Super sum

// function superSumGen(x){
//     let sum = 0;
//     return function(x){
//         for(let i=0; i<arguments.length; i++)
//         console.log(sum+=x[i]);
//     }
// }
function superSumGen() {
    let suma = 0;
    return function () {
            for (let i = 0; i < arguments.length; i++)
                console.log(suma += arguments[i]);
    }
}




var superSum = superSumGen();

superSum(5);
superSum(6);