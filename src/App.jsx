import Search from './components/Search/Search'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import './App.css'
import { getWeatherInfo } from './api/api'
import { useState } from 'react'
import Forecast from './components/Forecast/Forecast'
import WelcomePage from './components/WelcomePage/WelcomePage'
function App() {

	const [currentWeather, setCurrentWeather] = useState(null)
	const [forecast, setForecast] = useState(null)

	const handleOnSearchChange = async (searchData) => {
		// console.log(searchData)
		const [lat, lon] = searchData.value.split(" ")

		const response =  await getWeatherInfo(lat, lon)
		// console.log(response)

		const currentWeatherRes = response.currentWeatherResponse
		const forecastRes = response.forecastResponse

		setCurrentWeather({ city: searchData.label, ...currentWeatherRes })
		setForecast({ city: searchData.label, ...forecastRes })
				
	}

	// console.log(currentWeather)
	// console.log(forecast)

	return (
		<div className='container'>
			<Search onSearchChange={handleOnSearchChange} />
			{!currentWeather && <WelcomePage />}
			{currentWeather && <CurrentWeather data = {currentWeather}/>}
			{forecast && <Forecast data = {forecast} />}
		</div>
	)
}

export default App
