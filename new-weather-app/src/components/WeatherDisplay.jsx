import React, {Component} from 'react'
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
        const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=35.1495&lon=90.0490&appid=2b6a88e4f57653303340961486b82f36")
        const json = await response.json();
        
        console.table(json)
        this.setState({weatherArray: json})
    }
    render() { 
        return (
            <div>
                <h2>Weather Display</h2>
            </div>
          );
    }
}
 
export default WeatherDisplay;