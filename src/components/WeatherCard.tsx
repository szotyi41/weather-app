import React, { MouseEvent } from 'react'
import moment from 'moment'
import { ForecastResponseInterface } from './App'
import ForecastRow from './ForecastRow'


export interface WeatherInterface {
    id: Number;
    main: String;
    description: String;
    icon: String;
}

export interface ForecastInterface {
    dt: Number;
    main: MainInterface;
    weather: Array<WeatherInterface>;
    clouds: CloudsInterface;
    wind: WindInterface;
}

export interface MainInterface {
    temp: Number;
    pressure: Number;
    humidity: Number;
    temp_min: Number;
    temp_max: Number;
    feels_like: Number;
}
export interface WindInterface {
    speed: Number;
    deg: Number;
}
export interface CloudsInterface {
    all: Number;
}
export interface SysInterface {
    sunrise: Number;
    sunset: Number;
}

export interface WeatherCardProps {
    forecast: ForecastResponseInterface;
    unit: String;
}

export interface WeatherCardState {
    opened: Boolean
}

export default class Loadingbar extends React.Component<WeatherCardProps, WeatherCardState> {

    constructor(props: any) {

        super(props)

        this.state = {
            opened: false
        }
    }

    toggleCard = (event: MouseEvent) => {
        this.setState(state => ({ opened: !state.opened }))
    }

    render() {
        
        const currentWeather = this.props.forecast.list[0]
        const location = this.props.forecast.city

        const locationName: String = location.name
        const weatherName: String = currentWeather.weather[0].main
        const date = moment.unix(Number(currentWeather.dt)).format('YYYY MMMM DD')
        const temp: Number = Math.round(Number(currentWeather.main.temp))
        const unit: String = this.props.unit 

        // Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
        const wind: Number = currentWeather.wind.speed

        // Cloudiness, %
        const cloudiness: Number = currentWeather.clouds.all
        
        const sunrise: String = moment.unix(Number(location.sunrise)).format('HH:MM')
        const sunset: String = moment.unix(Number(location.sunset)).format('HH:MM')
        
        const temp_min: Number = currentWeather.main.temp_min 
        const temp_max: Number = currentWeather.main.temp_max 

        const forecasts: Array<ForecastInterface> = this.props.forecast.list

        const icons: {[key: string]: String} = {
            '01d': 'Sun', '01n': 'Moon',
            '02d': 'Cloud-Sun', '02n': 'Cloud-Moon',
            '03d': 'Cloud', '03n': 'Cloud',
            '04d': 'Cloud', '04n': 'Cloud',
            '09d': 'Cloud-Rain-Alt', '09n': 'Cloud-Rain-Moon-Alt',
            '10d': 'Cloud-Rain-Sun', '10n': 'Cloud-Rain-Moon', 
            '11d': 'Cloud-Lightning', '11n': 'Cloud-Lightning',
            '13d': 'Cloud-Snow-Sun', '13n': 'Cloud-Snow-Moon', 
            '50d': 'Cloud-Fog-Sun', '50n': 'Cloud-Fog-Moon', 
        }
        const icon = icons[currentWeather.weather[0].icon.toLocaleLowerCase()]

        return (
            <div className="weather-card-outer">
                <div className={'weather-card' + (this.state.opened ? ' opened' : '')}>
                    <div className="weather-card-leftside" onClick={this.toggleCard}>
                        <div className="container">

                            <div className="date">{date}</div>
                            <div className="location">{locationName}</div>
                            <img className="icon" src={"icons/" + icon + ".svg"} />

                        </div>
                        <div className="container">
                            <div className="temp">
                                
                                <span>{temp}°</span>
                            </div>
                            <div className="unit">{unit} - {weatherName}</div>
                        </div>
                    </div>

                    <div className="weather-card-rightside">
                        <div className="container">
                            <div className="header">
                                <h1>Statistics</h1>
                                <div className="close-button" onClick={e => this.toggleCard(e)}></div>
                            </div>

                            <div className="statistics">
                                <div className="statistic">
                                    <img className="statistic-icon" src="icons/Thermometer-50.svg"></img>
                                    <div className="statistic-text">{temp_min}° / {temp_max}°</div>
                                </div>
                                <div className="statistic">
                                    <img className="statistic-icon" src="icons/Sun.svg"></img>
                                    <div className="statistic-text">{sunrise} / {sunset}</div>
                                </div>
                                <div className="statistic">
                                    <img className="statistic-icon" src="icons/Wind.svg"></img>
                                    <div className="statistic-text">{wind} km/h</div>
                                </div>
                                <div className="statistic">
                                    <img className="statistic-icon" src="icons/Cloud.svg"></img>
                                    <div className="statistic-text">{cloudiness} %</div>
                                </div>
                            </div>

                            <div className="header">
                                <h1>Forecast</h1>
                            </div>

                            <div className="forecasts">
                                <table>
                                    {forecasts.map((forecast: ForecastInterface, index) => <ForecastRow forecast={forecast} key={index}></ForecastRow>)}
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}