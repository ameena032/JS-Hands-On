let button = document.createElement("button");
button.textContent = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";

button.onclick = () => {
    output.textContent = "Button clicked! Event captured successfully.";
};

output.appendChild(button);
