let weather = {
	paris: {
		temp: 19.7,
		humidity: 80,
	},
	tokyo: {
		temp: 17.3,
		humidity: 50,
	},
	lisbon: {
		temp: 30.2,
		humidity: 20,
	},
	"san francisco": {
		temp: 20.9,
		humidity: 100,
	},
	oslo: {
		temp: -5,
		humidity: 20,
	},
};

let city = prompt("Enter a city");
city = city.toLowerCase();

if (weather[city] !== undefined) {
	let temp = weather[city].temp;
	let celsiusTemp = Math.round(temp);
	let fahrenheitTemp = Math.round((temp * 9) / 5 + 32);
	let humidity = weather[city].humidity;

	alert(
		`It is currently ${celsiusTemp}°C (${fahrenheitTemp}) in ${city} with a humidity of ${humidity}%.`
	);
} else {
	alert(
		`Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city} .`
	);
}

//week 4 homework
function search(event) {
	event.preventDefault();
	let searchInput = document.querySelector(".search-input");

	let h1 = document.querySelector("h1.current-city");
	h1.innerHTML = `${searchInput.value}`;
}

let place = document.querySelector("#search-bar");
place.addEventListener("submit", search);

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
