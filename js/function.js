const KEY = '56ff80ac3a0c0f5f2e37a0de8ad98800'
async function getData(place) {

const base = "https://api.openweathermap.org/data/2.5/weather"
const query = `?q= ${place}&units=metric&appid=${KEY}`

const req = await fetch(base + query)
const data = await req.json()

return data

}

let getCloud = async (place) => {
	const data = await getData(place)
	return data
	}

function validate() {
	if(!input.value) {
		focus(input)
		alert("Joy nomini kiriting!")
		return false
	}
	return true
}
const weather = document.getElementById("weather")


function dataCountry(giveAnswer) {
	weather.innerHTML = `<h1>${giveAnswer.name},${giveAnswer.sys.country}</h1>
    <div class="weather">
        <h3>Gradus      <span>${giveAnswer.main.temp}°C</span></h3>
        <h3>Namlik      <span>${giveAnswer.main.humidity}%</span></h3>
        <h3>Ob havo     <span>${giveAnswer.weather[0].main}</span></h3>
        <h3>Havo bosimi     <span>${giveAnswer.main.pressure}hPa</span></h3>
        <h3>Shamol      <span>${giveAnswer.wind.speed}mph</span></h3>    
    </div>`
}


export{getData, validate, dataCountry, getCloud}