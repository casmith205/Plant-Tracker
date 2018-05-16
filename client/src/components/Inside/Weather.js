import React, { Component } from "react";
import { PlantInfo } from "../../components";
import API from "../../utils/API";
import axios from "axios";
import cloudy from "../../images/cloudyday.jpg";
import sunny from "../../images/sunnyday.jpg";
import foggy from "../../images/foggyday.jpg";
import snow from "../../images/snowyday.jpg";
import rainy from "../../images/rainyday.jpg";

// Plant axios functions
// Get all plants database by calling get user
// let zipCode;

class Weather extends Component {
    
    state= {
        dailyWeather: ""
    }

    getWeather= (zipCode) => {
        // Need to change the zip code to zipCode after we get some data to test with and uncomment above
        axios.get(
            "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=d23506797d07737660408148e7533f22"
        )
            .then( (response) => {
                // console.log("this",this)
                let weatherImage = response.data.weather[0].id;
                //console.log("weatherresponse", response.data.weather[0].id)
                if (weatherImage >= 200 && weatherImage < 300) {
                    this.setState({dailyWeather: rainy} )
                    //thunder
                }
                else if (weatherImage >= 300 && weatherImage < 600) {
                    this.setState({dailyWeather: rainy} )
                //     //rain
                }
                else if (weatherImage >= 600 && weatherImage < 700) {
                    this.setState({dailyWeather: snow} )
                //     //snow
                }
                else if (weatherImage >= 700 && weatherImage < 800) {
                    this.setState({dailyWeather: foggy} )
                //     //foggy
                 }
                else if (weatherImage == 800) {
                    this.setState({dailyWeather: sunny})
                    //sunny/clear
                }
                else if (weatherImage >= 800 && weatherImage < 805) {
                    this.setState({dailyWeather: cloudy} )
                //     //cloudy
                }
                console.log(weatherImage);
            })
}
    componentDidMount() {
        let zipCode = ""
        //API.getUser=(user.id)=>)
        API.getUser(this.props.userid).then(response => {
            
            zipCode = response.data.zipCode;
            console.log("datashiz", response.data.zipCode);
            this.getWeather(zipCode);
        })
            .catch(err => console.log(err));
    }
    

        render() {
            return (
                <div>
                {/* {this.getWeather()} */}
                <img id="weatherbg" src={this.state.dailyWeather}/>
                {/* {console.log("render this",this)} */}
                
                </div>
            )
        }
    }

 export default Weather;