const API_KEY = "fea3ae9cd39e9e9a15170ade49a4c4ab"

function handleFormSubmit(event) {
  event.preventDefault();
  //handle submit event
  let city = event['target'][0]['value']
  console.log(city)
  
  
  
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  
  fetch('api.openweathermap.org/data/2.5/weather?q={city name}').then
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  const cityForm = document.getElementById('cityForm')
  cityForm.addEventListener('submit', (e) => handleFormSubmit(e))
})
