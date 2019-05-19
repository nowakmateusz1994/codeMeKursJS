// function tabliczkaMnozenia(x) {
//     let liczba = 0;
//     let tab = [];
//     for (let i = 0; i <= x; i++) {
//         let wynik = [];
//         for (let j = 0; j <= x; j++) {
//             liczba = j * i;
//             wynik.push(liczba);
//         }
//         tab.push(wynik);
//     }
//     return(tab);
// }


// function HumanV2(name, surname, pesel, adres) {
//     this.name = name;
//     this.surname = surname;
//     this.pesel = pesel;
//     this.adres = adres;
//     // this.intodruce = function(){
//     //     console.log(this.name, this.surname);
//     // }
//     // this.whereIFrom = function(){
//     //     console.log(this.adres);
//     // }
//     // this.getPesel = function(){
//     //     console.log(this.pesel);

//     // }
// }

// HumanV2.prototype.introduction = function () {
//     console.log(this.name, this.surname);
// }

// HumanV2.prototype.whereIFrom = function () {
//     console.log(this.adres);
// }

// HumanV2.prototype.getPesel = function () {
//     console.log(this.pesel);
// }

// let me = new HumanV2('Mateusz', 'Nowak', '77777777', 'Modła 20');
// let ktos = new HumanV2('sadad','asdasda','asdsa','asdadsa');
// ktos.magiczne = function(){
//     console.log('asdadadadadadadasdada');
// }
// ktos.introduction= function(){
//     console.log('dsadasdqw qweqweq');
// }

// function car(marka, ifWork) {
//     this.marka = marka;
//     this.ifWork = ifWork;

// }
// car.prototype.startEngine = function () {
//     this.ifWork = setInterval(function () {
//         console.log('wrrr');
//     }, 100)
// }
// car.prototype.stopEngine = function () {
//     clearInterval(this.ifWork)
//     console.log('car stop')
// }

// let sam = new car('bmw', 'e26');
// sam.startEngine();
// sam.stopEngine();


