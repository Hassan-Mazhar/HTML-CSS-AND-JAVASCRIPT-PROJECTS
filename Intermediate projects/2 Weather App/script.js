const API_KEY = "d86122276cec5797359302057b0f9362"; // Replace with your OpenWeatherMap API key

function getWeatherByCoords() {
    // Get latitude and longitude from user input
    const lat = document.getElementById("lat-input").value;
    const lon = document.getElementById("lon-input").value;

    // Validate input
    if (!lat || !lon) {
        document.getElementById("weather-result").textContent = "Please enter valid latitude and longitude.";
        return;
    }

    // API URL for latitude and longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // Fetch weather data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to fetch weather data. Please check your input.");
            }
            return response.json();
        })
        .then(data => {
            // Display weather data
            const weather = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById("weather-result").innerHTML = weather;
        })
        .catch(error => {
            // Display error message
            document.getElementById("weather-result").textContent = error.message;
        });
}
