function superSumGen() {
    let suma = 0;
    let sumFunc = function (...a) {
        for (let i = 0; i < a.length; i++)
            console.log(suma += a[i]);
        return sumFunc;
    }
    return sumFunc;
}




var superSum = superSumGen();
console.log('super sum')
superSum(5,5,5)(6);
