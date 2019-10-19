import React from 'react';
import CurrentWeather from './components/molecules/CurrentWeather';


function App() {
  return (
    <div className="App">
      <CurrentWeather city="London" temperature="13" />
      <CurrentWeather city="Perth" temperature="34" />
      <CurrentWeather city="Paris" temperature="15" />
    </div>
  );
}

export default App;