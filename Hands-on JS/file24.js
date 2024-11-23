function makeMultiplier(x) { return (y) => x * y; }
let double = makeMultiplier(2);
output.textContent = `Double of 5: ${double(5)}`;
