import React, { MouseEvent } from 'react'
import moment from 'moment'

export interface WeatherInterface {
    id: Number;
    main: String;
    description: String;
    icon: String;
}

export interface MainInterface {
    temp: Number;
    pressure: Number;
    humidity: Number;
    temp_min: Number;
    temp_max: Number;
}

export interface WindInterface {
    speed: Number;
    deg: Number;
}

export interface WeatherCardProps {
    /*weather: Array<WeatherInterface>;
    main: MainInterface;
    visibility: Number;
    wind: WindInterface;*/
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
        
        return (
            <div className={'weather-card ' + (this.state.opened ? 'opened' : '')}>
                <div className="weather-card-leftside" onClick={this.toggleCard}>
                    <div className="container">
                        <div className="date">{moment().format('DD MMMM YYYY')}</div>
                        <div className="locale">Budapest</div>
                    </div>
                    <div className="container">
                        <div className="temp">28</div>
                        <div className="unit">Celsius</div>
                    </div>
                </div>

                <div className="weather-card-rightside">
                    <div className="container">
                        <div className="header">
                            <h1>Statistics</h1>
                            <div className="close-button" onClick={e => this.toggleCard(e)}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}