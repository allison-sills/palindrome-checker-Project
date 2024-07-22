// Get references to DOM elements
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

// Add event listener to the button to trigger the palindrome check
checkButton.addEventListener("click", () => {
  // Get the input value, convert to lowercase, and remove non-alphanumeric characters
  const replaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Check if the input is empty
  if (textInput.value === "") {
    alert("Please input a value");
  } else if (
    // Check if the input is a single character or if the processed string is a palindrome
    textInput.value.length === 1 ||
    replaced === [...replaced].reverse().join("")
  ) {
    // Display palindrome result
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    // Display non-palindrome result
    result.innerText = `${textInput.value} is not a palindrome`;
  }
});