import React, { Component } from 'react'
import WeatherPage from '../pages/WeatherPage'
import ComplaintPage from '../pages/ComplaintPage'
import KittyPage from '../pages/KittyPage'
import { Route } from 'react-router-dom';

const CITIES = ['Perth', 'London', 'Paris', 'Tokyo', 'Sydney'];

const API_URL = 'https://api.openweathermap.org/data/2.5';

class AppContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        city: CITIES[0],
        temperature: '',
        forecast: [],
      };
  
      this.handleCityChange = this.handleCityChange.bind(this);
    }
  
    fetchApiData() {
      fetch(
        `${API_URL}/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      ) // Call the fetch function passing the url of the API as a parameter
        .then(response => {
          console.log(response);
          return response.json();
          // Your code for handling the data you get from the API
        })
        .then(data => {
          console.log(data);
          this.setState({ temperature: data.main.temp });
        })
        .catch(function(err) {
          console.error(err);
          // This is where you run code if the server returns any errors
        });
    }
  
    fetchForecast() {
      fetch(
        `${API_URL}/forecast?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then(response => {
            console.log(response);
            return response.json();
            // Your code for handling the data you get from the API
          })
          .then(data => {
            console.log(data);
            this.setState({ forecast: data.list });
          })
        .catch(err => {
          console.error(err);
        });
    }
  
    getRandomCity(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    

    handleCityChange() {
      this.setState({ city: this.getRandomCity(CITIES) }, () => {
        this.fetchApiData();
        this.fetchForecast();
      });
    }

    

    // changeHandler = event => {
    //   this.setState({[event.target.name]: event.target.value})
    // }
    
    // handleSubmit (event) {
    //   event.preventDefault();
    //   console.log(event.target.value);
    // }
  
    componentDidMount() {
      this.fetchApiData();
      this.fetchForecast();
    }
  
    render() {
      return (
        <>
        <Route path="/" component={() => {
            return (
          <WeatherPage
            city={this.state.city}
            temperature={this.state.temperature}
            forecast={this.state.forecast}
            changeCity={this.handleCityChange}
          />
            )
        }}
        exact
        />
        <Route 
            path="/complain"
            component={() => {
               return(     
          <ComplaintPage
            city={this.state.city}
            temperature={this.state.temperature}
            changeCity={this.handleCityChange}
            name={this.state.name}
            email={this.state.email}
            message={this.state.messagetext}
            onSubmit={this.handleSubmit}
          />
               )
        }}
        />
        <Route
            path="/catmood"
            component={() => {
                return( 
          <KittyPage />
            )
        }}
        />
    </>
      )
    }}
  
  export default AppContainer;