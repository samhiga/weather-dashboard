var searchHistory = [];
var searchHistoryDisplay = document.getElementById("search-history");

var cityWeather = document.getElementById("city-weather");

 cityWeather.addEventListener("submit", function(event){
     event.preventDefault();
     var cityInput = document.getElementById("city-input").value;
     console.log(cityInput);
     var weatherForcast = "https://api.openweathermap.org/data/2.5/forecast?q="+cityInput+"&appid=ad7da4caf04d6e1954be62c0bd33ba95&units=imperial";

     fetch(weatherForcast).then(function(response){
         return response.json()
         .then(function(data){
             console.log(data);

             var day = data.list[0];

             var currentTime = dayjs().format("h:mm A");
             var currentDate = dayjs().format("dddd, MMMM D, YYYY");

             var cityDisplay = document.getElementById("city-display");
             var timeDisplay = document.getElementById("time-display");
             var humidity = document.getElementById("humidity");
             var wind = document.getElementById("wind");
             var temperature = document.getElementById("temperature");

             cityDisplay.textContent = "City: " + cityInput;
             timeDisplay.textContent = "Current Time: " + currentTime + ", " + currentDate;

             wind.textContent = "Wind "+ day.wind.speed + " MPH";
             humidity.textContent = "Humidity " + day.main.humidity + "%";
             temperature.textContent = "Temp "+ day.main.temp + "°F";

             searchHistory.unshift(cityInput);
            searchHistoryDisplay.textContent = "Search History: " + searchHistory.join(", ");
         })
     })
 })

