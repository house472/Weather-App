import React, {Component} from 'react'
import WeatherDisplay from'./WeatherDisplay'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>App AppContainer</h1>
                <WeatherDisplay/>
            </div>
         );
    }
}
 
export default AppContainer;