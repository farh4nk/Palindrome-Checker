const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
result.style.display = "none";
checkButton.addEventListener("click", checkPalindrome);

function cleanInput(str) {
  let regex = /[^a-z\d]/g;
  return str.toLowerCase().replace(regex, "");
}

function updateDisplay(word, outcome) {
  if (outcome == "palindrome") {
    result.innerText = `${word} is a palindrome`;
  } 
  else if (outcome == "notPalindrome") {
    result.innerText = `${word} is not a palindrome`;
  }
}

function checkPalindrome() {
  result.style.display = "block";
  let text = textInput.value;
  if (!text) {
    alert("Please input a value");
    return;
  }
  let cleanText = cleanInput(text);
  let reversedString = cleanText.split("").reverse().join("");
  if (cleanText == reversedString) {
    updateDisplay(text, "palindrome")
  }
  else {
    updateDisplay(text, "notPalindrome");
  }
  
}
