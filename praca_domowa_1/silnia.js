function silniaDomkniecia() {
    let x = 1;
    let silnia = 1;
    return function () {
      console.log(silnia*=x);
      x++;
    }

  }

  var myFunc = silniaDomkniecia();

  function howMany(number){
      for(let i=0; i<number; i++){
          myFunc();
      }
  }

  console.log('silnia')
  howMany(5);