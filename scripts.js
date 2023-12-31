// slowMath.add(6, 2)
// .then((result) => {
//     console.log(result);
//     return slowMath.multiply(result, 2);
// }).then((multiplyresult) => {
//     console.log(multiplyresult);
//     return slowMath.divide(multiplyresult, 4)
// }).then((divideresult) => {
//     console.log(divideresult);
//     return slowMath.subtract(divideresult, 3)
// }).then((subtractionresult) => {
//     console.log(subtractionresult);
//     return slowMath.add(subtractionresult, 98)
// }).then((additionresult) => {
//     console.log(additionresult);
//     return slowMath.remainder(additionresult, 2)
// }).then((remainderresult) => {
//     console.log(remainderresult);
//     return slowMath.multiply(remainderresult, 50)
// }).then((multiplicationresult) => {
//     console.log(multiplicationresult);
//     return slowMath.remainder(multiplicationresult, 40)
// }).then((secondremainderresult) => {
//     console.log(secondremainderresult);
//     return slowMath.add(secondremainderresult, 32)
// }).then((finalResult) => {
//     console.log(`The final result is ${finalResult}`);
// }).catch((error) => {
//     console.log(`Something odd happened`);
// })


// .catch((error) => {
//     console.log(`Error adding values ${a} and ${b}.`)
// })


async function doMath() {
    try {
        let firstResult = await slowMath.add(6,2);
        console.log(firstResult);
        let secondResult = await slowMath.multiply(firstResult, 2);
        console.log(secondResult);
        let thirdResult = await slowMath.divide(secondResult, 4);
        console.log(thirdResult);
        let forthResult = await slowMath.subtract(thirdResult, 3);
        console.log(forthResult);
        let fifthResult = await slowMath.add(forthResult, 98)
        console.log(fifthResult);
        let sixthResult = await slowMath.remainder(fifthResult, 2)
        console.log(sixthResult);
        let seventhResult = await slowMath.multiply(sixthResult, 50)
        console.log(seventhResult);
        let resultEight = await slowMath.remainder(seventhResult, 40)
        console.log(resultEight);
        let ninthResult = await slowMath.add(resultEight, 32)
        console.log(`The final result is ${ninthResult}`);


    } catch (err) {
        console.log('Something odd happened');
    }
}



doMath();