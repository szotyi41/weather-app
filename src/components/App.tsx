import React from 'react'
import Loadingbar from './Loadingbar'
import WeatherCard from './WeatherCard'


export default class App extends React.Component {

    async componentDidMount() {
        const weather = await fetch('http://samples.openweathermap.org/data/2.5/weather?q=London&appid=9d7c3c613f7362eca3f5c988f71e9d87', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'http://samples.openweathermap.org/',
                'Access-Control-Allow-Methods': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
        .then(response => console.log(response))
    }

    render() {
        return (
            <div>
                <Loadingbar/>

                <WeatherCard></WeatherCard>
            </div>
        )
    }
}