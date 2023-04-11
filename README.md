# weather-dashboard

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   |
| jQuery | [https://jquery.com/](https://jquery.com/)   |
| Bootstrap | [https://getbootstrap.com/](https://getbootstrap.com/)   |
| Day.js | [https://day.js.org/](https://day.js.org/)   |
| Open Weather API | [https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)   |



## Description 

[Visit the Deployed Site](https://samhiga.github.io/weather-dashboard/)

This site has the ability to tell the users the current weather(temp,humidity, and wind speed) as well as the upcoming 5 day forcast.




## Table of Contents 

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Javascript Example](#javascript-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)



## Javascript Example

To get a hold of this project, simply navigate to my Github profile and select the repo "work-day-schedule". From there copy the SSH link into your terminal, Gitbash, or whatever application you prefer and use git copy and then paste link. You can then open it using VS Code.


```javascript
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
```

In the above code, I used a function that would use the weather and forcast APIs and grab the information I needed from them and then linked it the corresponding IDs.


## Usage 

In order to use the weather dashboard, the user could type in a city in the search bar, the site would then display the current day's weather, as well as display the upcoming 5 day forecast.  


![Landing Page](./assets/Screen%20Shot%202023-04-10%20at%206.32.30%20PM.png)
![Weather Display](./assets/Screen%20Shot%202023-04-10%20at%206.32.52%20PM.png)



## Learning Points 


Through this project, I got a good experince using APIs and how to properly pull the information I need from them.


## Author Info


### Sam Higa 


* [Portfolio](https://samhiga.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/sam-higa-b887b9209/)
* [Github](https://github.com/samhiga)



## Credits

