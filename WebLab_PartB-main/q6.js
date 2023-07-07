/* Implement an arrow function that will take one parameter weight in Kg.
 This arrow function will convert Kg to Lbs. Formula is kg*2.2 
 ● If LBS is > 150, then the function should return "obese" 
 ● If LBS is between 100 to 150, the function should return "you are ok" 
 ● If LBS is < 100, then the function should return "underweight"
*/

let checkstats = (kg) => {

    let lbs = kg * 2.2;

    if (lbs > 150) {
        alert("OBESE");
    } else if (lbs >= 100 && lbs <= 150) {
        alert("YOU ARE OK")
    } else if(lbs < 100) {
        alert("UNDERWEIGHT")
    }else{
        alert("Invalid entry")
    }
}

let wkg = prompt("Enter the weight in KG")

checkstats(wkg);
