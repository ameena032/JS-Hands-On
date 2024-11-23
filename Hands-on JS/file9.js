let output = document.getElementById("output");

let dataTypes = {
    Number: 42,
    String: "Hello",
    Boolean: true,
    Undefined: undefined,
    Null: null,
    Object: { key: "value" },
    Array: [1, 2, 3],
};

output.textContent = JSON.stringify(dataTypes, null, 2);
