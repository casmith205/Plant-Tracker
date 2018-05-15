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
// let userZip;

class Weather extends Component {

    // componentDidMount() {
    //     API.searchUser(this.props.match.params.id).then(response => {
    //         userZip = response.data;
    //         console.log(userZip);
    //         return userZip;
    //     })
    //         .catch(err => console.log(err));
    // }
    
    getWeather() {
        // Need to change the zip code to userZip after we get some data to test with and uncomment above
        axios.get({
            url: "https://api.openweathermap.org/data/2.5/weather?zip=" + 55414 + ",us&appid=d23506797d07737660408148e7533f22"
        })
            .then(function (response) {
                let weatherImage = this.response.weather[0].id;

                if (weatherImage >= 200 && weatherImage < 300) {
                    return <img src={rainy} />;
                    //thunder
                }
                else if (weatherImage >= 300 && weatherImage < 600) {
                    return <img src={rainy} />;
                    //rain
                }
                else if (weatherImage >= 600 && weatherImage < 700) {
                    return <img src={snow} />;
                    //snow
                }
                else if (weatherImage >= 700 && weatherImage < 800) {
                    return <img src={foggy} />;
                    //mist
                }
                else if (weatherImage == 800) {
                    return <img src={sunny} />;
                    //sunny/clear
                }
                else if (weatherImage >= 800 && weatherImage < 805) {
                    return <img src={cloudy} />;
                    //cloudy
                }
                console.log(weatherImage);
            })
    }
        render() {
            return (
                <div id="weatherbg">
                {this.getWeather()}
                </div>
            )
        }
    }

    export default Weather;