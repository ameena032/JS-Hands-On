let input = document.createElement("input"), 
    save = document.createElement("button"), 
    get = document.createElement("button");

save.textContent = "Save";
save.onclick = () => { 
    localStorage.setItem("name", input.value); 
    output.textContent = `Saved: ${input.value}`; 
};

get.textContent = "Get";
get.onclick = () => { 
    output.textContent = localStorage.getItem("name") || "No name stored"; 
};

output.append(input, save, get);
