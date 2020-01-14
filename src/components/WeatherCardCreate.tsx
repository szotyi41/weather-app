import React, { ChangeEvent } from 'react'
import Select from 'react-select'

export interface LocationInterface {
    id: Number;
    name: String;
    country: String;
    coord: {lon: Number, lat: Number};
}

export interface WeatherCardCreateProps {
    addLocation: Function;
}

export interface WeatherCardCreateState {
    options: Array<LocationInterface>;
    location: LocationInterface;
}

export default class WeatherCardCreate extends React.Component<WeatherCardCreateProps, WeatherCardCreateState> {

    constructor(props: any) {

        super(props)

        this.state = {
            location: null,
            options: [
                {
                    "id": 2643743,
                    "name": "London",
                    "country": "GB",
                    "coord": {
                        "lon": 0,
                        "lat": 0
                    }
                },
                {
                    "id": 7284824,
                    "name": "Budapest XI. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.036051,
                      "lat": 47.476028
                    }
                  },
                  {
                    "id": 7284825,
                    "name": "Budapest IX. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.06591,
                      "lat": 47.48299
                    }
                  },
                  {
                    "id": 7284826,
                    "name": "Budapest VIII. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.07012,
                      "lat": 47.489189
                    }
                  },
                  {
                    "id": 7284827,
                    "name": "Budapest VII. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.06875,
                      "lat": 47.50045
                    }
                  },
                  {
                    "id": 7284828,
                    "name": "Budapest VI. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.06583,
                      "lat": 47.503689
                    }
                  },
                  {
                    "id": 7284829,
                    "name": "Budapest XIV. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.107889,
                      "lat": 47.518299
                    }
                  },
                  {
                    "id": 7284830,
                    "name": "Budapest XIII. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.080681,
                      "lat": 47.529781
                    }
                  },
                  {
                    "id": 7284831,
                    "name": "Budapest IV. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.08909,
                      "lat": 47.561821
                    }
                  },
                  {
                    "id": 7284832,
                    "name": "Budapest XV. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.11681,
                      "lat": 47.56263
                    }
                  },
                  {
                    "id": 7284833,
                    "name": "Budapest XVI. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.17028,
                      "lat": 47.51482
                    }
                  },
                  {
                    "id": 7284834,
                    "name": "Budapest X. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.15835,
                      "lat": 47.479099
                    }
                  },
                  {
                    "id": 7284835,
                    "name": "Budapest XIX. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.149429,
                      "lat": 47.45293
                    }
                  },
                  {
                    "id": 7284836,
                    "name": "Budapest XVIII. keruelet",
                    "country": "HU",
                    "coord": {
                      "lon": 19.175949,
                      "lat": 47.444172
                    }
                  },
            ]
        }
    }
    
    changeLocationEvent = (location: LocationInterface) => {
        this.setState({ location: location })
    }

    addLocation = (location: LocationInterface) => {
        this.props.addLocation(this.state.location.name.toString())
        this.setState({ location: null })
    }

    render() {

        return (
            <div className="weather-card-outer">
                <div className="weather-card">
                    <Select 
                        className="location-select" 
                        options={this.state.options}
                        value={this.state.location}
                        getOptionLabel={(option: LocationInterface) => option.name.toString()}
                        getOptionValue={(option: LocationInterface) => option.id.toString()}
                        onChange={(location: LocationInterface) => this.changeLocationEvent(location)}
                        placeholder="Select location">
                    </Select>

                    <button className="button-prm location-add-button" 
                        disabled={this.state.location === null} 
                        onClick={e => this.addLocation(this.state.location)}>Add location</button>
                </div>
            </div>
        )
    }
}