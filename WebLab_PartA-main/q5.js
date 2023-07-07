function caesarCipherEncrypt(text, shift) {
    var encryptedText = "";
  
    // Loop through each character in the text
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
  
      // Check if the character is a letter
      if (char.match(/[a-z]/i)) {
        var code = text.charCodeAt(i);
  
        // Encrypt uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        // Encrypt lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
  
      encryptedText += char;
    }
  
    return encryptedText;
  }
  // Prompt the user to enter the input text
  var inputText = prompt("Enter the text to encrypt:");
  
  // Prompt the user to enter the shift pattern
  var shiftPattern = parseInt(prompt("Enter the shift pattern (a number between 1 and 25):"));
  
  // Encrypt the input text using the Caesar Cipher
  var encryptedText = caesarCipherEncrypt(inputText, shiftPattern);
  
  // Display the encrypted text using an alert
  alert("Encrypted Text: " + encryptedText);
