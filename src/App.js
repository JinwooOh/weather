import React, { Component } from 'react';
import './App.css';
import api from './api.json';
import icon from './svgList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      inputValue: '',
      unitValue: 'F',
      lat: '',
      lnt: '',
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      this.setState(
        {
          lat: position.coords.latitude,
          lnt: position.coords.longitude,
        },
        () => {
          this.getData();
        }
      )
    );
  }

  getData() {
    fetch(
      `https://jindarkskyweather.herokuapp.com/api/darksky?lat=${
        this.state.lat
      }&lng=${this.state.lnt}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          // location: data.current_observation.display_location.full,
          // date: data.current_observation.observation_time.substr(16),
          // weather: data.current_observation.weather,
          summary: data.currently.summary,
          icon: data.currently.icon,
          tempF: Math.round(data.currently.temperature),
          humidity: data.currently.humidity,
          windMPH: data.currently.windSpeed,
          precipitation: data.currently.precipProbability,
          uv: data.currently.uvIndex,
          errorMsg: ' ',
        });
      })
      .catch(error => {
        this.setState({
          errorMsg: 'Put valid City, State or Zip Code',
        });
      });
    // location information
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${this.state.lat}+${
        this.state.lnt
      }&key=${api.geokey}`,
      { mode: 'cors' }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          location: data.results[0].components.city,
          date: new Date(data.timestamp.created_http)
            .toUTCString()
            .split(' ')
            .slice(0, 4)
            .join(' '),
        });
      });
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${
        this.state.inputValue
      }&key=${api.geokey}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          location:
            data.results[0].components.city || data.results[0].components.state,
          lat: data.results[0].geometry.lat,
          lnt: data.results[0].geometry.lng,
        });
      })
      .then(() => {
        fetch(
          `https://jindarkskyweather.herokuapp.com/api/darksky?lat=${
            this.state.lat
          }&lng=${this.state.lnt}`
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              summary: data.currently.summary,
              icon: data.currently.icon,
              tempF: Math.round(data.currently.temperature),
              humidity: data.currently.humidity,
              windMPH: data.currently.windSpeed,
              precipitation: data.currently.precipProbability,
              uv: data.currently.uvIndex,
              errorMsg: ' ',
            });
          })
          .catch(error => {
            this.setState({
              errorMsg: 'Put valid City, State or Zip Code',
            });
          });
      })
      .catch(error => {
        this.setState({
          errorMsg: 'Put valid City, State or Zip Code',
        });
      });
  };

  handleClick = e => {
    this.setState({
      unitValue: e.target.id,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 push md-3 col-xl-4 push-xl-4 card-block">
              <div className="d-flex justify-content-between">
                <div className="d-inline-block">
                  <h3>{this.state.location}</h3>
                  <p>{this.state.date}</p>
                  <p>{this.state.summary}</p>
                </div>

                <div
                  className="d-inline-block btn-group btn-group-sm"
                  data-toggle="buttons"
                >
                  <button
                    type="button"
                    id="F"
                    onClick={this.handleClick}
                    className="btn btn-primary active"
                    defaultChecked
                  >
                    <input type="radio" name="options" checked />
                    &deg; F
                  </button>
                  <button
                    type="button"
                    id="C"
                    onClick={this.handleClick}
                    className="btn btn-primary"
                    defaultChecked
                  >
                    <input type="radio" name="options" />
                    &deg; C
                  </button>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-4 col-md-3">
                  {icon(this.state.icon)}

                  {/* <img
                    className="img-fluid"
                    src={this.state.icon}
                    alt="weather icon"
									/> */}
                </div>

                <div className="col-4 col-md-4">
                  {this.state.unitValue === 'F' ? (
                    <h1 className="big-font">
                      {this.state.tempF}
                      <span className="units">&deg; F</span>
                    </h1>
                  ) : (
                    <h1 className="big-font">
                      {Math.round(((this.state.tempF - 32) * 5) / 9)}
                      <span className="units">&deg; C</span>
                    </h1>
                  )}
                </div>

                <div className="col-4 col-md-5">
                  <div className="small-font">
                    <p>Humidity: {this.state.humidity} </p>
                    <p>
                      Wind: {this.state.windMPH}, {this.state.windDegree}
                    </p>
                    <p>Precipitation: {this.state.precipitation}</p>
                    <p>UV: {this.state.uv}</p>
                  </div>
                </div>
              </div>

              <form
                onSubmit={this.handleSubmit}
                className="form-inline mt-4 justify-content-around"
              >
                <input
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  className="form-control mb-4 mb-sm-0"
                  type="text"
                  placeholder="City, State or Zip Code"
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>

              <p className="text-danger text-center">{this.state.errorMsg}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
