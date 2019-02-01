import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./weather/Header";
import Footer from "./weather/Footer";

class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
