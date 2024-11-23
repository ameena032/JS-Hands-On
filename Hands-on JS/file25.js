let promise = new Promise((resolve) => resolve("Promise Resolved"));
promise.then((res) => (output.textContent = res));
