import React from "react";
import { Component } from "react";
import Title from "./Component/Title.jsx";
import Form from "./Component/Form.jsx";
import Weather from "./Component/Weather.jsx";
const API = "2d6c038d2a03b7478919c4c5d35651ba";
// const API = process.env.local.API_KEY;
let profile = "default";

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

  render() {
    return (
      <div>
        <div class="wrapper">
          <div class="main">
            <div class="container">
              <div class="row">
                <div className="col-xs-5" id={profile}>
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
