// function findleapyear()
// {
//     let startyear=parseInt(prompt("Enter the starting year in format yyyy"));
//     let endyear=parseInt(prompt("Enter the end year in format yyyy"));
//     let leapyears=[];
//     for(let i=startyear;i<=endyear;i++)
//     {
//         if(i%4===0 && (i%100!==0 || i%400===0))
//         {
//             leapyears.push(i)
//         }
//     }
//     alert("Leapyears in the range of the given years are "+leapyears);
// }




function findleap(){
    let stryr = parseInt(prompt("Enter start year:"));
    let endyr = parseInt(prompt("Enter end year:"));
    let leapyr=[];

    for(let i=stryr; i<= endyr; i++){
        let x = (i%4===0)?1:0;
        let y = (i%100===0)?1:0;
        let z = (i%400===0)?1:0;

        if(x && y && z || x && !y){
            leapyr.push(i);
        }
    }

    alert("Leap years are:\n"+ leapyr);
}

findleap()