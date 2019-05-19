let dziennik = [
    ['mateusz','romek'],
    ['tomek','atomek'],
    ['robert','ryś'],
    ['krzyś','zdziś'],
    ['adam','antek'],
    ['marcel','tadzio']
];

function dodajUczna(name, klasa) {
    dziennik[klasa - 1].push(name);
    dziennik[klasa - 1].sort();
    console.log(dziennik[klasa - 1].indexOf(name) + 1);
    console.log(dziennik[klasa - 1]);
}

function showStudent(klasa, number){
    console.log(dziennik[klasa-1][number-1]);
}
