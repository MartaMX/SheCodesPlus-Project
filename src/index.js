//Challenge 1
//Display the current date and time using JavaScript: Tuesday 16:00

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let replaceCity = document.querySelector("#currentDay");
replaceCity.innerHTML = `${day}, ${hours}:${minutes}`;

//Challenge 2
//Add a search engine, when searching for a city (i.e. Paris),
//display the city name on the page after the user submits the form.
//New: display city's temperature
function showTemperature(response) {
  console.log(response);
  let localTemperature = document.querySelector("#temperature-number");
  localTemperature.innerHTML = Math.round(response.data.main.temp);
}

function DisplayCity(event) {
  event.preventDefault();
  let City = document.querySelector("#shown-city");
  let input = document.querySelector("#autoSizingInput");
  City.innerHTML = `${input.value}`;
  let apiKey = "23ab03a6498fafc28975a1bf7ad1e307";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let units = "metric";
  let apiUrl = `${apiEndpoint}?q=${input.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let inputCity = document.querySelector("#submit-button");
inputCity.addEventListener("click", DisplayCity);
