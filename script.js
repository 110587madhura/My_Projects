document.addEventListener('DOMContentLoaded', () => {
const cityInput = document.getElementById('city-input')
const getWeatherBtn = document.getElementById('get-weather-btn')
const weatherInfo = document.getElementById('weather-info')
const cityNameDisplay = document.getElementById('city-name')
const temperatureDisplay = document.getElementById('temperature')
const description = document.getElementById('description')
const errorMsg = document.getElementById('error-message')

const API_KEY = "fa7ad3b89b3cd079226f60d8cfd1b7ff"; // env variables 

getWeatherBtn.addEventListener('click' , async () => {
   const city = cityInput.value.trim()
   if(!city) return;

   try {
    const weatherData = await fetchWeatherData(city)
    displayWeatherData(weatherData)
   } catch (error) {
    showError()
   }
})

   async function fetchWeatherData(city) {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

const response = await fetch(url)
console.log(typeof response)  // Object-type
console.log('Response :', response)
    if(!response.ok) {
        throw new Error(" City Not found")
    }
    const data = await response.json()
    return data
    }

    function displayWeatherData(data) {
        console.log(data)
         const {name, main, weather} = data
         cityNameDisplay.textContent = name
 temperatureDisplay.textContent = `Temperature : ${main.temp}`;
description.textContent = `Weather : ${weather[0].description}`
        
// unlock the display ;
         weatherInfo.classList.remove('hidden')
         errorMsg.classList.add('hidden')
        
    }

    function showError() {
        weatherInfo.classList.add('hidden')
        errorMsg.classList.remove('hidden')
    }

})

// awalays rememeber if we make any request for fetching data it may throw an ERROR and server / database alaways in another continent....:)