var searchHistory = [];
var searchHistoryDisplay = document.getElementById("search-history");
var cityWeatherForm = document.getElementById("city-weather");
var cityList = document.getElementById("city-list");


// function for showing search history and making button (couldn't get to work)
// function renderSearchHistory() {
//     searchHistoryDisplay.innerHTML = "";
  
    
//     for (var i = 0; i < searchHistory.length; i++) {
//       var button = document.createElement("button");
//       button.textContent = searchHistory[i];
//       button.setAttribute("class", "search-history-button");
//       searchHistoryDisplay.appendChild(button);
//     }
//   }
  
  
//   function handleSearchHistoryClick(event) {
//     var cityName = event.target.textContent;
  
//     document.getElementById("city-input").value = cityName;
  
//     cityWeatherForm.dispatchEvent(new Event("submit"));
//   }
  
    // function for displaying current weather and upcoming forecast
 cityWeatherForm.addEventListener("submit", function(event){
    event.preventDefault();
    var cityInput = document.getElementById("city-input").value;
    console.log(cityInput);
    var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&appid=ad7da4caf04d6e1954be62c0bd33ba95&units=imperial";
    var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q="+cityInput+"&appid=ad7da4caf04d6e1954be62c0bd33ba95&units=imperial";

    fetch(weatherAPI)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        var currentDate = dayjs().format("dddd, MMMM D, YYYY");

        var cityDisplay = document.getElementById("city-display");
        var timeDisplay = document.getElementById("time-display");
        var humidity = document.getElementById("humidity");
        var wind = document.getElementById("wind");
        var temperature = document.getElementById("temperature");

        cityDisplay.textContent = cityInput;
        timeDisplay.textContent = currentDate;

        wind.textContent = "Wind "+ data.wind.speed + " MPH";
        humidity.textContent = "Humidity " + data.main.humidity + "%";
        temperature.textContent = "Temp "+ data.main.temp + "°F";
    })

    fetch(forecastAPI)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        var forecastList = data.list;
        var forecastDisplay = document.getElementById("forecast");

        forecastDisplay.innerHTML = "";

        for (var i = 0; i < forecastList.length; i+=8) {
            var day = forecastList[i];
            var dayDate = dayjs(day.dt_txt).format("dddd, MMMM D");

            var forecastCard = document.createElement("div");
            forecastCard.classList.add("forecast-card");
            forecastCard.style.display = "inline-block"
            forecastCard.style.margin = "10px"
            forecastCard.style.borderStyle = "solid"
            
            var forecastDate = document.createElement("h3");
            forecastDate.textContent = dayDate;

            var forecastIcon = document.createElement("img");
            forecastIcon.setAttribute("src", "https://openweathermap.org/img/w/" + day.weather[0].icon + ".png");

            var forecastTemp = document.createElement("p");
            forecastTemp.textContent = "Temp: " + day.main.temp + "°F";

            var forecastHumidity = document.createElement("p");
            forecastHumidity.textContent = "Humidity: " + day.main.humidity + "%";

            forecastCard.appendChild(forecastDate);
            forecastCard.appendChild(forecastIcon);
            forecastCard.appendChild(forecastTemp);
            forecastCard.appendChild(forecastHumidity);

            forecastDisplay.appendChild(forecastCard);
        }
    })

      searchHistory.unshift(cityInput);
      searchHistoryDisplay.textContent = "Search History: " + searchHistory.join(", ");
 })
 
  