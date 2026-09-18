document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // 2. Filter Functionality for Running vs Cycling Content
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterableItems = document.querySelectorAll('[data-category]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            filterableItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. Pace & Finish Time Calculator Logic
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculatePace);
    }

    function calculatePace() {
        const distance = parseFloat(document.getElementById('calcDistance').value);
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;

        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

        if (totalSeconds <= 0 || isNaN(distance)) {
            alert('Please enter a valid time duration.');
            return;
        }

        // Speed in km/h
        const totalHours = totalSeconds / 3600;
        const speedKmh = (distance / totalHours).toFixed(2);

        // Pace in min/km
        const paceSecondsPerKm = totalSeconds / distance;
        const paceMin = Math.floor(paceSecondsPerKm / 60);
        const paceSec = Math.round(paceSecondsPerKm % 60);
        const formattedPace = `${String(paceMin).padStart(2, '0')}:${String(paceSec).padStart(2, '0')}`;

        // 50% Halfway Split
        const halfSeconds = totalSeconds / 2;
        const splitH = Math.floor(halfSeconds / 3600);
        const splitM = Math.floor((halfSeconds % 3600) / 60);
        const splitS = Math.round(halfSeconds % 60);
        const formattedSplit = `${String(splitH).padStart(2, '0')}:${String(splitM).padStart(2, '0')}:${String(splitS).padStart(2, '0')}`;

        // Render Results to UI
        document.getElementById('speedResult').innerHTML = `${speedKmh} <small>km/h</small>`;
        document.getElementById('paceResult').innerHTML = `${formattedPace} <small>min/km</small>`;
        document.getElementById('splitResult').textContent = formattedSplit;
    }
});