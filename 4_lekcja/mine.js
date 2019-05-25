//zadanie 1 parzyste;
function parzyste(n) {
    let tab = [];
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            tab.push(i);
        } else if (i % 2 == 0) {
            tab.push(i);
        }
    }
    return tab;
}

//zadanie 2 

function fajnaFunc(...a) {
    let tab = [
        [],
        [],
        []
    ];

    for (let i = 0; i < a.length; i++) {
        tab[i % 3].push(a[i])
    }
    return tab;
}

//zadanie 3

function showNty(n) {
    if (n <= 3) {
        return n;
    } else {
        return ((showNty(n - 1) * n) + showNty(n - 2)) / showNty(n - 3)
    }
}

//zadanie 4

let humans = [];

function Human(name, surename, id) {
    this.name = name;
    this.surename = surename;
    this.id = id;
}


function addHuman(id, name, surename) {
    let newHuman = new Human(name, surename, id);
    humans.push(newHuman);
}

addHuman(123, 'sdaa', 'asdasda');
addHuman(321, 'qwe', 'qweqw');

function removeHuman(id) {
    for (let i = 0; i < humans.length; i++) {
        if (humans[i].id == id) {
            humans.splice(i, 1);
        }
    }
}

function showHuman() {
    for (let i = 0; i < humans.length; i++) {
        console.log(`id: ${humans[i].id}`)
        console.log(`imie: ${humans[i].name}`)
        console.log(`nazwisko: ${humans[i].surename}`)
    }
}


//zadanie 5

function Obiekt(id, time,tekst,alertId) {
    this.id = id;
    this.time = time;
    this.tekst = tekst;
    this.alertId = alertId;
}

Obiekt.prototype.showAlert = function (time) {
    this.alertId = setTimeout(function () {
        alert(`ID ${this.id} alert wyświetlany po ${this.time}s zawierający ${this.tekst}`);
        this.showAlert();
    }.bind(this),  this.time*1000);
}

Obiekt.prototype.stopAlert = function () {
    clearTimeout(this.alertId);
}

let newObiekt = new Obiekt(5,3,'hej');
let newObiekt2 = new Obiekt(15,.5,'szybki alert');