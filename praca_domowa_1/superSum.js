function superSumGen() {
    let suma = 0;
    return function () {
            for (let i = 0; i < arguments.length; i++)
                console.log(suma += arguments[i]);
    }
}




var superSum = superSumGen();
console.log('super sum')
superSum(5);
superSum(6);
superSum(6,5,6,6,6);

/* Niestety nie wiem jak wywołać funkcjie w ten sposum superSum(5,4)(5)(3,6) sumuję mi tylko pierwszy nawias; */