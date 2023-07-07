

function checkInfection(virusComposition, bloodComposition) {

    const regex = new RegExp([...bloodComposition].join(".*"), "i");
    
     if(regex.test(virusComposition))
     {
        alert("Positive");
     }
     else
     {
        alert("Negative");
     }

  }
  
  // Example usage
  const virusComposition = 'coronavirus';
  const bloodComposition = 'ravus';
  checkInfection(virusComposition, bloodComposition);


// function checksubseq(virus, blood){
//    let i=0, j=0;
//    while(i<blood.length && j<virus.length){
//       if(blood[i] == virus[j]){
//          i++;
//       }
//       j++;
//    }

//    if((i==blood.length && j==virus.length) || i==blood.length){
//       alert("Positive")
//    }else{
//       alert("Negative")
//    }
// }

// let virus = "coronavirus";
// let blood = "ravus";

// checksubseq(virus, blood);