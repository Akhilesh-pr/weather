function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`).then(Response => Response.json())
        .then(out => displaydata(out))
    function displaydata(dataArray) {
        temp=Math.floor(dataArray.main.temp-273.15)
        city=city.toUpperCase()
        result.innerHTML = `<div class="card" style="width: 100% bg-dark">
                            <div class="card-header fw-bolder">
                            <div class="row">
                            <div class="col-6">
                            <li><img src="./images/Weather-No-Background.png" alt="" id="img"></li>
                            </div>
                            <div class="col-6">
                            <p class="text-center" id="temp">${temp}°C</p>

                            </div>
                            </div>
<center>
             <li class="list-group-item" id="city">    ${city}</li>
                            </center>
                            </div>
                            <ul class="list-group list-group-flush">


                                <li class="list-group-item fs-5">Condition: ${dataArray.weather[0].main}</li>
                            <li class="list-group-item">Feels like: ${(dataArray.main.feels_like - 32) / 1.8} °C</li>
                            <li class="list-group-item">Pressure: ${dataArray.main.pressure} atm</li>
                            <li class="list-group-item">Humidity: ${dataArray.main.humidity}%</li>
                            </ul>
                            </div>`
    }
}
function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error)
    function success(location) {
        console.log(location.coords.latitude);
        result.innerHTML = `<div class="card" style="width: 100%">
        <li><img src="./images/Weather-No-Background.png" alt="" id="img"></li>

                            <div class="card-header">Coordinates
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Latitude: ${location.coords.latitude}</li>
                            <li class="list-group-item">Longitude: ${location.coords.longitude}</li>
                         
                            </ul>
                            </div>`
    }
    function error() {
        alert('device location unavailable');
    }
}
