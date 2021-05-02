// var form = document.querySelector("#cityName");
// var input = document.querySelector("#cityNameInput");
// var apiKey = ""

// function returnCityInfo(event) {
//     event.preventDefaul();
// }

// function getCurrentWeather() {
// }

// function renderCurrentWeather(data) {
//     var cityTemp = document.querySelector("#cityTemp");
//     var cityWind
//     var cityHumid
//     var cityHeader
//     var uvInfo

//     cityTemp.textContent = "Temp: " + data.main.temp;
//     cityWind.textContent = "Temp: "
//     cityTemp.textContent = "Temp: "
//     cityTemp.textContent = "Temp: "
//     cityTemp.textContent = "Temp: "
// }

// function renderFivedayForecast(data) {
//     fetch(api)
//     .then(function (response) {

//     })
// }

// data index * 8 for "for loop"

var form = document.querySelector("#cityName");
var input = document.querySelector("#cityNameInput");
var apiKey = "319dbfef577511a19ac29b9e7b392643";
var uvInfo = document.querySelector("uvInfo");

// Grab city name from input and create an event listener for the search button
function returnCityInfo(event) {
  event.preventDefault();
  cityName = input.value;
  console.log(cityName);
  input.value = "";
  getCurrentWeather();
}

function getCurrentWeather() {
  // var currentUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
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
  cityTemp.textContent = "Temp: " + data.main.temp;
  cityWind.textContent = "Wind: " + data.wind.speed + " MPH";
  cityHumid.textContent = "Humidity: " + data.main.humidity + "%";
  console.log(data);
  cityHeader.textContent = data.name + " - " + moment().format("MMMM Do YYYY");
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
        divId.children()[0].innerHTML = data.list[i * 8 - 1].dt_txt.split(
          " "
        )[0];
        divId.children()[1].innerHTML = data.list[i * 8 - 1].weather.icon;
        // divID.children()
      }
    });
  //     document.querySelector("#");
}

// if (uvInfo < 2) {
//   uvInfo.classList.add("favorable");
// } else if (uvInfo (between(x, 2, 8)) {
//   uvInfo.classList.add("moderate");
// } else if (uvInfo > 8) {
//   uvInfo.classList.add("severe");
// }

form.addEventListener("submit", returnCityInfo);

// OLD:
// const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=319dbfef577511a19ac29b9e7b392643"

// function createElements(weatherInfo) {
//     //Create HTML Elements
//     const mainWeatherDiv = document.createElement('div')
//     mainWeatherDiv

//     renderWeatherInfo()
//     renderForecast()
// }

// function renderWeatherInfo () {
//     //Append Element to DOM
// }

// function renderForecast () {
//     //Append Element to DOM
// }

// fetch(queryURL)
//     .then(response => response.json())
//     .then(data => {
//         const weatherInfo = {
//             currTemp: data.main.temp,
//             highTemp: data.main.temp_max,
//             lowTemp: data.main.temp.min
//         }

//         return weatherInfo
//     })
