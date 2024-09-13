function search(event) {
	event.preventDefault();
	let searchInput = document.querySelector(".search-input");
	let cityName = searchInput.value;
	let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

	axios.get(apiUrl).then(showWeather);

	function showWeather(response) {
		let city = response.data.city;
		let country = response.data.country;
		let h1 = document.querySelector("h1.current-city");
		h1.innerHTML = `${city}, ${country}`;

		let temperature = Math.round(response.data.temperature.current);
		let tempValue = document.querySelector("span.current-temperature-value");
		tempValue.innerHTML = `${temperature}`;

		let icon = response.data.condition.icon_url;
		let currentIcon = document.querySelector("#current-temperature-icon");
		currentIcon.src = `${icon}`;

		let conditions = response.data.condition.description;
		let condReport = document.querySelector("#conditions-phrase");
		condReport.innerHTML = `${conditions}`;

		let humidity = response.data.temperature.humidity;
		let humidityValue = document.querySelector("#humidity");
		humidityValue.innerHTML = `${humidity}%`;

		let windSpeed = response.data.wind.speed;
		let windSpeedValue = document.querySelector("#wind-speed");
		windSpeedValue.innerHTML = `${windSpeed} meter/sec`;
	}
}
let now = new Date();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let dayTime = document.querySelector("#time");
dayTime.innerHTML = `${day} ${hours}:${minutes}`;

let place = document.querySelector("#search-bar");
place.addEventListener("submit", search);
