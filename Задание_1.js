let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, null, 'a', 'b', undefined]

CountEvenOddNums = (array) =>{
    let evenCount = 0
    let oddCount = 0
    let zeroCount = 0

    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === "number" && !isNaN(array[i])) {
                if (array[i] === 0) {
                    zeroCount++;
                }else if (array[i] % 2 === 0){
                evenCount++;
                }else {oddCount++;}
            }
    }
    console.log("Всего чётных элементов в массиве: " + evenCount)
    console.log("Всего нечётных элементов в массиве: " + oddCount)
    console.log("Всего нулей в массиве: " + zeroCount)
}

CountEvenOddNums(array)