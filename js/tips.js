function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }











// function processInput() {
//     // Hämta värdet från input-fältet
//     var userInput = document.getElementById("userInput").value;

//     // Gör något med användarens inmatning (i det här fallet, visa det på sidan)
//     var outputElement = document.getElementById("output");
//     outputElement.innerHTML = "Du angav: " + userInput;
// }