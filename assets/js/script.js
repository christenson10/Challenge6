var form = document.querySelector("#cityName");
var input = document.querySelector("#cityNameInput");
var apiKey = ""

function returnCityInfo(event) {
    event.preventDefaul();



}

function getCurrentWeather() {

}


function renderCurrentWeather(data) {
    var cityTemp = document.querySelector("#cityTemp");
    var cityWind
    var cityHumid
    var cityHeader
    var uvInfo

    cityTemp.textContent = "Temp: " + data.main.temp;
    cityWind.textContent = "Temp: "
    cityTemp.textContent = "Temp: "
    cityTemp.textContent = "Temp: "
    cityTemp.textContent = "Temp: "
}

function renderFivedayForecast(data) {
    
}


















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