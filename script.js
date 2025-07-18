document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const sold = 12500;
    const total = 5000000;
    const percent = (sold / total) * 100;
    progressBar.style.width = `${percent}%`;

    fetch('sales.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-collected').textContent = data.total_collected + ' USDT';
        });
});

