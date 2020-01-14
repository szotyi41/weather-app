import React from 'react'
import moment from 'moment'
import { WeatherInterface, ForecastInterface } from './WeatherCard'

export interface ForecastProps {
    forecast: ForecastInterface;
}

export default class ForecastRow extends React.Component<ForecastProps, {}> {

    constructor(props: any) {
        super(props)
    }

    render() {

        const forecast = this.props.forecast
        const time = moment.unix(Number(forecast.dt)).format('dddd HH:MM')
        const temp = forecast.main.temp

        return (
            <tr className="forecast">
                <td className="forecast-time">{time}</td>
                <td className="forecast-weather">{forecast.weather.map((w: WeatherInterface) => w.main).join(', ')}</td>
                <td className="forecast-temp">{temp}°</td>
            </tr>
        )
    }

}