function checkPalindrome() {
    const inputElement = document.getElementById("textInput");
    const result = document.getElementById("result");
    
    // Get the actual text value from the input
    const originalText = inputElement.value;
    
    // Clean the input: remove non-alphanumeric and lowercase
    const cleanedInput = originalText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleanedInput.split('').reverse().join('');

    if (cleanedInput.length === 0) {
        result.innerHTML = "Please enter a valid string.";
        result.style.color = "black";
    } 
    else if (cleanedInput === reversed) {
        result.innerHTML = `"${originalText}" is a palindrome!`;
        result.style.color = "green";
    } 
    else {
        result.innerHTML = `"${originalText}" is not a palindrome.`;
        result.style.color = "red";
    }
}