function navigateTo(scriptFile, taskName) {
    localStorage.setItem('scriptFile', scriptFile);
    localStorage.setItem('taskName', taskName);
    window.location.href = 'display.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const scriptFile = localStorage.getItem('scriptFile');
    const taskName = localStorage.getItem('taskName');

    if (!scriptFile || !taskName) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('task-title').textContent = taskName;

    fetch(scriptFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('code-output').textContent = data;
            const script = document.createElement('script');
            script.textContent = data;
            document.body.appendChild(script);
        })
        .catch(err => {
            document.getElementById('code-output').textContent = `Error loading code: ${err}`;
        });
});
