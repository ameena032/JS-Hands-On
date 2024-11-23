let output = document.getElementById("output");

let inputField = document.createElement("input");
inputField.type = "text";
inputField.placeholder = "Enter your name";

let submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.onclick = function () {
    let name = inputField.value.trim();
    if (name) {
        output.textContent = `Hello, ${name}! Welcome to JavaScript.`;
    } else {
        output.textContent = "Please enter your name.";
    }
};

output.appendChild(inputField);
output.appendChild(submitButton);
