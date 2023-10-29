// GeoDB Cities API from Rapid API
// endpoint -> cities
// copy pasted
const GeoCityURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5d621dbbemsh2c9d8db1384dac2p194a0djsn71c2069b62be',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// [react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options.

export const getCityNames = async(inputValue) => {
    try {
        const response = await fetch(`${GeoCityURL}?namePrefix=${inputValue}`, geoApiOptions);
        // console.log(`${url}?namePrefix=${inputValue}`)
        const result = await response.json();
        // console.log(result);
        // console.log(result.data);
        
        const LoadOptionsObject = {
            options: result.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name},${city.countryCode}`
                }
            })
        }
        // console.log(LoadOptionsObject)
        return LoadOptionsObject;


    } catch (error) {
        console.error(error);
    }
}


//OpenWeatherMap Api
// url for current weather info api docs -> https://openweathermap.org/current
// url for weather forecast api docs -> https://openweathermap.org/forecast5

const Weather_API_key = "c16f96713cff6a6f111dd545d50e9be3"
// ex. for current weather info -> "https://api.openweathermap.org/data/2.5/weather?lat=42.47635833&lon=1.48949167&appid=c16f96713cff6a6f111dd545d50e9be3"

const Current_Weather_URL = "https://api.openweathermap.org/data/2.5"

const Forecast_URL = "https://api.openweathermap.org/data/2.5"
// ex. for forecast -> "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c16f96713cff6a6f111dd545d50e9be3"


export const getWeatherInfo = async (lat, lon) => {
    try {
        // fetching current weather info
        const currentWeatherResponse = await (await fetch(`${Current_Weather_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_key}`)).json()

        // fetching forecast info
        const forecastResponse = await (await fetch(`${Forecast_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_key}`)).json()

        // console.log(currentWeatherResponse)
        // console.log(forecastResponse)

        return {currentWeatherResponse, forecastResponse}
    }
    catch(error) {
        console.log(error)
    }
}


