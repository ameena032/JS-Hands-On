let input = document.createElement("input"), 
    div = document.createElement("button");

div.textContent = "Divide by 2";
div.onclick = () => { 
    let num = parseFloat(input.value); 
    output.textContent = isNaN(num) ? "Invalid number." : num / 2; 
};

output.append(input, div);
