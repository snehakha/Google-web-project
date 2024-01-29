import React from 'react';
import './App.css';
import asset28 from './asset/asset28.jpeg'

function App() {
  return (
    <div className="App">
      <p className='heading'><u>Weather vs Climate</u></p>
      <p className="intro">Weather and climate, we daily come across this term in books, papers and news. Let's see what each means.</p>

      <table className='difference'>
          <tr>
            <th>Weather</th>
            <th>Climate</th>
          </tr>

          <tr>
            <td>Concerned with day-to-day atmospheric conditions and short-term phenomena like storms, hurricanes, and heatwaves.</td>
            <td>Focuses on the long-term trends and averages of these weather patterns</td>
          </tr>  

          <tr>
            <td>Specific to a particular location or region.</td>
            <td>Applicable to larger geographic areas, encompassing continents, countries, or even the entire planet.</td>
          </tr>

          <tr>
            <td>Predicted using meteorological models, providing short-term forecasts.</td>
            <td>Predictions involve broader trends and are based on historical data and climate models.</td>
          </tr>

          <tr>
            <td>Affects daily activities and immediate well-being of living organisms.</td>
            <td>Influences the distribution of ecosystems, types of vegetation, and overall biodiversity in a region.</td>
          </tr>

          <tr>
            <td>Influenced by local and temporary factors such as air pressure systems, ocean currents, and solar radiation.</td>
            <td>Influenced by long-term factors like latitude, altitude, ocean currents, and greenhouse gas concentrations.</td>
          </tr>

          <tr>
            <td>Today's temperature, tomorrow's rainfall, or the current wind speed.</td>
            <td>Deserts, rainforests, and polar regions are examples of different climate types.</td>
          </tr>

          <tr>
            <td>Highly variable and subject to rapid changes.</td>
            <td>Characterized by relatively stable, long-term patterns.</td>
          </tr>

          <tr>
            <td>Describes atmospheric conditions over a short period, ranging from minutes to days.</td>
            <td>Encompasses the long-term trends and patterns over decades, centuries, or even millennia.</td>
          </tr>

      </table>
      <div className='footer'>
        <img srcSet={asset28} alt='weather-vs-climate'/>
        <button className='home-btn'><a href='https://rohammaiti.github.io/Earth_guardians/'>Go back home</a></button>
      </div>

    </div>
  );
}

export default App;
