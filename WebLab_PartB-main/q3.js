// function add(x, y) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const sum = x + y;
//             console.log(`Adding ${x} + ${y} = ${sum}`);
//             resolve(sum);
//         }, 1000);
//     });
// }

// function subtract(x, y) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const diff = x - y;
//             console.log(`Subtracting ${x} - ${y} = ${diff}`);
//             resolve(diff);
//         }, 1500);
//     });
// }

// function multiply(x, y) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const product = x * y;
//             console.log(`Multiplying ${x} * ${y} = ${product}`);
//             resolve(product);
//         }, 2000);
//     });
// }

// function divide(x, y) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const quotient = x / y;
//             console.log(`Dividing ${x} / ${y} = ${quotient}`);
//             resolve(quotient);
//         }, 2500);
//     });
// }

// async function performOperations(x, y) {
//     const sum = await add(x, y);
//     const diff = await subtract(sum, y);
//     const product = await multiply(diff, y);
//     const quotient = await divide(product, y);
//     return quotient;
// }

// performOperations(10, 2).then((result) => {
//     console.log(`Result: ${result}`);
// });





// function add(x,y){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let sum = x+y;
//             resolve(sum);
//         }, 2000);
//     });
// }


async function arithop(x, y){

    let add = new Promise((resolve) => {
                setTimeout(() => {
                    let res = x+y;
                    console.log(`${x}+${y}=${res}`);
                    resolve(res);
                }, 2000)
            })

    let sub = new Promise((resolve) => {
                setTimeout(() => {
                    let res = x-y;
                    console.log(`${x}-${y}=${res}`);
                    resolve(res);
                }, 3000)
            })

    let mul = new Promise((resolve) => {
                setTimeout(() => {
                    let res = x*y;
                    console.log(`${x}*${y}=${res}`);
                    resolve(res);
                }, 4000)
            })
    
    let div = new Promise((resolve) => {
                setTimeout(() => {
                    let res = x/y;
                    console.log(`${x}/${y}=${res}`);
                    resolve(res);
                }, 5000)
            })


    await add;
    await sub;
    await mul;
    await div;

}

arithop(12,6)