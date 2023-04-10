var cityWeather = document.getElementById("city-weather")

cityWeather.addEventListener("submit", function(event){
    event.preventDefault()
var cityInput = document.getElementById("city-input").value
console.log(cityInput)
var weatherForcast = "https://api.openweathermap.org/data/2.5/forecast?q="+cityInput+"&appid=ad7da4caf04d6e1954be62c0bd33ba95&units=imperial"

fetch(weatherForcast).then(function(response){
return response.json()
.then(function(data){
console.log(data)

var day = data.list[0]

var humidity = document.getElementById("humidity")

var wind = document.getElementById("wind")

var temperature = document.getElementById("temperature")
wind.textContent = "Wind "+ day.wind.speed + " MPH"
humidity.textContent = "Humidity " + day.main.humidity + "%"
temperature.textContent = "Temp "+ day.main.temp + "°F"
})
})
})