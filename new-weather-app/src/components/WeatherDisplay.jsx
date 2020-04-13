import React, { Component } from 'react'
class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherArray: []
        }
    }
    componentDidMount = () => {
        this.loadData();
    }
    loadData = async () => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=35.040031&lon=-89.981873&units=imperial&appid=2b6a88e4f57653303340961486b82f36")
        const json = await response.json();

        console.table(json)
        this.setState({ weatherArray: json.daily })
    }
    render() {
        return (
            this.state.weatherArray.map((daily, idx) => {
                return (
                    <div key={idx}>
                        <p>{daily.temp.min}   </p>
                        <p>{daily.temp.max}   </p>
                        {/* <p>{daily.feels_like.morn }  </p> */}
                    </div>
                )
            }






            )
        );
}
}

    export default WeatherDisplay;