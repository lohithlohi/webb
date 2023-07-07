// let func = ()=>
// {
//     let num;
//     num=prompt("Enter a number")
//     let splitnum = num.split('');
//     reversenum = splitnum.reverse().join('')
//     let result =parseFloat(reversenum);
//     alert(reversenum);
// }

let fun = () =>{
    let num = prompt("Enter number");
    let rev = num.split("").reverse().join("");
    alert("Reverse of given number: "+ rev);
}

fun()