import React, { createRef } from 'react'
import Loadingbar from './Loadingbar'
import WeatherCard, { ForecastInterface } from './WeatherCard'
import WeatherCardCreate from './WeatherCardCreate'

import ApiAuth from './../api_key.json'

export interface AppStateInterface {
    locations: Array<String>,
    forecasts: Array<ForecastResponseInterface>,
    api_key: String,
    units: String
}

export interface LocationInterface {
    id: Number;
    name: String;
    coord: Object;
    country: String;
    sunrise: Number;
    sunset: Number;
    timezone: Number;
    population: Number;
}

export interface ForecastResponseInterface {
    cod: String;
    city: LocationInterface;
    list: Array<ForecastInterface>;
}

export default class App extends React.Component<{}, AppStateInterface> {

    loadingbar: React.RefObject<Loadingbar>;
    cardcreate: React.RefObject<WeatherCardCreate>;

    constructor(props: any) {

        super(props)

        this.loadingbar = React.createRef();
        this.cardcreate = React.createRef();

        this.state = {
            locations: ['Budapest', 'London'],
            forecasts: [],
            api_key: ApiAuth.api_key.toString(),
            units: 'metric'
        }
    }

    componentDidMount() {
        this.state.locations.forEach(location => this.getWeather(location))
    }

    getWeather = (locationName: String) => {
        this.loadingbar.current.start()
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${locationName}&units=${this.state.units}&appid=${this.state.api_key}`, {method: 'GET'})
            .then((response: Response) => response.json())
            .then((response: ForecastResponseInterface) => {
                this.setState({ forecasts: this.state.forecasts.concat(response) })
                this.loadingbar.current.completed()
            })
    }

    addLocation = (locationName: String) => {
        this.setState({ locations: this.state.locations.concat(locationName) })
        this.getWeather(locationName)
    }

    render() {

        const units: {[key: string]: String} = {
            default: 'Kelvin',
            metric: 'Celsius',
            imperial: 'Fahrenheit'
        }

        const unit: String = units[this.state.units.toString()]

        return (
            <div>
                <Loadingbar ref={this.loadingbar}/>

                <div className="weather-cards">
                    {this.state.forecasts.map((forecast: ForecastResponseInterface, index: Number) => 
                        <WeatherCard forecast={forecast} unit={unit} key={Number(index)} />
                    )}
    
                    <WeatherCardCreate ref={this.cardcreate} addLocation={this.addLocation}></WeatherCardCreate>
                </div>
            </div>
        )
    }
}