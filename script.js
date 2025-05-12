async function checkWeather()
{
    const apiKey = "95be650ad8b571cf437ecf2e31b80441";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    const city = document.getElementById("city-input").value;
    const response = await fetch(apiUrl + `&q=${city}` + `&apiKey=${apiKey}`);
    var data = await response.json();

    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = data.main.temp + "°C";
    document.getElementById("wind-speed").innerHTML = data.wind.speed + " km/h";
    document.getElementById("humidity-level").innerHTML = data.main.humidity + "%";

    console.log(data);
}