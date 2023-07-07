// function bookflight()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             const flightbooked = true;
//             if(flightbooked)
//             {
//                 console.log("Flight is booked");
//                 resolve();
//             }
//             else{
//                 reject("Flight booking failed");
//             }
//         },1000
//         );
//     }
//     )
// }
// function bookHotel()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             const hotelbooked = true;
//             if(hotelbooked)
//             {
//                 console.log("Hotel is booked");
//                 resolve();
//             }
//             else{
//                 reject("Hotel booking failed");
//             }
//         },2000
//         );
//     }
//     )
// }
// bookflight().then(
//     ()=>
//     {
//         return bookHotel();
//     }
// ).then(
//     ()=>
//     {
//         console.log("Everything booked successfully");
//     }
// ).catch(
//     ()=>
//     {
//         console.log("Error occured while booking");
//     }
// )


function flightbook(ch){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let fbook = ch;
            if(fbook){
                resolve("Flight is booked");
            }else{
                reject("Flight not booked");
            }
        },2000)
    })
}

function hotelbook(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hotel is booked");
        },2000)
    })
}

let ch = parseInt(prompt("Enter your choice\n\n1 for booking\n0 for not booking"));

flightbook(ch).then((val)=>{
    console.log(val);
    return hotelbook();
}).then((val2)=>{
    console.log(val2);
})

flightbook(ch).catch(alert);