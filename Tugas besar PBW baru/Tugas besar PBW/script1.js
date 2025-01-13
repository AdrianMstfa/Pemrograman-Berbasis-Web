document.getElementById('get-wind-speed').addEventListener('click', async () => {
    const location = document.getElementById('location').value.trim();
    const apiKey = '0e76542d39549b4e962d2eb8f717b0ed';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    if (!location) {
        document.getElementById('wind-speed').textContent = 'Please enter a location.';
        return;
    }

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Location not found. Please try again.');
        }

        const data = await response.json();
        const windSpeed = data.wind.speed;

        document.getElementById('wind-speed').textContent = `${windSpeed} m/s`; // Tampilkan kecepatan angin
    } catch (error) {
        document.getElementById('wind-speed').textContent = error.message;
    }
});

// Tombol logout
document.getElementById('logout').addEventListener('click', () => {
    window.location.href = 'login.html';
});
