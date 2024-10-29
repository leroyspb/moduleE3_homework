isPrimeNumber = num => {
  if (num <=1000){
    let result = true;
    if (num <=1) {
      result = false;
    }
    for (let i = 2; i*i<=num; i++){
      if (num % i === 0) {
        result = false;
        break;
      }
    }
    if (result) {
      console.log('Это число простое')
    } else {
      console.log('Это число не простое')
    }
  } else {
    console.log('Введите число менее или равное 1000')
  }
}


isPrimeNumber(15)