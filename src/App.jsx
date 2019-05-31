import React from "react";
import { Component } from "react";
import Title from "./Component/Title.jsx";
import Form from "./Component/Form.jsx";
import Weather from "./Component/Weather.jsx";
const API = "2d6c038d2a03b7478919c4c5d35651ba";
// const API = process.env.local.API_KEY;
// let profile = "col-xs-5 default";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      desc: undefined
    };
  }
  Weather = async e => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}&units=metric`
    );
    let data = await api_call.json();
    console.log(data);
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      desc: data.weather[0].description
    });
  };
  getProfile = () => {
    if (!this.state.desc) {
      return "col-xs-5 default";
    }
    if (
      this.state.desc.includes("clouds") ||
      this.state.desc.includes("haze") ||
      this.state.desc.includes("hazy") ||
      this.state.desc.includes("cloud") ||
      this.state.desc.includes("cloudy")
    ) {
      return "col-xs-5 haze";
    } else if (
      this.state.desc.includes("rain") ||
      this.state.desc.includes("rainy")
    ) {
      return "col-xs-5 rain";
    } else if (
      this.state.desc.includes("snow") ||
      this.state.desc.includes("snowfall")
    ) {
      return "col-xs-5 snow";
    } else if (
      this.state.desc.includes("thunder") ||
      this.state.desc.includes("thunderstrom")
    ) {
      return "col-xs-5 thunder";
    } else if (
      this.state.desc.includes("sunny") ||
      this.state.desc.includes("clear")
    ) {
      return "col-xs-5 sunny";
    } else {
      return "col-xs-5 default";
    }
  };

  render() {
    return (
      <div>
        <div class="wrapper">
          <div class="main">
            <div class="container">
              <div class="row">
                <div className={this.getProfile()}>
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form Weather={this.Weather} />
                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    desc={this.state.desc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <Title />
        <Form Weather={this.Weather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          desc={this.state.desc}
        /> */
}
