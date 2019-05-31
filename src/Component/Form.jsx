import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="weatherform" onSubmit={this.props.Weather}>
          <input type="text" name="city" placeholder="City..." required />
          <input type="text" name="country" placeholder="Country" required />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}
