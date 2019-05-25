function Human(name, surename, brightDate, sex, adress, pesel) {
    this.name = name;
    this.surename = surename;
    this.brightDate = brightDate;
    this.sex = sex;
    this.adress = adress;
    this.pesel = pesel;

    this.introduce = function () {
        console.log(`Witaj jestem ${this.name} ${this.surename}`);
    }
    this.whereIFrome = function () {
        console.log(this.adress);
    }
    this.getPesel = function () {
        console.log(this.pesel);
    }
    this.howOldAmI = function () {
        const presentDay = new Date();
        const brightDate2 = new Date();
        brightDate2.setMonth(this.brightDate[1] - 1);
        brightDate2.setFullYear(this.brightDate[0]);
        brightDate2.setDate(this.brightDate[2]);
        console.log(presentDay.getFullYear() - brightDate2.getFullYear());
    }
    this.setPesel = function () {
        let newPesel = [];
        //dadanie pierwszej liczby zależnej od roku urodzenie
        newPesel.push(Math.floor((brightDate[0] % 100) / 10));
        //druga liczba zależna od roku urodzenia
        newPesel.push((brightDate[0] % 100) % 10);
        //liczby zależne od misiąca urodzenia wraz ze sprawdzeniem czy osoba urodzona po 2000
        if (brightDate[0] > 2000) {
            newPesel.push((Math.floor(brightDate[1] / 10) + 2));
            newPesel.push(brightDate[1] % 10);
        } else {
            newPesel.push((Math.floor(brightDate[1] / 10)));
            newPesel.push(brightDate[1] % 10);
        }
        //dodanie liczb zależnych od dnia urodzenia
        newPesel.push((Math.floor(brightDate[2] / 10)));
        newPesel.push(brightDate[2] % 10);
        //dodanie 3 losowych liczb
        for (let i = 1; i <= 3; i++) {
            newPesel.push(Math.floor(Math.random() * (9 - 0 + 1)) + 0);
        }
        //sprawdzenie liczb zależnych od płci 
        let maleNumber = 0;
        if (this.sex === 'male') {
            do {
                maleNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 0;
            } while (maleNumber % 2 == 0)
            newPesel.push(maleNumber);
        } else {
            do {
                maleNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 0;
            } while (maleNumber % 2 != 0)
            newPesel.push(maleNumber);
        }
        //dodanie ostatniej liczby peselu tak zwanej kontrolnej 
        let lastNumber = 0;
        let tabForLastNumber = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        let newPesel2 = [];
        newPesel.forEach(function (element, index) {
            newPesel2.push(element * tabForLastNumber[index]);
        });
        newPesel2.forEach(element => {
            if (element >= 10) {
                element %= 10;
            }
            lastNumber += element;
        });
        if (lastNumber > 9) {
            lastNumber %= 10
        };
        if (lastNumber > 0) {
            lastNumber = 10 - lastNumber;
        }
        newPesel.push(lastNumber);
        console.log(newPesel);
        //przypisanie nowego numeru pesel 
        this.pesel = newPesel;
    }
}
var me = new Human('Mateusz', 'Nowak', [1994, 10, 15], 'male', 'Modła 20');

//zadanie źle wykonane nie sprawdza czy podany numer pesel jest poprawny lecz sam generuj już poprawny pesel 