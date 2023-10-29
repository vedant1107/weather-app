import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

import './forecast.css'

const Week_Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {

    const currentDayInWeek = new Date().getDay();

    const forecastDays = Week_Days.slice(currentDayInWeek, Week_Days.length).concat(Week_Days.slice(0, currentDayInWeek))

    // console.log(forecastDays)

    return (
        <>
            <label className="title">Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) =>
                (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>

                            <AccordionItemButton>
                                <div className="daily-item">

                                    <img src={`assets/icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />

                                    <label className="day">{forecastDays[idx]}</label>

                                    <label className="description">{item.weather[0].description}</label>

                                    <label className="min-max">{item.main.temp_min}°C / {item.main.temp_max}°C</label>
                                </div>

                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>

                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast