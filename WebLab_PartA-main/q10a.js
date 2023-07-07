function searchAndDisplayDate(str) {
    var dateRegex = /\d{2}\/\d{2}\/\d{4}/;
    var match = str.match(dateRegex);
  
    if (match) {
      alert("Date found: " + match);
    } else {
      alert("No date found in the string.");
    }
  }
  
  // Prompt the user to enter a string
  var inputString = prompt("Enter a string:");
  
  // Search and display the date within the string
  searchAndDisplayDate(inputString);
