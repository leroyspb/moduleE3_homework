const getNums = (a, b) => {
    let i = setInterval(function (){
    console.log(a++);
    if (a > b) {
        clearInterval(i);
    }}, 1000)
   }

getNums(5,15)