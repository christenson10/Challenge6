
var form = document.querySelector("#cityName");
var input = document.querySelector("#cityNameInput");
var apiKey = "319dbfef577511a19ac29b9e7b392643";

// Grab city name from input and create an event listener for the search button
function returnCityInfo(event) {
  event.preventDefault();
  cityName = input.value;
  console.log(cityName);
  input.value = "";
  getCurrentWeather();
}

function getCurrentWeather() {

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCurrentWeather(data);
      renderFivedayForecast(data);
    });
}

function renderCurrentWeather(data) {
  var cityTemp = document.querySelector("#cityTemp");
  var cityWind = document.querySelector("#cityWind");
  var cityHumid = document.querySelector("#cityHumid");
  var cityHeader = document.querySelector("#cityHeader");
  var uvInfo = document.querySelector("#uvInfo");
  var weatherIcon = document.querySelector("#topIcon");


  cityTemp.textContent = "Temp: " + data.main.temp;
  cityWind.textContent = "Wind: " + data.wind.speed + " MPH";
  cityHumid.textContent = "Humidity: " + data.main.humidity + "%";
  console.log(data);
  cityHeader.textContent = data.name + " - " + moment().format("MMMM Do YYYY");
  weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
  weatherIcon.setAttribute("style", "display: initial");
  weatherIcon.setAttribute("height", "50px");
  weatherIcon.setAttribute("width", "50px");

  fetch(
      "https://api.openweathermap.org/data/2.5/uvi?lat=" +
      data.coord.lat +
      "&lon=" +
      data.coord.lon +
      "&appid=" +
      apiKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      uvInfo.textContent = "UV Index: " + data.value;
      if (data.value < 2) {
        uvInfo.classList.add("favorable");
      } else if (data.value > 2 && data.value < 8) {
        uvInfo.classList.add("moderate");
      } else {
        uvInfo.classList.add("severe");
      }
    });
}

function renderFivedayForecast(data) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apiKey}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 1; i < 6; i++) {
        let divId = $("div#" + i);

        divId.children()[0].innerHTML = data.list[i * 8 - 1].dt_txt.split(" ")[0];
        divId.children()[1].setAttribute("src", `https://openweathermap.org/img/w/${data.list[i * 8 - 1].weather[0].icon}.png`); 
        divId.children()[1].setAttribute("style", "display: initial");
      console.log(data.list[i * 8 - 1].weather[0].icon);
        divId.children()[2].innerHTML = "Temp: " + data.list[i * 8 - 1].main.temp;
        divId.children()[3].innerHTML = "Wind: " + data.list[i * 8 - 1].wind.speed + " MPH";
        divId.children()[4].innerHTML = "Humidity: " + data.list[i * 8 - 1].main.humidity;
      }

    });
}

form.addEventListener("submit", returnCityInfo);