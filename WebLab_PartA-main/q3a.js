function countVowels() 
{
    let str=prompt("Enter a string")
    const LStr = str.toLowerCase();
    let vowelCount = 0;
    let vowels = ['a','e','i','o','u'];

    for(let i=0; i<str.length; i++){
      if(vowels.includes(str[i])){
        vowelCount++;
      }
    }

    alert("No of vowels: "+vowelCount);
}

countVowels()