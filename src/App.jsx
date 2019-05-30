import React from "react";
import { Component } from "react";
import Title from "./Component/Title.jsx";
import Form from "./Component/Form.jsx";
import Weather from "./Component/Weather.jsx";
const API_KEY = "2d6c038d2a03b7478919c4c5d35651ba";

export default class App extends Component {
  weather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&appid=${API_KEY}&units=metric`
    );
  };
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}
