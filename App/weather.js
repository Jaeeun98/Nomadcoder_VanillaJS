const weather = document.querySelector(".js_weather");

const apiKey = "bfd0c1e668f1a6bc888ee6e911ea6bc6";
const coords = "coords";

function getWeather(lat, log){
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${apiKey}`
		).then(function(response){
			return response.json();
		}).then(function(json){
			const temperature = json.main.temp;
			const place = json.name;
			weather.innerText = `${temperature} @ ${place}`;
		});
}

function saveCoords(coordsOb) {
	localStorage.setItem(coords, JSON.stringify(coordsOb));
}

function handleGeoSucces(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsOb = {
		latitude,
		longitude
	};
	saveCoords(coordsOb);
	getWeather(latitude, longitude);
}

function handleGeoError() {
	console.log("cant access geo location");
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(coords);
	if(loadedCoords === null) {
		askForCoords();
	} else {
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function init(){

	loadCoords();

}

init();