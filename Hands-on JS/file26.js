async function fetchData() { return "Data Loaded"; }
fetchData().then((res) => (output.textContent = res));
