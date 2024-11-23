let input = document.createElement("input"), 
    test = document.createElement("button");

test.textContent = "Test";
test.onclick = () => { 
    output.textContent = (input.value.match(/[A-Z]/g) || []).join(", ") || "No matches"; 
};

output.append(input, test);
